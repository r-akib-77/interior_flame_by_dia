/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trash2, Plus, LogOut, Loader2, CheckCircle2, Edit3, XCircle, 
  Upload, Image as ImageIcon, Sparkles, Layers, ShieldCheck, Database, HardDrive, AlertCircle, RefreshCw
} from 'lucide-react';
import { MOCK_PRODUCTS } from '@/mockData';

export interface CollectionItem {
  id: string;
  name: string;
  price: number | string;
  description?: string;
  image: string;
  images?: string[];
  style?: string[];
  fabrics?: string[];
  type?: string;
  stitchType?: string;
  created_at?: string;
}

// Safe price formatter
const formatPrice = (price: unknown): string => {
  if (typeof price === 'string' && price.includes('৳')) return price;
  const num = Number(price);
  return isNaN(num) ? String(price) : `৳${num.toLocaleString()}`;
};

export default function AdminProductsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const emptyItem = {
    name: '',
    price: '',
    description: '',
    image: '',
    images: [] as string[],
    style: [] as string[],
    fabrics: [] as string[],
    type: '',
    stitchType: ''
  };

  const [newItem, setNewItem] = useState({ ...emptyItem });
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState('');

  const showToast = useCallback((text: string, type: 'success' | 'error' | 'info' = 'info') => {
    setStatusMessage({ text, type });
    setTimeout(() => setStatusMessage(null), 5000);
  }, []);

  /* ─── API helpers ─── */
  const fetchCollections = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/collections');
      if (!res.ok) throw new Error('Failed to fetch collections');
      const data = await res.json();
      setCollections(Array.isArray(data) ? data : MOCK_PRODUCTS as CollectionItem[]);
    } catch (err: unknown) {
      console.warn('API fetch warning:', err);
      setCollections(MOCK_PRODUCTS as CollectionItem[]);
      showToast('Loaded local fallback products', 'info');
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  /* ─── Handle Single & Multiple Image Upload ─── */
  const handleMultipleFilesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;

    const files = Array.from(fileList);
    setUploading(true);
    setUploadProgress(`Uploading ${files.length} image${files.length > 1 ? 's' : ''}...`);

    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file);
      });

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.urls && data.urls.length > 0) {
        const newUploadedUrls = data.urls;
        setNewItem(prev => {
          const updatedImages = [...prev.images, ...newUploadedUrls];
          return {
            ...prev,
            images: updatedImages,
            image: prev.image || updatedImages[0] || '',
          };
        });
        showToast(`Successfully uploaded ${newUploadedUrls.length} image${newUploadedUrls.length > 1 ? 's' : ''} to Cloudflare R2!`, 'success');
      } else {
        throw new Error(data.error || 'No URLs returned from storage');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      showToast(`Upload failed: ${msg}`, 'error');
    } finally {
      setUploading(false);
      setUploadProgress('');
      e.target.value = '';
    }
  };

  /* ─── Auth Handlers ─── */
  const checkAuthStatus = useCallback(async () => {
    setAuthChecking(true);
    try {
      const res = await fetch('/api/auth/check');
      if (res.ok) {
        setIsLoggedIn(true);
        fetchCollections();
      } else {
        setIsLoggedIn(false);
      }
    } catch {
      setIsLoggedIn(false);
    } finally {
      setAuthChecking(false);
    }
  }, [fetchCollections]);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsLoggedIn(true);
        showToast('Welcome back to Admin Dashboard!', 'success');
        fetchCollections();
      } else {
        setError(data.error || 'Invalid credentials. Please check .env settings.');
      }
    } catch {
      setError('Connection failed — please check network or server status');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    setIsLoggedIn(false);
    setPassword('');
    showToast('Logged out successfully', 'info');
  };

  /* ─── CRUD Handlers ─── */
  const handleSaveItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.name.trim()) return showToast('Please provide an item name', 'error');
    if (!newItem.image && newItem.images.length === 0) return showToast('Please upload at least one image', 'error');

    setLoading(true);
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/collections?id=${editingId}` : '/api/collections';

    const payload = {
      ...newItem,
      image: newItem.image || newItem.images[0] || ''
    };

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        showToast(editingId ? 'Product updated successfully in Cloudflare D1!' : 'Product added successfully to Cloudflare D1!', 'success');
        setNewItem({ ...emptyItem });
        setEditingId(null);
        fetchCollections();
      } else {
        showToast(data.error || 'Save failed — check Cloudflare D1 database configuration', 'error');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      showToast(`Save error: ${msg}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product? This will remove it from Cloudflare D1 database.')) return;

    try {
      const res = await fetch(`/api/collections?id=${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (res.ok) {
        showToast('Product deleted from Cloudflare D1 database', 'success');
        fetchCollections();
      } else {
        showToast(data.error || 'Delete failed', 'error');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      showToast(`Delete error: ${msg}`, 'error');
    }
  };

  const startEdit = (item: CollectionItem) => {
    setEditingId(item.id);
    const rawPrice = String(item.price).replace(/[৳,\s]/g, '');
    let gallery: string[] = [];

    if (Array.isArray(item.images)) gallery = item.images;
    else if (typeof item.images === 'string') {
      try { gallery = JSON.parse(item.images); } catch { gallery = [item.image]; }
    } else {
      gallery = item.image ? [item.image] : [];
    }

    setNewItem({
      name: item.name || '',
      price: rawPrice,
      description: item.description || '',
      image: item.image || (gallery[0] || ''),
      images: gallery,
      style: Array.isArray(item.style) ? item.style : [],
      fabrics: Array.isArray(item.fabrics) ? item.fabrics : [],
      type: item.type || '',
      stitchType: item.stitchType || ''
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewItem({ ...emptyItem });
  };

  const removeImage = (urlToRemove: string) => {
    setNewItem(prev => {
      const newImages = prev.images.filter(u => u !== urlToRemove);
      return {
        ...prev,
        images: newImages,
        image: prev.image === urlToRemove ? (newImages[0] || '') : prev.image
      };
    });
  };

  /* ─── Loading State Check ─── */
  if (authChecking) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white gap-3">
        <Loader2 className="animate-spin text-amber-400" size={32} />
        <p className="text-sm font-medium tracking-widest uppercase text-zinc-400">Verifying Admin Session...</p>
      </div>
    );
  }

  /* ─── Login Screen ─── */
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/90 border border-zinc-800 p-8 rounded-2xl w-full max-w-md backdrop-blur-xl shadow-2xl relative z-10"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <ShieldCheck size={24} />
            </div>
            <h1 className="font-serif text-2xl font-bold text-white tracking-wide">Interior Flame Admin</h1>
            <p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest">Cloudflare D1 & R2 Control Panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                Username
              </label>
              <input
                type="text"
                placeholder="Admin Username"
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="Admin Password"
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold py-3.5 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all flex items-center justify-center shadow-lg shadow-amber-500/20 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : 'Sign In to Dashboard'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  /* ─── Main Admin Dashboard ─── */
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Status Toast Banner */}
        <AnimatePresence>
          {statusMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-4 rounded-xl border text-sm font-medium flex items-center justify-between shadow-lg ${
                statusMessage.type === 'success' 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                  : statusMessage.type === 'error'
                  ? 'bg-red-500/10 border-red-500/30 text-red-300'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
              }`}
            >
              <div className="flex items-center gap-3">
                {statusMessage.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                <span>{statusMessage.text}</span>
              </div>
              <button onClick={() => setStatusMessage(null)} className="text-xs uppercase font-bold opacity-70 hover:opacity-100">
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl backdrop-blur-md">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-white">
                Admin Dashboard
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Cloudflare Pages
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 flex items-center gap-2">
              <Database size={13} className="text-amber-400" /> D1 Database &nbsp;•&nbsp;
              <HardDrive size={13} className="text-amber-400" /> R2 S3 Storage &nbsp;•&nbsp;
              Logged in as <span className="text-white font-medium">{username}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchCollections}
              disabled={loading}
              className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              title="Refresh D1 Data"
            >
              <RefreshCw size={18} className={loading ? "animate-spin text-amber-400" : ""} />
            </button>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              View Site
            </a>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Dashboard Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ── Left Column: Add / Edit Product Form (5 Cols) ── */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl sticky top-6 shadow-xl">
              
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-amber-400" />
                  <h2 className="font-serif text-xl font-bold text-white">
                    {editingId ? 'Edit Product' : 'Add New Product'}
                  </h2>
                </div>
                {editingId && (
                  <button onClick={cancelEdit} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-xs">
                    <XCircle size={16} /> Cancel
                  </button>
                )}
              </div>

              <form onSubmit={handleSaveItem} className="space-y-4">
                
                {/* Product Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Product Title *
                  </label>
                  <input
                    placeholder="e.g. Royal Silk Velvet Kamiz"
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    value={newItem.name}
                    onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                    required
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Price (BDT ৳) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 font-bold text-sm">৳</span>
                    <input
                      placeholder="13500"
                      className="w-full pl-9 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500 transition-colors font-mono"
                      value={newItem.price}
                      onChange={e => setNewItem({ ...newItem, price: e.target.value.replace(/[^0-9.]/g, '') })}
                      required
                    />
                  </div>
                </div>

                {/* Multiple Image Upload & Gallery */}
                <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                  <div className="flex justify-between items-center">
                    <label className="block text-[11px] uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-1.5">
                      <ImageIcon size={14} className="text-amber-400" />
                      Image Gallery (Multiple Upload)
                    </label>
                    <span className="text-[10px] text-zinc-500">
                      {newItem.images.length} uploaded
                    </span>
                  </div>

                  {/* Multiple Image Upload Box */}
                  <div className="relative border-2 border-dashed border-zinc-800 hover:border-amber-500/50 bg-zinc-950/60 rounded-xl p-4 transition-all text-center group cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleMultipleFilesChange}
                      disabled={uploading}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    />
                    <div className="flex flex-col items-center justify-center gap-1 pointer-events-none">
                      {uploading ? (
                        <>
                          <Loader2 size={24} className="animate-spin text-amber-400" />
                          <p className="text-xs text-amber-400 font-medium">{uploadProgress}</p>
                        </>
                      ) : (
                        <>
                          <Upload size={22} className="text-zinc-500 group-hover:text-amber-400 transition-colors" />
                          <p className="text-xs text-zinc-300 font-medium">
                            Click or Drag images to upload to <span className="text-amber-400 font-bold">Cloudflare R2</span>
                          </p>
                          <p className="text-[10px] text-zinc-500">Supports selecting multiple images at once</p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Gallery Grid */}
                  {newItem.images.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 pt-2">
                      {newItem.images.map((url, i) => {
                        const isPrimary = newItem.image === url;
                        return (
                          <div key={i} className="relative aspect-square rounded-lg overflow-hidden group border border-zinc-800 bg-zinc-950">
                            <img
                              src={url}
                              alt={`gallery-${i}`}
                              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${isPrimary ? 'ring-2 ring-amber-400' : ''}`}
                            />
                            
                            {/* Overlay Controls */}
                            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-1.5 p-1">
                              <button
                                type="button"
                                onClick={() => setNewItem({ ...newItem, image: url })}
                                className="text-[9px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30 uppercase tracking-tighter hover:bg-amber-500/40"
                              >
                                Set Front
                              </button>
                              <button
                                type="button"
                                onClick={() => removeImage(url)}
                                className="text-[9px] font-bold text-red-300 bg-red-500/20 px-2 py-0.5 rounded border border-red-500/30 uppercase tracking-tighter hover:bg-red-500/40"
                              >
                                Delete
                              </button>
                            </div>

                            {/* Front Badge */}
                            {isPrimary && (
                              <div className="absolute top-1 right-1 bg-amber-500 text-zinc-950 p-0.5 rounded-full shadow">
                                <CheckCircle2 size={12} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Description
                  </label>
                  <textarea
                    placeholder="Product details, care instructions, or aesthetic notes..."
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500 transition-colors h-24"
                    value={newItem.description}
                    onChange={e => setNewItem({ ...newItem, description: e.target.value })}
                  />
                </div>

                {/* Category Options */}
                <div className="space-y-3 pt-3 border-t border-zinc-800">
                  <div className="grid grid-cols-2 gap-4">
                    
                    {/* Style Checkboxes */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-2">
                        Style Tag
                      </label>
                      <div className="space-y-1.5">
                        {['Original Pakistani', 'Inspired Pakistani'].map(s => (
                          <label key={s} className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={newItem.style.includes(s)}
                              onChange={() => {
                                const next = newItem.style.includes(s)
                                  ? newItem.style.filter(v => v !== s)
                                  : [...newItem.style, s];
                                setNewItem({ ...newItem, style: next });
                              }}
                              className="accent-amber-500 rounded"
                            />
                            <span>{s}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Fabric Checkboxes */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-2">
                        Fabric
                      </label>
                      <div className="space-y-1.5">
                        {['Organza', 'Chiffon', 'Cotton', 'Silk', 'Velvet'].map(f => (
                          <label key={f} className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={newItem.fabrics.includes(f)}
                              onChange={() => {
                                const next = newItem.fabrics.includes(f)
                                  ? newItem.fabrics.filter(v => v !== f)
                                  : [...newItem.fabrics, f];
                                setNewItem({ ...newItem, fabrics: next });
                              }}
                              className="accent-amber-500 rounded"
                            />
                            <span>{f}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {/* Type Select */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">
                        Category Type
                      </label>
                      <select
                        className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                        value={newItem.type}
                        onChange={e => setNewItem({ ...newItem, type: e.target.value })}
                      >
                        <option value="">Select Type</option>
                        <option value="Gown">Gown</option>
                        <option value="Kamiz">Kamiz</option>
                        <option value="Saree">Saree</option>
                        <option value="Lehenga">Lehenga</option>
                      </select>
                    </div>

                    {/* Stitch Type Select */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">
                        Stitch Option
                      </label>
                      <select
                        className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                        value={newItem.stitchType}
                        onChange={e => setNewItem({ ...newItem, stitchType: e.target.value })}
                      >
                        <option value="">Select Stitch</option>
                        <option value="Ready Made">Ready Made</option>
                        <option value="Unstitched">Unstitched</option>
                        <option value="Custom Fit">Custom Fit</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Form Submit Button */}
                <button
                  type="submit"
                  disabled={loading || uploading || !newItem.name || (newItem.images.length === 0 && !newItem.image)}
                  className="w-full bg-amber-500 text-zinc-950 font-bold py-3.5 rounded-xl hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-sm uppercase tracking-wider mt-4"
                >
                  {editingId ? <Edit3 size={18} /> : <Plus size={18} />}
                  {loading ? 'Saving to D1...' : (editingId ? 'Update Product' : 'Add Product to D1 Database')}
                </button>

              </form>
            </div>
          </div>

          {/* ── Right Column: Product Table (7 Cols) ── */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers size={18} className="text-amber-400" />
                  <h2 className="font-serif text-lg font-bold text-white">Cloudflare D1 Inventory</h2>
                </div>
                <span className="text-xs text-zinc-400 font-medium">
                  {collections.length} items total
                </span>
              </div>

              {collections.length === 0 ? (
                <div className="p-12 text-center text-zinc-500 font-serif text-base">
                  No products in Cloudflare D1 database. Add your first item on the left!
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-zinc-950/70 border-b border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-400">
                      <tr>
                        <th className="px-5 py-3.5 font-bold">Product</th>
                        <th className="px-5 py-3.5 font-bold">Price</th>
                        <th className="px-5 py-3.5 font-bold">Details</th>
                        <th className="px-5 py-3.5 font-bold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/60">
                      {collections.map(item => (
                        <tr
                          key={item.id}
                          className={`hover:bg-zinc-800/40 transition-colors ${editingId === item.id ? 'bg-amber-500/10' : ''}`}
                        >
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="relative w-12 h-14 bg-zinc-950 rounded-lg overflow-hidden shrink-0 border border-zinc-800">
                                <img
                                  src={item.image || (Array.isArray(item.images) ? item.images[0] : '')}
                                  className="w-full h-full object-cover"
                                  alt={item.name}
                                />
                                {Array.isArray(item.images) && item.images.length > 1 && (
                                  <span className="absolute bottom-0.5 right-0.5 bg-black/80 text-amber-300 text-[9px] font-mono px-1 rounded">
                                    +{item.images.length}
                                  </span>
                                )}
                              </div>
                              <div>
                                <p className="font-semibold text-white text-sm line-clamp-1">{item.name}</p>
                                <p className="text-[10px] text-zinc-500 font-mono mt-0.5">ID: {item.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-amber-400 font-bold text-sm font-mono whitespace-nowrap">
                            {formatPrice(item.price)}
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex flex-wrap gap-1">
                              {item.type && (
                                <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 text-[10px] rounded font-medium">
                                  {item.type}
                                </span>
                              )}
                              {item.stitchType && (
                                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] rounded font-medium">
                                  {item.stitchType}
                                </span>
                              )}
                              {Array.isArray(item.fabrics) && item.fabrics.map((f: string) => (
                                <span key={f} className="px-2 py-0.5 bg-zinc-950 text-zinc-400 text-[10px] rounded border border-zinc-800">
                                  {f}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-5 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => startEdit(item)}
                                title="Edit product"
                                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                              >
                                <Edit3 size={15} />
                              </button>
                              <button
                                onClick={() => handleDeleteItem(item.id)}
                                title="Delete product"
                                className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
