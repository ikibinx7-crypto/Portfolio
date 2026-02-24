/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Hexagon, 
  Bot, 
  CheckCircle2, 
  Send, 
  Mail, 
  Phone, 
  ChevronDown,
  X,
  Cpu,
  Globe,
  Zap,
  ShieldCheck,
  Sparkles,
  Orbit,
  Atom,
  Brain
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Update HTML lang and dir
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  const translations = {
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'عن المنصة',
        services: 'خدماتنا',
        features: 'المميزات',
        contact: 'تواصل معنا',
        start: 'ابدأ الآن',
      },
      hero: {
        badge: 'مستقبل الأعمال يبدأ هنا',
        title: 'منصة ذكوان:',
        titleAccent: 'الذكاء الاصطناعي',
        titleSuffix: 'في خدمة أعمالك',
        desc: 'نقدم حلول ويب متطورة ووكلاء ذكاء اصطناعي متخصصين في خدمة العملاء وصناعة المحتوى، لمساعدة الشركات على الأتمتة والنمو الذكي.',
        btnPrimary: 'ابدأ رحلتك الآن',
        btnSecondary: 'اكتشف حلولنا',
      },
      dashboard: {
        status: 'حالة الوكيل',
        active: 'نشط الآن',
        accuracy: 'دقة الردود',
        tasks: 'المهام المنجزة',
        savings: 'إجمالي التوفير',
      },
      about: {
        badge: 'عن المنصة',
        title: 'رؤيتنا هي تمكين المستقبل الرقمي',
        desc: 'ذِكوان هي منصة رائدة في تقديم حلول الذكاء الاصطناعي وتطوير المواقع، نهدف إلى تمكين المؤسسات من أتمتة عملياتها وزيادة كفاءتها من خلال تقنيات المستقبل. نحن لا نبني مجرد أدوات، بل نصنع شركاء رقميين أذكياء.',
        techTitle: 'تقنيات متقدمة',
        techDesc: 'نعتمد على أحدث نماذج الذكاء الاصطناعي التوليدي لضمان أفضل النتائج لعملائنا.',
        globalTitle: 'توسع عالمي',
        globalDesc: 'حلولنا مصممة لتتجاوز الحدود الجغرافية وتخدم الشركات في أي مكان في العالم.',
      },
      services: {
        badge: 'خدماتنا',
        title: 'حلول ذكية مصممة لنمو أعمالك',
        web: {
          title: 'حلول الويب المتطورة',
          desc: 'بناء منصات ويب سريعة وآمنة، متاجر إلكترونية متكاملة، وصفحات هبوط مصممة لتحويل الزوار إلى عملاء دائمين.',
          items: ['تصميم عصري ومتجاوب', 'أداء فائق السرعة', 'أمان وحماية متقدمة'],
        },
        customerService: {
          title: 'وكيل خدمة العملاء الذكي',
          desc: 'مساعد ذكي يعمل على مدار الساعة للرد على استفسارات عملائك بدقة عالية وفهم عميق للغة العربية.',
          items: ['ردود فورية 24/7', 'تحويل للموظف عند الحاجة', 'تكامل مع WhatsApp'],
        },
        marketing: {
          title: 'وكيل محتوى وتسويق',
          desc: 'وكيل متخصص في صناعة المحتوى الإبداعي وإدارة الحملات التسويقية لزيادة تفاعل جمهورك.',
          items: ['توليد محتوى ومنشورات', 'الرد الذكي على التعليقات', 'تخطيط حملات تسويقية'],
        },
      },
      why: {
        title: 'لماذا تختار منصة ذكوان؟',
        items: [
          { title: 'فهم عميق للغة العربية', desc: 'وكلاء أذكياء يفهمون اللهجات والسياق العربي بدقة' },
          { title: 'تكامل سلس مع المنصات', desc: 'ربط مباشر مع WhatsApp وموقعك وأنظمة CRM' },
          { title: 'أمان وخصوصية تامة', desc: 'حماية كاملة لبيانات عملائك ومحادثاتك' },
          { title: 'تحسين مستمر للأداء', desc: 'الوكلاء يتعلمون ويتطورون مع كل محادثة' },
        ],
      },
      contact: {
        title: 'تواصل معنا',
        desc: 'هل أنت مستعد لنقل أعمالك إلى المستوى التالي؟ فريقنا جاهز لمناقشة حلولك المخصصة.',
        email: 'البريد الإلكتروني',
        whatsapp: 'واتساب',
        whatsappBtn: 'تواصل عبر واتساب',
        form: {
          name: 'الاسم',
          namePlaceholder: 'أدخل اسمك',
          email: 'البريد الإلكتروني',
          emailPlaceholder: 'example@mail.com',
          message: 'الرسالة',
          messagePlaceholder: 'كيف يمكنني مساعدتك؟',
          send: 'إرسال الرسالة',
        },
      },
      footer: {
        rights: '© {year} منصة ذكوان. جميع الحقوق محفوظة.',
      },
      chat: {
        title: 'مساعدك الذكي',
        status: 'متصل الآن',
        welcome: 'مرحباً بك! كيف يمكنني مساعدتك اليوم في بناء موقعك أو وكيلك الذكي؟',
        placeholder: 'اكتب رسالتك هنا...',
      },
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        features: 'Features',
        contact: 'Contact',
        start: 'Get Started',
      },
      hero: {
        badge: 'The future of business starts here',
        title: 'Thikwan Platform:',
        titleAccent: 'Artificial Intelligence',
        titleSuffix: 'at your service',
        desc: 'We provide advanced web solutions and specialized AI agents for customer service and content creation, helping companies automate and grow intelligently.',
        btnPrimary: 'Start Your Journey',
        btnSecondary: 'Discover Our Solutions',
      },
      dashboard: {
        status: 'Agent Status',
        active: 'Active Now',
        accuracy: 'Response Accuracy',
        tasks: 'Completed Tasks',
        savings: 'Total Savings',
      },
      about: {
        badge: 'About Platform',
        title: 'Our vision is to empower the digital future',
        desc: 'Thikwan is a leading platform in providing AI solutions and web development. We aim to enable organizations to automate their operations and increase efficiency through future technologies. We don\'t just build tools; we create smart digital partners.',
        techTitle: 'Advanced Technologies',
        techDesc: 'We rely on the latest generative AI models to ensure the best results for our clients.',
        globalTitle: 'Global Expansion',
        globalDesc: 'Our solutions are designed to transcend geographical boundaries and serve companies anywhere in the world.',
      },
      services: {
        badge: 'Our Services',
        title: 'Smart solutions designed for your business growth',
        web: {
          title: 'Advanced Web Solutions',
          desc: 'Building fast and secure web platforms, integrated e-commerce stores, and landing pages designed to convert visitors into loyal customers.',
          items: ['Modern & Responsive Design', 'Ultra-fast Performance', 'Advanced Security & Protection'],
        },
        customerService: {
          title: 'Smart Customer Service Agent',
          desc: 'A smart assistant working around the clock to respond to your customers\' inquiries with high accuracy and deep understanding of Arabic.',
          items: ['Instant 24/7 Responses', 'Transfer to Human when needed', 'WhatsApp Integration'],
        },
        marketing: {
          title: 'Content & Marketing Agent',
          desc: 'A specialized agent in creative content creation and managing marketing campaigns to increase your audience engagement.',
          items: ['Content & Post Generation', 'Smart Comment Response', 'Marketing Campaign Planning'],
        },
      },
      why: {
        title: 'Why Choose Thikwan?',
        items: [
          { title: 'Deep Arabic Understanding', desc: 'Smart agents that understand Arabic dialects and context accurately' },
          { title: 'Seamless Integration', desc: 'Direct connection with WhatsApp, your website, and CRM systems' },
          { title: 'Total Security & Privacy', desc: 'Full protection for your customer data and conversations' },
          { title: 'Continuous Performance Improvement', desc: 'Agents learn and evolve with every conversation' },
        ],
      },
      contact: {
        title: 'Contact Us',
        desc: 'Ready to take your business to the next level? Our team is ready to discuss your customized solutions.',
        email: 'Email',
        whatsapp: 'WhatsApp',
        whatsappBtn: 'Contact via WhatsApp',
        form: {
          name: 'Name',
          namePlaceholder: 'Enter your name',
          email: 'Email',
          emailPlaceholder: 'example@mail.com',
          message: 'Message',
          messagePlaceholder: 'How can we help you?',
          send: 'Send Message',
        },
      },
      footer: {
        rights: '© {year} Thikwan Platform. All rights reserved.',
      },
      chat: {
        title: 'Your Smart Assistant',
        status: 'Online',
        welcome: 'Welcome! How can I help you today with building your website or smart agent?',
        placeholder: 'Type your message here...',
      },
    },
  };

  const t = translations[lang];

  return (
    <div className={`min-h-screen font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Hexagon className="text-violet-600 w-10 h-10 fill-violet-50/10" strokeWidth={1} />
              
              {/* Central Orb */}
              <div className="absolute w-2.5 h-2.5 bg-violet-600 rounded-full z-10 shadow-[0_0_15px_rgba(124,58,237,1)]" />
              
              {/* Orbital Rings */}
              <motion.div
                animate={{ rotateX: 70, rotateZ: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-7 h-7 border border-violet-400/40 rounded-full"
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div
                animate={{ rotateX: -70, rotateZ: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute w-7 h-7 border border-violet-400/40 rounded-full"
                style={{ transformStyle: 'preserve-3d' }}
              />

              {/* Core Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-8 h-8 bg-violet-500/20 rounded-full blur-xl"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold tracking-tight text-slate-900">ذِكوان</span>
              <span className="text-[10px] font-bold text-violet-600 tracking-widest uppercase">Thikwan</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="text-slate-600 hover:text-violet-600 font-bold transition-colors border-2 border-slate-200 px-3 py-1 rounded-lg text-xs md:text-sm"
            >
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>
            <button className="bg-violet-600 text-white px-4 md:px-6 py-2 rounded-full text-sm md:font-semibold hover:bg-violet-700 transition-all shadow-lg shadow-violet-200">
              {t.nav.start}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-violet-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-3xl opacity-60 translate-y-1/4 -translate-x-1/4"></div>
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 3 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute hidden lg:block -z-10"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + (i % 3) * 30}%`,
            }}
          >
            <Hexagon className="text-violet-200 w-8 h-8" strokeWidth={1} />
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              <span>{t.hero.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              {t.hero.title} <br />
              <span className="text-violet-600">{t.hero.titleAccent}</span> {t.hero.titleSuffix}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary bg-violet-600 hover:bg-violet-700 text-white">{t.hero.btnPrimary}</button>
              <button className="btn-secondary border-violet-200 text-violet-700 hover:bg-violet-50">{t.hero.btnSecondary}</button>
            </div>
          </motion.div>

          {/* Visual Element (Mirrored from reference) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 max-w-md mx-auto overflow-hidden">
              {/* Scanning Effect */}
              <motion.div 
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent z-20 opacity-50"
              />
              
              <div className="flex justify-between items-center mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <Bot className="text-violet-600 w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{t.dashboard.status}</div>
                    <div className="text-xs text-emerald-500 font-bold flex items-center gap-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      {t.dashboard.active}
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center">
                  <ChevronDown className="text-slate-400 w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">{t.dashboard.accuracy}</span>
                  <span className="font-bold text-slate-900">99.2%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-violet-600 h-full w-[99.2%]"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">{t.dashboard.tasks}</span>
                  <span className="font-bold text-slate-900">1,250+</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-violet-600 h-full w-[85%]"></div>
                </div>
              </div>

              <div className="bg-violet-50 rounded-2xl p-6 text-center">
                <div className="text-slate-500 text-sm mb-1">{t.dashboard.savings}</div>
                <div className="text-3xl font-bold text-violet-600">$12,450.00</div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 border-[40px] border-violet-600/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-violet-400/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-violet-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-violet-100 text-violet-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
                {t.about.badge}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
                {t.about.desc}
              </p>
              
              <div className={`grid sm:grid-cols-2 gap-8 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-violet-100 hover:shadow-md transition-shadow">
                  <Cpu className="text-violet-600 w-10 h-10 mb-4" />
                  <div className="text-2xl font-bold text-slate-900 mb-2">{t.about.techTitle}</div>
                  <p className="text-slate-500">{t.about.techDesc}</p>
                </div>
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-violet-100 hover:shadow-md transition-shadow">
                  <Globe className="text-violet-600 w-10 h-10 mb-4" />
                  <div className="text-2xl font-bold text-slate-900 mb-2">{t.about.globalTitle}</div>
                  <p className="text-slate-500">{t.about.globalDesc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-violet-100 text-violet-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
              {t.services.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {t.services.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-violet-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="text-violet-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.web.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t.services.web.desc}
              </p>
              <ul className="space-y-3">
                {t.services.web.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                    <CheckCircle2 className="text-violet-500 w-4 h-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-violet-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="text-violet-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.customerService.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t.services.customerService.desc}
              </p>
              <ul className="space-y-3">
                {t.services.customerService.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                    <CheckCircle2 className="text-violet-500 w-4 h-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-violet-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-violet-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.marketing.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t.services.marketing.desc}
              </p>
              <ul className="space-y-3">
                {t.services.marketing.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                    <CheckCircle2 className="text-violet-500 w-4 h-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-900/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.why.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.why.items.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">{point.title}</h4>
                <p className="text-white/70 text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-violet-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 bg-slate-900 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t.contact.title}</h2>
                <p className="text-slate-400 mb-12 text-lg">
                  {t.contact.desc}
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Mail className="text-violet-400 w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">{t.contact.email}</div>
                      <div className="font-bold">contact@example.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone className="text-emerald-400 w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">{t.contact.whatsapp}</div>
                      <div className="font-bold">+966 50 000 0000</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition-all">
                    {t.contact.whatsappBtn}
                  </button>
                </div>
              </div>

              <div className="p-12 lg:p-20">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.form.name}</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all" placeholder={t.contact.form.namePlaceholder} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.form.email}</label>
                      <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all" placeholder={t.contact.form.emailPlaceholder} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.form.message}</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all" placeholder={t.contact.form.messagePlaceholder}></textarea>
                  </div>
                  <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                    {t.contact.form.send}
                    <Send className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-violet-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Hexagon className="text-violet-600 w-8 h-8 fill-violet-50/10" strokeWidth={1} />
              <div className="absolute w-1.5 h-1.5 bg-violet-600 rounded-full z-10 shadow-[0_0_8px_rgba(124,58,237,1)]" />
              <motion.div
                animate={{ rotateX: 70, rotateZ: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-5 h-5 border border-violet-400/40 rounded-full"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-slate-900">ذِكوان</span>
              <span className="text-[8px] font-bold text-violet-600 tracking-widest uppercase">Thikwan</span>
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            {t.footer.rights.replace('{year}', new Date().getFullYear().toString())}
          </p>
          <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a key={social} href="#" className="text-slate-400 hover:text-violet-600 transition-colors text-sm font-medium">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating AI Chat Icon */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-20 right-0 w-80 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
            >
              <div className="bg-violet-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.chat.title}</div>
                    <div className="text-[10px] text-violet-200">{t.chat.status}</div>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="h-80 p-4 bg-slate-50 overflow-y-auto flex flex-col gap-4">
                <div className={`bg-white p-3 rounded-2xl shadow-sm text-sm text-slate-700 max-w-[85%] self-start ${lang === 'ar' ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                  {t.chat.welcome}
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 bg-white flex gap-2">
                <input 
                  type="text" 
                  placeholder={t.chat.placeholder} 
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white">
                  <Send className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-violet-700 transition-all relative"
        >
          {isChatOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
          {!isChatOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-violet-400 rounded-full border-4 border-white"></span>
          )}
        </motion.button>
      </div>
    </div>
  );
}
