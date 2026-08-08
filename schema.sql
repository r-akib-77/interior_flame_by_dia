CREATE TABLE IF NOT EXISTS collections (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  description TEXT,
  image TEXT NOT NULL,
  images TEXT,
  category TEXT DEFAULT '',
  style TEXT DEFAULT '[]',
  fabrics TEXT DEFAULT '[]',
  type TEXT DEFAULT '',
  stitchType TEXT DEFAULT '',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
