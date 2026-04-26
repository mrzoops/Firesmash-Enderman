import React, { useState, useEffect } from 'react';

// Icons embedded directly
const Icons = {
  Flame: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
  Zap: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Youtube: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.111C2.5 6.421 3.06 5.86 3.75 5.86h16.5c.69 0 1.25.56 1.25 1.25v9.778c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V7.111Z"/><path d="m9.75 14.542 6-3.43-6-3.43v6.86Z"/></svg>,
  ShoppingCart: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>,
  Menu: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>,
  X: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>,
  ArrowRight: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  Gamepad2: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>,
  MonitorPlay: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10 7 5 3-5 3Z"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>,
  Activity: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  Swords: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/></svg>,
  Beaker: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></svg>
};

const { Flame, Zap, Youtube, ShoppingCart, Menu, X, ArrowRight, Gamepad2, MonitorPlay, Activity, Swords, Beaker } = Icons;

const App = () => {
  // Graceful Loading State
  const [isLoaded, setIsLoaded] = useState(false);
  
  const [selectedCreator, setSelectedCreator] = useState(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [lightningFlash, setLightningFlash] = useState(false);
  const [mascotVisible, setMascotVisible] = useState(false);

  // Failsafe: Inject Tailwind CSS and wait for it to load
  useEffect(() => {
    if (!document.getElementById('tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com';
      script.onload = () => {
        // Add a tiny artificial delay to ensure the browser has painted the styles
        // and to give the "boot sequence" a cool dramatic effect
        setTimeout(() => setIsLoaded(true), 600);
      };
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  // Enderman Lightning Effect
  useEffect(() => {
    if (!isLoaded) return; // Don't run lightning until site is visible
    let timeoutId;
    const triggerLightning = () => {
      if (selectedCreator === 'enderman' || selectedCreator === null) {
        const nextStrike = Math.random() * 6000 + 2000;
        timeoutId = setTimeout(() => {
          setLightningFlash(true);
          setTimeout(() => setLightningFlash(false), 150);
          
          if (Math.random() > 0.6) {
              setTimeout(() => {
                  setLightningFlash(true);
                  setTimeout(() => setLightningFlash(false), 100);
              }, 200);
          }
          triggerLightning();
        }, nextStrike);
      } else {
        timeoutId = setTimeout(triggerLightning, 2000);
      }
    };
    
    triggerLightning();
    return () => clearTimeout(timeoutId);
  }, [selectedCreator, isLoaded]);

  // Mascot Easter Egg Trigger
  const triggerEasterEgg = (e) => {
    e.stopPropagation();
    if (!mascotVisible) {
      setMascotVisible(true);
      setTimeout(() => {
        setMascotVisible(false);
      }, 3500);
    }
  };

  // Direct image link hosted on GitHub
  const plushieImageLink = "/plushie.png";

  // --- CREATOR CONFIGURATIONS ---
  const creators = {
    firesmash: {
      id: 'firesmash',
      name: "FIRESMASH",
      tagline: "FEEL THE HEAT",
      desc: "High octane, high energy. Smashing limits and bringing top-tier action to the digital frontlines.",
      ytLink: "https://youtube.com/@user-jq7eb7xr8q?si=MClgDqgLuthPh7pT",
      theme: {
        bg: "bg-[#0a0202]",
        nav: "bg-[#0a0202]/90 border-orange-900/50 shadow-[0_4px_30px_rgba(255,69,0,0.1)]",
        textPrimary: "text-orange-500",
        textGradient: "from-yellow-300 via-orange-500 to-red-600",
        btnBg: "bg-red-600 hover:bg-red-500",
        btnShadow: "shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.7)]",
        btnOutline: "border-orange-600 text-orange-500 hover:bg-orange-600/10 hover:border-orange-400 hover:text-orange-400 shadow-[inset_0_0_15px_rgba(255,69,0,0.1)]",
        cardBorder: "border-orange-900/30 hover:border-orange-500/50 hover:shadow-[0_15px_40px_-15px_rgba(255,69,0,0.4)]",
        cartBadge: "bg-red-600 border-black shadow-[0_0_10px_rgba(255,0,0,0.5)]",
        icon: <Flame className="h-8 w-8 mr-2 text-orange-500 animate-pulse" />
      },
      merch: [
        { id: 1, name: "Ignition Hoodie", price: "$49.99", desc: "Heavyweight blend. Keeps you warm during intense sessions.", color: "from-red-900 to-black", icon: <Flame className="h-24 w-24" /> },
        { id: 2, name: "Apex Predator Tee", price: "$24.99", desc: "Hit the apex. 100% breathable cotton.", color: "from-orange-900 to-black", icon: <Activity className="h-24 w-24" /> },
        { id: 3, name: "Thermal Mug", price: "$14.99", desc: "Matte black ceramic with the FIRESMASH glossy logo.", color: "from-amber-900 to-red-950", icon: <div className="font-display text-8xl mt-4">☕</div> },
      ]
    },
    enderman: {
      id: 'enderman',
      name: "ENDERMAN",
      tagline: "STRIKE FROM THE VOID",
      desc: "Precision, strategy, and lightning-fast reflexes. Teleport behind the competition.",
      ytLink: "https://youtube.com/@enderman-channel-placeholder", // Placeholder
      theme: {
        bg: "bg-[#05020a]",
        nav: "bg-[#05020a]/90 border-purple-900/50 shadow-[0_4px_30px_rgba(138,43,226,0.1)]",
        textPrimary: "text-purple-400",
        textGradient: "from-cyan-300 via-purple-500 to-indigo-600",
        btnBg: "bg-purple-600 hover:bg-purple-500",
        btnShadow: "shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)]",
        btnOutline: "border-purple-600 text-purple-400 hover:bg-purple-600/10 hover:border-purple-400 hover:text-purple-300 shadow-[inset_0_0_15px_rgba(147,51,234,0.1)]",
        cardBorder: "border-purple-900/30 hover:border-purple-500/50 hover:shadow-[0_15px_40px_-15px_rgba(147,51,234,0.4)]",
        cartBadge: "bg-purple-600 border-black shadow-[0_0_10px_rgba(147,51,234,0.5)]",
        icon: <Zap className="h-8 w-8 mr-2 text-purple-400 animate-pulse" />
      },
      merch: [
        { id: 4, name: "Void Walker Hoodie", price: "$49.99", desc: "Dark matter fabric. Disappear into the shadows.", color: "from-purple-900 to-black", icon: <Zap className="h-24 w-24" /> },
        { id: 5, name: "Lightning Strike Tee", price: "$24.99", desc: "High voltage graphic on premium dark cotton.", color: "from-indigo-900 to-black", icon: <Activity className="h-24 w-24" /> },
        { id: 6, name: "Teleport Mousepad", price: "$19.99", desc: "Frictionless surface for instant flicks and strikes.", color: "from-cyan-900 to-purple-950", icon: <MonitorPlay className="h-24 w-24" /> },
        { 
          id: 7, 
          name: "SUBJECT 001", 
          price: "$9,999.99", 
          desc: "WARNING: Escaped lab experiment. Do not feed after midnight. Highly unpredictable.", 
          color: "from-purple-800 to-green-900", 
          icon: <Beaker className="h-24 w-24" />,
          image: plushieImageLink
        },
      ]
    }
  };

  const addToCart = () => setCartCount(prev => prev + 1);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // --- GLOBAL STYLES & ANIMATIONS ---
  const GlobalStyles = () => (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;700;900&display=swap');
      
      .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em; }
      .font-modern { font-family: 'Inter', sans-serif; }
      
      @keyframes lava-flow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .bg-lava {
        background: linear-gradient(-45deg, #3a0000, #ff4500, #8b0000, #1a0000);
        background-size: 400% 400%;
        animation: lava-flow 15s ease infinite;
      }

      .bg-void {
        background: linear-gradient(-45deg, #1a0033, #4b0082, #000033, #2a004d);
        background-size: 400% 400%;
        animation: lava-flow 12s ease infinite reverse;
      }

      .lightning-overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(220, 200, 255, 0.9);
        pointer-events: none;
        z-index: 50;
        opacity: 0;
        transition: opacity 0.05s ease-out;
      }
      .lightning-overlay.active { opacity: 1; }

      .split-side { transition: flex 0.5s ease-in-out; }
      @media (min-width: 768px) {
        .split-container:hover .split-side:hover { flex: 1.5; }
        .split-container:hover .split-side:not(:hover) { flex: 0.5; filter: grayscale(50%) brightness(50%); }
      }
    `}</style>
  );

  // --- BOOT SEQUENCE LOADING SCREEN ---
  // This uses raw inline styles so it looks perfect BEFORE Tailwind even loads
  if (!isLoaded) {
    return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'monospace' }}>
        <div style={{ fontSize: 'clamp(16px, 4vw, 24px)', marginBottom: '24px', letterSpacing: '4px', color: '#888' }}>INITIALIZING TEAM HUB...</div>
        <div style={{ width: '250px', height: '2px', backgroundColor: '#222', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '40%', height: '100%', backgroundColor: '#f97316', animation: 'cyber-load 1.2s infinite ease-in-out' }} />
        </div>
        <style>{`
          @keyframes cyber-load {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <GlobalStyles />
      
      {/* MASCOT EASTER EGG POPUP */}
      <div className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 z-[10000] transition-transform duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] pointer-events-none ${mascotVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="relative flex flex-col items-center pointer-events-auto cursor-pointer" onClick={() => setMascotVisible(false)}>
          <div className="absolute -top-16 bg-white text-black font-display px-8 py-3 rounded-2xl text-3xl md:text-5xl whitespace-nowrap animate-bounce shadow-[0_0_30px_rgba(147,51,234,0.6)] border-4 border-purple-500 z-10 text-center">
            CONTAINMENT BREACH!
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-b-4 border-r-4 border-purple-500 rotate-45"></div>
          </div>
          {/* Plushie Image */}
          <img
            src={plushieImageLink}
            alt="Escaped Experiment"
            className="w-72 md:w-[450px] drop-shadow-[0_20px_50px_rgba(147,51,234,0.9)] hover:scale-105 transition-transform object-contain"
            onError={(e) => { 
              // Fallback placeholder
              e.target.onerror = null; 
              e.target.src = 'https://placehold.co/400x500/8A2BE2/white?text=Derp+Plush'; 
            }}
          />
        </div>
      </div>

      {/* --- SPLIT HERO SCREEN (NO CREATOR SELECTED YET) --- */}
      {!selectedCreator ? (
        <div className="h-screen w-screen bg-black overflow-hidden flex flex-col md:flex-row split-container selection:bg-white selection:text-black relative animate-in fade-in duration-700">
          
          {/* Team Center Badge - CLICK FOR EASTER EGG */}
          <div 
            onClick={triggerEasterEgg}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          >
            <div className="bg-black border-4 border-zinc-800 rounded-full p-4 flex flex-col items-center justify-center h-28 w-28 md:h-36 md:w-36 transition-transform group-hover:scale-110 group-hover:border-white">
              <Swords className="text-white h-10 w-10 md:h-12 md:w-12 mb-1 group-hover:text-yellow-400 transition-colors" />
              <span className="font-display text-white text-xl md:text-2xl tracking-widest group-hover:text-yellow-400 transition-colors">TEAM</span>
            </div>
          </div>

          {/* FIRESMASH SIDE */}
          <div 
            onClick={() => setSelectedCreator('firesmash')}
            className="split-side flex-1 relative cursor-pointer flex items-center justify-center overflow-hidden group border-b-4 md:border-b-0 md:border-r-4 border-black"
          >
            <div className="absolute inset-0 bg-lava opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            
            <div className="relative z-10 text-center transform group-hover:scale-110 transition-transform duration-500">
              <Flame className="h-16 w-16 text-orange-500 mx-auto mb-4 animate-pulse group-hover:drop-shadow-[0_0_15px_rgba(255,69,0,0.8)]" />
              <h1 className="font-display text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-orange-500 to-red-600 drop-shadow-[0_5px_15px_rgba(255,69,0,0.6)]">
                FIRESMASH
              </h1>
              <p className="font-modern text-orange-200 tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CLICK TO ENTER
              </p>
            </div>
          </div>

          {/* ENDERMAN SIDE */}
          <div 
            onClick={() => setSelectedCreator('enderman')}
            className="split-side flex-1 relative cursor-pointer flex items-center justify-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-void opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            
            <div className="relative z-10 text-center transform group-hover:scale-110 transition-transform duration-500">
              <Zap className="h-16 w-16 text-purple-400 mx-auto mb-4 group-hover:drop-shadow-[0_0_15px_rgba(147,51,234,0.8)]" />
              <h1 className="font-display text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-purple-500 to-indigo-600 drop-shadow-[0_5px_15px_rgba(147,51,234,0.6)]">
                ENDERMAN
              </h1>
              <p className="font-modern text-purple-200 tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CLICK TO ENTER
              </p>
            </div>
          </div>
        </div>
      ) : (
        // --- CREATOR SPECIFIC VIEW ---
        <div className={`min-h-screen ${creators[selectedCreator].theme.bg} text-gray-200 font-sans animate-in fade-in duration-500`}>
          {/* Global Lightning Flash */}
          {selectedCreator === 'enderman' && (
            <div className={`fixed inset-0 pointer-events-none z-[9999] bg-[rgba(220,200,255,0.8)] transition-opacity duration-75 ${lightningFlash ? 'opacity-100' : 'opacity-0'}`}></div>
          )}

          {/* Navigation */}
          <nav className={`fixed w-full z-50 backdrop-blur-md border-b ${creators[selectedCreator].theme.nav}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
                  {creators[selectedCreator].theme.icon}
                  <span className={`font-display text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${creators[selectedCreator].theme.textGradient}`}>
                    {creators[selectedCreator].name}
                  </span>
                </div>

                <div className="hidden md:flex items-center space-x-8 font-display text-2xl mt-2">
                  <button onClick={() => scrollToSection('home')} className={`hover:${creators[selectedCreator].theme.textPrimary} transition-colors`}>HOME</button>
                  <button onClick={() => scrollToSection('merch')} className={`hover:${creators[selectedCreator].theme.textPrimary} transition-colors flex items-center`}>
                    STORE
                  </button>
                  <a href={creators[selectedCreator].ytLink} target="_blank" rel="noopener noreferrer" className={`flex items-center hover:text-white transition-colors ${creators[selectedCreator].theme.textPrimary}`}>
                    <Youtube className="h-6 w-6 mr-1 mb-1" /> YOUTUBE
                  </a>
                  
                  <button 
                    onClick={() => setSelectedCreator(selectedCreator === 'firesmash' ? 'enderman' : 'firesmash')}
                    className="ml-4 px-4 py-1.5 border border-gray-600 rounded text-gray-400 hover:text-white hover:border-white transition-all text-xl flex items-center bg-black/50"
                  >
                    SWITCH TO {creators[selectedCreator === 'firesmash' ? 'enderman' : 'firesmash'].name}
                  </button>

                  <div className={`relative cursor-pointer hover:${creators[selectedCreator].theme.textPrimary} transition-colors mb-1 ml-4`}>
                    <ShoppingCart className="h-6 w-6" />
                    {cartCount > 0 && (
                      <span className={`absolute -top-2 -right-3 text-white text-xs font-modern font-bold px-2 py-0.5 rounded-full border ${creators[selectedCreator].theme.cartBadge}`}>
                        {cartCount}
                      </span>
                    )}
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center gap-4">
                  <button 
                    onClick={() => setSelectedCreator(selectedCreator === 'firesmash' ? 'enderman' : 'firesmash')}
                    className="px-2 py-1 border border-gray-600 rounded text-gray-400 text-xs font-display tracking-widest bg-black/50"
                  >
                    {creators[selectedCreator === 'firesmash' ? 'enderman' : 'firesmash'].name}
                  </button>
                  
                  <div className="relative cursor-pointer text-gray-200">
                    <ShoppingCart className="h-6 w-6" />
                    {cartCount > 0 && (
                      <span className={`absolute -top-2 -right-2 text-white text-[10px] font-modern font-bold px-1.5 py-0.5 rounded-full border ${creators[selectedCreator].theme.cartBadge}`}>
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`text-gray-200 hover:${creators[selectedCreator].theme.textPrimary} focus:outline-none`}>
                    {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className={`md:hidden backdrop-blur-xl border-b ${creators[selectedCreator].theme.nav} font-display text-2xl`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <button onClick={() => scrollToSection('home')} className="block px-3 py-3 text-left w-full hover:bg-white/10 rounded-lg">HOME</button>
                  <button onClick={() => scrollToSection('merch')} className="block px-3 py-3 text-left w-full hover:bg-white/10 rounded-lg">STORE</button>
                  <a href={creators[selectedCreator].ytLink} target="_blank" rel="noopener noreferrer" className={`px-3 py-3 hover:bg-white/10 rounded-lg flex items-center ${creators[selectedCreator].theme.textPrimary}`}>
                    <Youtube className="h-6 w-6 mr-2 mb-1" /> YOUTUBE
                  </a>
                  <button onClick={() => setSelectedCreator(null)} className="block px-3 py-3 text-left w-full text-gray-400 hover:text-white rounded-lg border-t border-gray-800 mt-2">
                    ← BACK TO TEAM HUB
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Hero Section */}
          <section id="home" className="relative pt-20 min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className={`absolute inset-0 opacity-30 ${selectedCreator === 'firesmash' ? 'bg-lava' : 'bg-void'}`}></div>
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-${creators[selectedCreator].theme.bg}/60 to-${creators[selectedCreator].theme.bg}`}></div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-10">
              <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-black/40 border border-white/10 rounded-full backdrop-blur-sm">
                {selectedCreator === 'firesmash' ? <Activity className={`h-4 w-4 mr-2 ${creators[selectedCreator].theme.textPrimary}`} /> : <Swords className={`h-4 w-4 mr-2 ${creators[selectedCreator].theme.textPrimary}`} />}
                <span className={`font-modern text-sm font-bold tracking-widest uppercase ${creators[selectedCreator].theme.textPrimary}`}>
                  {selectedCreator === 'firesmash' ? 'High Octane Content' : 'Tactical Dominance'}
                </span>
              </div>
              
              <h1 className={`font-display text-7xl md:text-9xl lg:text-[10rem] leading-none mb-2 text-white ${selectedCreator === 'firesmash' ? 'drop-shadow-[0_10px_20px_rgba(255,69,0,0.5)]' : 'drop-shadow-[0_10px_20px_rgba(147,51,234,0.5)]'}`}>
                {creators[selectedCreator].tagline.split(' ')[0]} <br/>
                <span className={`text-transparent bg-clip-text bg-gradient-to-b ${creators[selectedCreator].theme.textGradient}`}>
                  {creators[selectedCreator].tagline.substring(creators[selectedCreator].tagline.indexOf(' ') + 1)}
                </span>
              </h1>
              
              <p className="font-modern text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto drop-shadow-md">
                {creators[selectedCreator].desc}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                <a 
                  href={creators[selectedCreator].ytLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group relative flex items-center justify-center px-8 py-4 text-white font-display text-3xl rounded-lg overflow-hidden transition-all w-full sm:w-auto hover:-translate-y-1 ${creators[selectedCreator].theme.btnBg} ${creators[selectedCreator].theme.btnShadow}`}
                >
                  <div className="absolute inset-0 w-1/4 h-full bg-white/20 -skew-x-12 -ml-10 group-hover:animate-[slide_0.5s_ease-in-out_forwards]"></div>
                  <Youtube className="h-7 w-7 mr-3 mb-1" />
                  SUBSCRIBE
                </a>
                
                <button 
                  onClick={() => scrollToSection('merch')}
                  className={`flex items-center justify-center px-8 py-4 bg-transparent border-2 font-display text-3xl rounded-lg transition-all w-full sm:w-auto hover:-translate-y-1 ${creators[selectedCreator].theme.btnOutline}`}
                >
                  <ShoppingCart className="h-6 w-6 mr-3 mb-1" />
                  SHOP {creators[selectedCreator].name} GEAR
                </button>
              </div>
            </div>
          </section>

          {/* Merch Section */}
          <section id="merch" className={`py-24 relative z-20 ${creators[selectedCreator].theme.bg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center mb-16">
                <div className={`h-0.5 w-16 bg-gradient-to-r from-transparent to-${selectedCreator === 'firesmash' ? 'orange' : 'purple'}-600 mr-4`}></div>
                <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider flex items-center">
                  THE <span className={`${creators[selectedCreator].theme.textPrimary} ml-3`}>ARMORY</span>
                </h2>
                <div className={`h-0.5 w-16 bg-gradient-to-l from-transparent to-${selectedCreator === 'firesmash' ? 'orange' : 'purple'}-600 ml-4`}></div>
              </div>

              {/* Merch Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {creators[selectedCreator].merch.map((item) => (
                  <div 
                    key={item.id} 
                    className={`group bg-[#110a0a]/50 backdrop-blur-sm border rounded-xl p-4 flex flex-col transition-all duration-300 hover:-translate-y-2 ${creators[selectedCreator].theme.cardBorder}`}
                  >
                    {/* Image or Placeholder logic */}
                    {item.image ? (
                       <div className={`w-full aspect-square rounded-lg bg-black mb-6 relative overflow-hidden flex items-center justify-center border-2 border-green-500/50 group-hover:border-green-400 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all`}>
                         <img 
                           src={item.image} 
                           alt={item.name} 
                           className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                           onError={(e) => { 
                             // Fallback placeholder
                             e.target.onerror = null; 
                             e.target.src="https://placehold.co/400/8A2BE2/white?text=Subject+001"; 
                           }} 
                         />
                         {/* Overlay badge */}
                         <div className={`absolute top-3 right-3 bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full font-modern font-bold text-sm border border-green-500/50 text-green-400`}>
                           {item.price}
                         </div>
                       </div>
                    ) : (
                      <div className={`w-full aspect-square rounded-lg bg-gradient-to-br ${item.color} mb-6 relative overflow-hidden flex items-center justify-center`}>
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_100%)]"></div>
                        
                        <div className="text-white/20 group-hover:text-white/40 group-hover:scale-110 transition-all duration-500">
                          {item.icon}
                        </div>

                        {/* Overlay badge */}
                        <div className={`absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full font-modern font-bold text-sm border border-white/10 ${creators[selectedCreator].theme.textPrimary}`}>
                          {item.price}
                        </div>
                      </div>
                    )}
                    
                    {/* Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className={`font-display text-3xl text-white mb-2 leading-tight transition-colors group-hover:${creators[selectedCreator].theme.textPrimary}`}>
                          {item.name}
                        </h3>
                        <p className={`font-modern text-sm mb-6 leading-relaxed ${item.image ? 'text-green-500 font-bold' : 'text-gray-400'}`}>
                          {item.desc}
                        </p>
                      </div>
                      
                      <button 
                        onClick={addToCart}
                        className={`w-full py-3.5 bg-white/5 text-white rounded-lg font-display text-2xl tracking-wider flex items-center justify-center transition-all group/btn ${item.image ? 'bg-green-600 hover:bg-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]' : creators[selectedCreator].theme.btnBg} hover:text-white`}
                      >
                        <span className="mt-1">ADD TO CART</span>
                        <ArrowRight className="h-5 w-5 ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black py-12 border-t border-white/10 text-center relative z-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
              
              <button onClick={() => setSelectedCreator(null)} className="mb-8 text-gray-500 hover:text-white transition-colors font-display tracking-widest border border-gray-800 px-6 py-2 rounded-full flex items-center">
                 <Swords className="h-5 w-5 mr-2" />
                 RETURN TO TEAM HUB
              </button>

              <div className="flex items-center mb-8">
                {creators[selectedCreator].theme.icon}
                <span className="font-display text-4xl tracking-widest text-gray-400 mt-2">
                  {creators[selectedCreator].name}
                </span>
              </div>
              
              <div className="flex space-x-6 mb-8">
                <a href={creators[selectedCreator].ytLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
                  <Youtube className="h-8 w-8" />
                </a>
              </div>
              
              <p className="font-modern text-gray-700 text-sm">
                © {new Date().getFullYear()} {creators[selectedCreator].name} / TEAM HUB. All rights reserved. 
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default App;
