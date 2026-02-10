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
  "while (true) { innovate(); }",
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
      
      {/* 2. Twinkling Noktalar - PERFORMANS OPTİMİZE EDİLDİ */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-blue-600/30 dark:bg-blue-400/40 rounded-full blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              willChange: "opacity, transform"
            }}
          />
        ))}
      </div>

      {/* 3. Floating Code Snippets - PERFORMANS OPTİMİZE EDİLDİ */}
      <div className="absolute inset-0 overflow-hidden">
        {CODE_SNIPPETS.slice(0, 8).map((code, i) => {
            const randomLeft = Math.floor(Math.random() * 85);
            const randomDuration = 20 + Math.random() * 15;
            const randomDelay = -(Math.random() * randomDuration); 
            
            return (
                <motion.div
                key={`floating-code-${i}`}
                initial={{ opacity: 0, x: `${randomLeft}vw` }}
                animate={{ 
                    y: ["110vh", "-20vh"], 
                    opacity: [0, 0.6, 0.6, 0] 
                }}
                transition={{
                    duration: randomDuration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: randomDelay
                }}
                className="absolute font-mono text-[12px] md:text-[14px] whitespace-nowrap text-blue-900/8 dark:text-blue-300/12 font-bold uppercase tracking-tight"
                style={{ willChange: "transform" }}
                >
                {code}
                </motion.div>
            );
        })}
      </div>

      {/* 4. Mesh Gradient Işıkları - PERFORMANS OPTİMİZE EDİLDİ */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -80, 120, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-blue-500/8 dark:bg-blue-600/12 rounded-full blur-[150px]"
        style={{ willChange: "transform" }}
      />
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-20%] w-[90%] h-[90%] bg-purple-500/8 dark:bg-purple-600/12 rounded-full blur-[150px]"
        style={{ willChange: "transform" }}
      />
    </div>
  );
};
