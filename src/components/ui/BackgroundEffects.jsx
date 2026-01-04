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
  "new Socket('wss://sarfea.com.tr/live')",
  "crypto.encrypt(data, secret_key)",
  "const [data, setData] = useState(null);",
  "api.fetch('/v1/analytics/realtime')",
  "export default function App() {",
  "const [theme, setTheme] = useState('dark');"
];

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500 bg-white dark:bg-slate-950">
      
      {/* 1. Nokta Matrisi - Belirgin ve Teknoloji Hissiyatı */}
      <div 
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(#2563eb 1.5px, transparent 1.5px)`,
          backgroundSize: '45px 45px',
        }}
      />
      
      {/* 2. Twinkling Noktalar */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-2 h-2 bg-blue-600/40 dark:bg-blue-400/50 rounded-full blur-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 3. Floating Code Snippets - Sayfa açıldığında heryerde hazır (Negative Delay Tekniği) */}
      <div className="absolute inset-0 overflow-hidden">
        {CODE_SNIPPETS.map((code, i) => {
            const randomLeft = Math.floor(Math.random() * 92);
            const randomDuration = 25 + Math.random() * 35; 
            const randomDelay = -(Math.random() * randomDuration); // Negatif delay: Animasyon "geçmişte" başlamış gibi olur (Full ekran kodu sağlar)
            
            return (
                <motion.div
                key={`floating-code-${i}`}
                initial={{ opacity: 0, x: `${randomLeft}vw` }}
                animate={{ 
                    y: ["110vh", "-20vh"], 
                    opacity: [0, 1, 1, 0] 
                }}
                transition={{
                    duration: randomDuration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: randomDelay
                }}
                className="absolute font-mono text-[13px] md:text-[15px] whitespace-nowrap text-blue-900/10 dark:text-blue-300/15 font-black uppercase tracking-tighter"
                >
                {code}
                </motion.div>
            );
        })}
      </div>

      {/* 4. Mesh Gradient Işıkları */}
      <motion.div
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -100, 150, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[180px]"
      />
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 150, -100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-20%] w-[90%] h-[90%] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[180px]"
      />
    </div>
  );
};
