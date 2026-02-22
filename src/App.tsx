/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Code, 
  Bot, 
  CheckCircle2, 
  Send, 
  Mail, 
  Phone, 
  ChevronDown,
  Menu,
  X,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'من أنا', href: '#about' },
    { name: 'خدماتي', href: '#services' },
    { name: 'لماذا تختارني', href: '#why' },
    { name: 'تواصل معي', href: '#contact' },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
              <Code className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">مطور ذكي</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all">
              ابدأ الآن
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t md:hidden flex flex-col p-6 gap-4 shadow-xl"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-600 hover:text-indigo-600 font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold w-full mt-2">
                ابدأ الآن
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-yellow-50 rounded-full blur-3xl opacity-60 translate-y-1/4 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              أبني لك موقعك الإلكتروني <br />
              <span className="text-indigo-600">ووكيلك الذكي</span> باحترافية
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              أساعد الشركات ورواد الأعمال على التحول الرقمي من خلال تصميم مواقع احترافية وبناء وكلاء ذكاء اصطناعي مخصصين.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">ابدأ مشروعك الآن</button>
              <button className="btn-secondary">شاهد أعمالي</button>
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
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 max-w-md mx-auto">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <Bot className="text-indigo-600 w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">حالة الوكيل</div>
                    <div className="text-xs text-emerald-500 font-bold flex items-center gap-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      نشط الآن
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center">
                  <ChevronDown className="text-slate-400 w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">دقة الردود</span>
                  <span className="font-bold text-slate-900">99.2%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full w-[99.2%]"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">المهام المنجزة</span>
                  <span className="font-bold text-slate-900">1,250+</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full w-[85%]"></div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-6 text-center">
                <div className="text-slate-500 text-sm mb-1">إجمالي التوفير</div>
                <div className="text-3xl font-bold text-indigo-600">$12,450.00</div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 border-[40px] border-indigo-600/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://picsum.photos/seed/dev/800/600" 
                alt="About Me" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
                من أنا
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                شريكك التقني في رحلة النجاح
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                أنا مطور مواقع ومهندس حلول ذكاء اصطناعي، أقدم حلول تقنية حديثة تساعدك على تنمية أعمالك وزيادة مبيعاتك. أؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان لتسهيل حياته وزيادة إنتاجيته.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">5+</div>
                  <div className="text-sm text-slate-500">سنوات خبرة</div>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">100+</div>
                  <div className="text-sm text-slate-500">مشروع ناجح</div>
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
            <div className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
              خدماتي
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              حلول متكاملة لنمو أعمالك الرقمية
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <Code className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">تطوير المواقع الإلكترونية</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                مواقع شركات، متاجر إلكترونية، صفحات هبوط، مواقع شخصية. نستخدم أحدث التقنيات لضمان السرعة والأمان وتجربة مستخدم استثنائية.
              </p>
              <ul className="space-y-3">
                {['تصميم متجاوب', 'تحسين محركات البحث', 'لوحة تحكم سهلة'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="text-yellow-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">بناء وكلاء ذكاء اصطناعي</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                شات بوت، أتمتة الردود، وكلاء مبيعات، تكامل مع المنصات المختلفة. نساعدك على أتمتة عملياتك وزيادة كفاءة فريقك.
              </p>
              <ul className="space-y-3">
                {['أتمتة خدمة العملاء', 'تحليل البيانات الذكي', 'تكامل مع واتساب'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section id="why" className="py-24 bg-indigo-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">لماذا تختارني؟</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'تنفيذ سريع واحترافي', desc: 'نلتزم بالمواعيد مع جودة عالية' },
                  { title: 'تصميم عصري ومتجاوب', desc: 'يعمل بشكل مثالي على كل الأجهزة' },
                  { title: 'دعم فني بعد التسليم', desc: 'نحن معك دائماً للمساعدة' },
                  { title: 'حلول مخصصة حسب احتياجك', desc: 'لا نؤمن بالحلول الجاهزة' },
                ].map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle2 className="text-white w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{point.title}</h4>
                    <p className="text-white/70 text-sm">{point.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/choice/600/600" 
                alt="Why Choose Me" 
                className="rounded-3xl shadow-2xl rotate-3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 bg-slate-900 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">تواصل معي</h2>
                <p className="text-slate-400 mb-12 text-lg">
                  هل لديك مشروع في ذهنك؟ دعنا نتحدث ونرى كيف يمكنني مساعدتك في تحقيقه.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Mail className="text-indigo-400 w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">البريد الإلكتروني</div>
                      <div className="font-bold">contact@example.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone className="text-emerald-400 w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">واتساب</div>
                      <div className="font-bold">+966 50 000 0000</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition-all">
                    تواصل عبر واتساب
                  </button>
                </div>
              </div>

              <div className="p-12 lg:p-20">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">الاسم</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="أدخل اسمك" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">البريد الإلكتروني</label>
                      <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="example@mail.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">الرسالة</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="كيف يمكنني مساعدتك؟"></textarea>
                  </div>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                    إرسال الرسالة
                    <Send className="w-5 h-5 rotate-180" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <Code className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">مطور ذكي</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} جميع الحقوق محفوظة. تم التطوير بكل حب.
          </p>
          <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a key={social} href="#" className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium">
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
              <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">مساعدك الذكي</div>
                    <div className="text-[10px] text-indigo-200">متصل الآن</div>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="h-80 p-4 bg-slate-50 overflow-y-auto flex flex-col gap-4">
                <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-slate-700 max-w-[85%] self-start">
                  مرحباً بك! كيف يمكنني مساعدتك اليوم في بناء موقعك أو وكيلك الذكي؟
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 bg-white flex gap-2">
                <input 
                  type="text" 
                  placeholder="اكتب رسالتك هنا..." 
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                  <Send className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-indigo-700 transition-all relative"
        >
          {isChatOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
          {!isChatOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full border-4 border-white"></span>
          )}
        </motion.button>
      </div>
    </div>
  );
}
