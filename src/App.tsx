/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Truck, 
  UserCheck, 
  MapPin, 
  CreditCard, 
  Clock, 
  Users, 
  ShieldCheck, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  CheckCircle2,
  Smartphone,
  LayoutDashboard,
  BarChart3,
  MessageCircle,
  Star,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Truck className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">Movers</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-slate-600 hover:text-primary font-medium transition-colors">How it Works</a>
            <a href="#features" className="text-slate-600 hover:text-primary font-medium transition-colors">Features</a>
            <a href="#farmers" className="text-slate-600 hover:text-primary font-medium transition-colors">For Farmers</a>
            <a href="#drivers" className="text-slate-600 hover:text-primary font-medium transition-colors">For Drivers</a>
            <button className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Book a Trip
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 py-6 flex flex-col gap-4"
          >
            <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">How it Works</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">Features</a>
            <a href="#farmers" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">For Farmers</a>
            <a href="#drivers" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">For Drivers</a>
            <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold w-full">
              Book a Trip
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 px-4 gradient-bg overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6">
          Smart Agricultural Logistics
        </span>
        <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Smart Transport for a <span className="text-primary">Growing</span> Agriculture Network
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-lg">
          Connecting farmers, drivers, and vehicles through an intelligent logistics ecosystem built for efficiency and transparency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/25 flex items-center justify-center gap-2">
            Book a Trip <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors">
            Join as Driver
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200" 
            alt="Truck on road" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        
        {/* Floating card mockup */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3"
        >
          <div className="bg-accent/10 p-2 rounded-lg">
            <MapPin className="text-accent w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Real-time Tracking</p>
            <p className="text-sm font-bold text-slate-900">Nairobi → Mombasa</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Register",
      desc: "Sign up as a farmer, driver, or group in minutes."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Place Order",
      desc: "Specify your load, destination, and vehicle type."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Track & Pay",
      desc: "Monitor your trip and pay securely via Mpesa."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How Movers Transport System Works</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Our streamlined process ensures your agricultural products move from farm to market without the hassle.</p>
      </div>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10"></div>
        
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-primary shadow-lg mb-6 relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
            <p className="text-slate-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <LayoutDashboard />, title: "Management Dashboard", desc: "Full control over your vehicles and drivers." },
    { icon: <Clock />, title: "Smart Scheduling", desc: "Automated order assignment and route optimization." },
    { icon: <CreditCard />, title: "Mpesa Integration", desc: "Fast, secure, and automated payment processing." },
    { icon: <MapPin />, title: "Real-time Tracking", desc: "Know exactly where your cargo is at any moment." },
    { icon: <Users />, title: "Group Booking", desc: "Share transport costs with other farmers in your area." },
    { icon: <ShieldCheck />, title: "Secure System", desc: "Transparent logs and verified user network." }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Movers Transport System</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Advanced technology meeting traditional agricultural needs.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                {React.cloneElement(f.icon as React.ReactElement, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DashboardPreview = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">A Glimpse Into the System</h2>
        <p className="text-slate-600">Built for control, insight, and efficiency.</p>
      </div>
      
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 space-y-6">
          {[
            { icon: <LayoutDashboard />, title: "Active Orders", desc: "Monitor all ongoing shipments." },
            { icon: <BarChart3 />, title: "Payment Summary", desc: "Track revenue and expenses." },
            { icon: <MapPin />, title: "Map View", desc: "Visualize routes and vehicle locations." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-default">
              <div className="text-primary">{item.icon}</div>
              <div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
          <button className="mt-4 text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Explore Demo <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="lg:col-span-8">
          <div className="bg-slate-900 rounded-3xl p-4 shadow-2xl border-8 border-slate-800">
            <div className="bg-white rounded-xl overflow-hidden aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                alt="Dashboard Mockup" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              {/* Mock UI Overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <div className="bg-white/90 backdrop-blur p-2 rounded-lg shadow text-[10px] font-bold">Total Revenue: $12,450</div>
                <div className="bg-white/90 backdrop-blur p-2 rounded-lg shadow text-[10px] font-bold">Active Trucks: 24</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const UserSegment = ({ title, text, image, cta, reverse = false, id }: { title: string, text: string, image: string, cta: string, reverse?: boolean, id?: string }) => (
  <section id={id} className={`py-24 px-4 ${reverse ? 'bg-slate-50' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className={`${reverse ? 'lg:order-2' : ''}`}>
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">{title}</h2>
        <div className="space-y-4 text-lg text-slate-600 mb-10">
          {text.split('\n').map((line, i) => (
            <p key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
              {line}
            </p>
          ))}
        </div>
        <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          {cta}
        </button>
      </div>
      <div className={`${reverse ? 'lg:order-1' : ''}`}>
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src={image} alt={title} className="w-full h-auto" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </section>
);

const MpesaIntegration = () => (
  <section className="py-24 px-4 gradient-bg-blue">
    <div className="max-w-7xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-sm font-bold text-slate-700">Live Integration</span>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Seamless Mpesa Payments</h2>
      <p className="text-slate-600 mb-16">STK Push, Payment Confirmation, and Callback Automation.</p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {[
          { icon: <Smartphone />, title: "STK Push", desc: "User receives prompt" },
          { icon: <CheckCircle2 />, title: "Confirmation", desc: "Payment authorized" },
          { icon: <MessageCircle />, title: "Callback", desc: "System notified" },
          { icon: <LayoutDashboard />, title: "Updated", desc: "Order status live" }
        ].map((step, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative z-10">
            <div className="text-primary mb-4 flex justify-center">
              {React.cloneElement(step.icon as React.ReactElement, { className: "w-10 h-10" })}
            </div>
            <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
            <p className="text-xs text-slate-500">{step.desc}</p>
            {idx < 3 && (
              <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 bg-white border-t border-r border-slate-200 rotate-45 -translate-y-1/2 z-20"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What Our Users Say</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { quote: "Booking was easy and I got my produce delivered on time. The fair pricing is a game changer for small-scale farmers.", author: "Samuel K.", role: "Farmer" },
          { quote: "The system saves me hours in coordination. I can manage my entire fleet and get paid instantly through Mpesa.", author: "David M.", role: "Vehicle Owner" }
        ].map((t, idx) => (
          <div key={idx} className="bg-slate-50 p-10 rounded-3xl relative">
            <Star className="text-accent w-8 h-8 absolute -top-4 left-10 fill-accent" />
            <p className="text-xl text-slate-700 italic mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200"></div>
              <div>
                <p className="font-bold text-slate-900">{t.author}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join the Movers Network Today</h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Partner with us to move agriculture forward. Whether you're a farmer or a driver, we have the tools you need.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            Partner with Us
          </button>
        </div>
        
        <div className="mt-16 pt-16 border-t border-white/10 grid sm:grid-cols-3 gap-8 text-left">
          <div>
            <p className="text-white/60 text-sm mb-1 uppercase tracking-widest">Email Us</p>
            <p className="font-bold">hello@movers.com</p>
          </div>
          <div>
            <p className="text-white/60 text-sm mb-1 uppercase tracking-widest">Call Us</p>
            <p className="font-bold">+254 700 000 000</p>
          </div>
          <div>
            <p className="text-white/60 text-sm mb-1 uppercase tracking-widest">Location</p>
            <p className="font-bold">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-12 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <Truck className="text-accent w-6 h-6" />
        <span className="text-xl font-bold tracking-tight">Movers</span>
      </div>
      <div className="flex gap-8 text-sm text-slate-400">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Support</a>
      </div>
      <p className="text-sm text-slate-500">© 2026 Movers Transport System. All rights reserved.</p>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <motion.button 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
  >
    <Phone className="w-6 h-6" />
  </motion.button>
);

const AdminPreview = () => (
  <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
    </div>
    
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-sm font-bold mb-6">
          <ShieldCheck className="w-4 h-4" /> Admin Control
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Full Visibility for Admins</h2>
        <p className="text-slate-300 text-lg mb-8">
          Manage schedules, view orders, confirm Mpesa transactions, and track system revenue — all in one centralized command center.
        </p>
        <ul className="space-y-4 mb-10">
          {[
            "Real-time fleet monitoring",
            "Automated revenue reports",
            "Transaction verification logs",
            "User management & verification"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-200">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="relative">
        <div className="bg-slate-800 rounded-2xl p-2 shadow-2xl border border-slate-700">
          <div className="bg-slate-900 rounded-xl p-6">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-bold text-sm text-slate-400 uppercase tracking-widest">System Revenue</h4>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
            </div>
            <div className="space-y-4">
              {[80, 45, 90, 60].map((h, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Region {i + 1}</span>
                    <span>{h}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-primary"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs text-slate-500 mb-1">Total Orders</p>
                <p className="text-xl font-bold">1,284</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs text-slate-500 mb-1">Active Drivers</p>
                <p className="text-xl font-bold">156</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <DashboardPreview />
      <UserSegment 
        id="farmers"
        title="Empowering Farmers and Groups"
        text="Book transport for your produce in seconds.\nJoin group orders and schedule ahead.\nEnjoy fair pricing based on distance and vehicle type."
        image="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1200"
        cta="Register as Farmer"
      />
      <UserSegment 
        id="drivers"
        title="Earn by Moving What Matters"
        text="Join our driver network and manage availability.\nAccept bookings and get paid instantly.\nFull visibility on routes and earnings."
        image="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&q=80&w=1200"
        cta="Join as Driver"
        reverse
      />
      <AdminPreview />
      <MpesaIntegration />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
