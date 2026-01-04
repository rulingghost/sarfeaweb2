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
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500">
      
      {/* 1. Dinamik Izgara (Görünürlüğü artırıldı) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      
      {/* 2. Twinkling Dots (Daha belirgin mavi noktalar) */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1.5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1.5 h-1.5 bg-blue-500/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 3. Floating Code Snippets (Görünürlük %15'e çıkarıldı - Artık Görülür!) */}
      {/* Sol Kenar */}
      <div className="absolute left-6 top-0 bottom-0 w-64 opacity-[0.15] dark:opacity-[0.2] overflow-hidden hidden lg:block">
        {CODE_SNIPPETS.slice(0, 7).map((code, i) => (
          <motion.div
            key={`code-l-${i}`}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
            className="text-[11px] font-mono whitespace-nowrap mb-12 text-blue-600 dark:text-blue-400"
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Sağ Kenar */}
      <div className="absolute right-6 top-0 bottom-0 w-64 opacity-[0.15] dark:opacity-[0.2] overflow-hidden hidden lg:block">
         {CODE_SNIPPETS.slice(7).map((code, i) => (
          <motion.div
            key={`code-r-${i}`}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 22 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
            className="text-[11px] font-mono whitespace-nowrap mb-12 text-right text-purple-600 dark:text-purple-400"
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* 4. Mesh Gradient Clouds (Daha renkli) */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[60%] h-[60%] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[120px]"
      />
    </div>
  );
};
