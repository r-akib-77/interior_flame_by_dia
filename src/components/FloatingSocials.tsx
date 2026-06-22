"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookMessenger, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MessageCircle, X } from "lucide-react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  const socials = [
    {
      href: "https://m.me/YOUR_PAGE",
      icon: <FaInstagram size={24} />,
      color: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    },
    {
      href: "https://wa.me/8801404601580",
      icon: <FaWhatsapp size={24} />,
      color: "bg-[#25D366]",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100089198388109&mibextid=wwXIfr&rdid=a3r2oZ9QV5rrwsPd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BGD2CUBC4%2F%3Fmibextid%3DwwXIfr#",
      icon: <FaFacebookF size={20} />,
      color: "bg-[#1877F2]",
    },
  ];

  return (
    <div className="fixed bottom-24 right-5 z-[9999]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-4 flex flex-col gap-3"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  y: 20,
                }}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.12,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  text-white
                  shadow-xl
                  ${social.color}
                `}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        animate={{
          rotate: open ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-700
          to-purple-700
          text-white
          shadow-[0_20px_50px_rgba(79,70,229,0.35)]
        "
      >
        {/* Pulse Ring */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="
            absolute
            inset-0
            rounded-full
            border-2
            border-blue-400
          "
        />

        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
}
