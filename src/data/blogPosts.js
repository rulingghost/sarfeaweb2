import { generateVirtualPosts } from './autoSEOData';

const TODAY = new Date().toISOString().split('T')[0];
const YESTERDAY = new Date(Date.now() - 86400000).toISOString().split('T')[0];

const REAL_POSTS = [
  {
    id: 1,
    slug: "yapay-zeka-ile-erp-donusumu",
    date: TODAY,
    title: {
      tr: "Yapay Zeka ile ERP Dönüşümü: İşletmeler İçin Yeni Bir Çağ",
      en: "ERP Transformation with AI: A New Era for Businesses"
    },
    excerpt: {
      tr: "Geleneksel ERP sistemleri artık yeterli değil. Yapay zeka destekli akıllı ERP çözümleri ile verimliliğinizi nasıl katlayabileceğinizi keşfedin.",
      en: "Traditional ERP systems are no longer enough. Discover how you can multiply your efficiency with AI-powered smart ERP solutions."
    },
    content: {
      tr: `
        <h2>ERP Sistemlerinde Yapay Zeka Devrimi</h2>
        <p>İş dünyası hızla dijitalleşirken, Kurumsal Kaynak Planlama (ERP) sistemleri de bu dönüşümden nasibini alıyor. Artık sadece veri kaydeden sistemler yerine, veriyi analiz eden ve karar destek mekanizmaları sunan yapay zeka destekli ERP'ler ön plana çıkıyor.</p>
        
        <h3>Neden AI Destekli ERP?</h3>
        <ul>
            <li><strong>Otomatik Veri Girişi:</strong> OCR ve NLP teknolojileri ile manuel veri girişini %80 azaltın.</li>
            <li><strong>Tahmine Dayalı Analiz:</strong> Stok durumunu ve satışları önceden tahmin ederek maliyetleri optimize edin.</li>
            <li><strong>Akıllı Raporlama:</strong> Sadece ne olduğunu değil, neden olduğunu ve gelecekte ne olacağını raporlayın.</li>
        </ul>

        <h3>Dönüşüm Nasıl Başlamalı?</h3>
        <p>ERP dönüşümü bir teknoloji projesi olduğu kadar bir kültür değişimidir. Sarfea olarak, işletmenizin ihtiyaçlarına en uygun AI modüllerini entegre ederek bu süreci sorunsuz yönetmenizi sağlıyoruz.</p>
      `,
      en: `
        <h2>The AI Revolution in ERP Systems</h2>
        <p>As the business world rapidly digitizes, Enterprise Resource Planning (ERP) systems are also evolving. Instead of systems that simply record data, AI-powered ERPs that analyze data and offer decision support mechanisms are taking center stage.</p>
        
        <h3>Why AI-Powered ERP?</h3>
        <ul>
            <li><strong>Automated Data Entry:</strong> Reduce manual data entry by 80% with OCR and NLP technologies.</li>
            <li><strong>Predictive Analytics:</strong> Optimize costs by forecasting stock levels and sales.</li>
            <li><strong>Smart Reporting:</strong> Report not just what happened, but why it happened and what will happen in the future.</li>
        </ul>

        <h3>How to Start the Transformation?</h3>
        <p>ERP transformation is as much a cultural shift as it is a technology project. At Sarfea, we ensure a smooth process by integrating AI modules best suited to your business needs.</p>
      `
    },
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
    tags: ["ERP", "AI", "Digital Transformation", "Business Intelligence"]
  },
  {
    id: 2,
    slug: "neden-react-native",
    date: YESTERDAY,
    title: {
      tr: "Mobil Uygulama Geliştirmede Neden React Native?",
      en: "Why React Native for Mobile App Development?"
    },
    excerpt: {
      tr: "Hem iOS hem Android için tek bir kod tabanı. Maliyet avantajı, yüksek performans ve hızlı geliştirme süreçleri.",
      en: "One codebase for both iOS and Android. Cost advantage, high performance, and rapid development processes."
    },
    content: {
      tr: `
        <h2>Tek Kod, İki Platform</h2>
        <p>React Native, Facebook (Meta) tarafından geliştirilen ve günümüzde Instagram, Airbnb, Uber Eats gibi devlerin kullandığı bir teknolojidir. Peki neden siz de tercih etmelisiniz?</p>
        
        <h3>Avantajları Nelerdir?</h3>
        <ul>
            <li><strong>Maliyet Etkinliği:</strong> İki ayrı ekip (iOS ve Android) kurmak yerine tek bir ekiple işi çözebilirsiniz.</li>
            <li><strong>Hızlı Pazara Çıkış (Time-to-Market):</strong> Geliştirme süresi native uygulamalara göre çok daha kısadır.</li>
            <li><strong>Native Performans:</strong> JavaScript köprüsü sayesinde neredeyse native uygulama kadar hızlı çalışır.</li>
        </ul>
        
        <p>Sarfea olarak mobil projelerimizde React Native'in gücünden faydalanıyor, müşterilerimize performanslı ve ölçeklenebilir çözümler sunuyoruz.</p>
      `,
      en: `
        <h2>One Code, Two Platforms</h2>
        <p>React Native is a technology developed by Facebook (Meta) and used today by giants like Instagram, Airbnb, and Uber Eats. So why should you choose it?</p>
        
        <h3>What Are the Advantages?</h3>
        <ul>
            <li><strong>Cost Efficiency:</strong> Instead of building two separate teams (iOS and Android), you can solve it with one team.</li>
            <li><strong>Fast Time-to-Market:</strong> Development time is much shorter compared to native apps.</li>
            <li><strong>Native Performance:</strong> Thanks to the JavaScript bridge, it runs almost as fast as a native app.</li>
        </ul>
        
        <p>At Sarfea, we leverage the power of React Native in our mobile projects, offering performant and scalable solutions to our clients.</p>
      `
    },
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
    tags: ["Mobile App", "React Native", "iOS", "Android"]
  }
];

export const BLOG_POSTS = [...REAL_POSTS, ...generateVirtualPosts()].map(p => ({
  ...p,
  date: p.isVirtual ? TODAY : p.date
}));
