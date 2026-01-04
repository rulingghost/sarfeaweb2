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
  "process.env.NODE_ENV === 'production'"
];

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* 1. Dinamik Izgara (Grid System) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
      
      {/* 2. Twinkling Dots (Siber Doku) */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 3. Floating Code Snippets (Fantom Kodlar) */}
      {/* Sol Kenar */}
      <div className="absolute left-4 top-0 bottom-0 w-64 opacity-[0.03] dark:opacity-[0.07] overflow-hidden hidden lg:block">
        {CODE_SNIPPETS.slice(0, 7).map((code, i) => (
          <motion.div
            key={`code-l-${i}`}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
            className="text-[10px] font-mono whitespace-nowrap mb-8"
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Sağ Kenar */}
      <div className="absolute right-4 top-0 bottom-0 w-64 opacity-[0.03] dark:opacity-[0.07] overflow-hidden hidden lg:block">
         {CODE_SNIPPETS.slice(7).map((code, i) => (
          <motion.div
            key={`code-r-${i}`}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 30 + i * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 4
            }}
            className="text-[10px] font-mono whitespace-nowrap mb-8 text-right"
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* 4. Mesh Gradient Clouds (Existing) */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[50%] h-[50%] bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-purple-400/5 dark:bg-purple-600/5 rounded-full blur-[120px]"
      />

      <div className="noise-overlay" />
    </div>
  );
};
