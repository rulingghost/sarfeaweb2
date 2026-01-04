import React from 'react';
import { motion } from 'framer-motion';

const CODE_SNIPPETS = [
  "const api = createServer({ port: 3000 });",
  "import { Cloud, AI } from 'sarfea-core';",
  "SELECT * FROM digital_transformation;",
  "await crm.sync({ force: true });",
  "deploy.to('edge-network');",
  "optimize.revenue({ strategy: 'ai' });",
  "{ status: '200 OK', latency: '12ms' }",
  "npm install @sarfea/solutions",
  "git push cluster main",
  "docker-compose.yml: legacy-db: up",
  "const erp = new EnterpriseSystem();",
  "while (true) { inovate(); }",
  "system.integrity > 99.9%",
  "process.env.NODE_ENV === 'production'",
  "new Socket('wss://sarfea.io/live')",
  "crypto.encrypt(data, secret_key)",
  "const [data, setData] = useState(null);",
  "api.fetch('/v1/analytics/realtime')"
];

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500 bg-slate-50 dark:bg-slate-950">
      
      {/* 1. Nokta Matrisi (Dot Matrix) - Kareli Defter Değil, Modern Tech Görünümü */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* 2. Rastgele Twinkling Noktalar (Daha Fazla ve Canlı) */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-blue-500 rounded-full blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 3. Floating Code Snippets - Ekranın Her Yerinden Geçen Fantom Kodlar */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.08] dark:opacity-[0.15]">
        {CODE_SNIPPETS.map((code, i) => {
            const randomLeft = Math.floor(Math.random() * 90); // 0-90 arası rastgele yatay pozisyon
            const randomDuration = 20 + Math.random() * 40; // 20-60 saniye arası rastgele hız
            const randomDelay = Math.random() * 20; // Rastgele başlangıç gecikmesi
            
            return (
                <motion.div
                key={`floating-code-${i}`}
                initial={{ y: "110vh", x: `${randomLeft}vw`, opacity: 0 }}
                animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
                transition={{
                    duration: randomDuration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: randomDelay
                }}
                className="absolute font-mono text-[10px] md:text-[12px] whitespace-nowrap text-blue-600 dark:text-blue-400 font-medium"
                >
                {code}
                </motion.div>
            );
        })}
      </div>

      {/* 4. Dinamik Renkli Işıklar (Mesh Gradient) */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[70%] h-[70%] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[150px]"
      />

      {/* 5. Subtle Noise Overlay */}
      <div className="noise-overlay" />
    </div>
  );
};
