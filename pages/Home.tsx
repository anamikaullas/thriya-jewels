
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[80vh] min-h-[500px] w-full bg-[#efe8df] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=2070&auto=format&fit=crop" 
            alt="Thriya Jewels Collection" 
            className="w-full h-full object-cover object-center transform scale-105 animate-slow-zoom"
          />
          {/* Mobile Overlay - Darker for readability */}
         <div className="absolute inset-0 bg-black/30 md:bg-white/10 lg:bg-transparent"></div>
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-white/30 md:to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end md:justify-center pb-20 md:pb-0">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-6 md:w-8 bg-[#e2b4b4]"></div>
              <p className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-xs text-white md:text-gray-800 font-bold">
                New Collection 2026
              </p>
            </div>
            <h2 className="text-5xl md:text-8xl text-white mb-4 font-light serif italic leading-none md:leading-tight drop-shadow-lg">
              The Essence <br /> of Grace
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-10 tracking-wide max-w-md leading-relaxed font-light drop-shadow-md">
              Step into the Elegance of Handpicked, Timeless Jewelry
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/shop" 
                className="px-8 py-4 bg-white md:bg-[#333] text-gray-900 md:text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-black hover:text-white transition-all shadow-xl text-center active:scale-95"
              >
                Explore Shop
              </Link>
              <Link 
                to="/collections" 
                className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 md:border-gray-200 text-white md:text-gray-800 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-gray-900 transition-all text-center active:scale-95"
              >
                View Lookbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Responsive Grid */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-2 gap-y-10 gap-x-6">
          {[
            { label: 'Free Shipping', sub: 'Orders above ₹799' },
            { label: ' Packaging', sub: 'Signature Thriya Box' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-gray-800 mb-1">{item.label}</p>
              <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-400 font-medium">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers - Mobile Friendly 2-col Grid */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-[#fcf9f4]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16 px-4">
            <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide mb-4">
              Most Coveted Pieces
            </h2>
            <div className="w-20 h-[2px] bg-[#e2b4b4]"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-10">
            {bestSellers.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col animate-fade-in">
                <div className="relative aspect-[4/5] bg-white overflow-hidden mb-4 shadow-sm active:scale-95 transition-all duration-300">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  {product.isBestSeller && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-[7px] uppercase tracking-widest font-bold text-gray-600">
                      Top
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[9px] md:text-[11px] tracking-widest text-gray-900 font-bold mb-1 uppercase group-hover:text-[#e2b4b4] transition-colors line-clamp-1">{product.name}</h3>
                  <p className="text-[10px] md:text-[11px] tracking-widest text-gray-400 font-light">₹{product.price.toLocaleString('en-IN')}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <Link to="/shop" className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-900 border-b-2 border-[#e2b4b4] pb-2 hover:text-[#e2b4b4] transition-colors">
              View All Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Banner - Responsive Stack */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop" 
              alt="Artisanal Process" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#e2b4b4] font-bold">The Heritage Collection</p>
            <h2 className="text-4xl md:text-6xl serif italic font-light text-gray-900 leading-tight">Handcrafted Excellence</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed tracking-wide font-light max-w-md mx-auto md:mx-0">
              we speant hours handpicked each of our pieces we belive in quality over quantity also We believe luxury lies in dedication and the stories carried through generations.
            </p>
            <Link to="/story" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-900 hover:text-[#e2b4b4] transition-colors group">
              Our Craftsmanship <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Categories - Enhanced Cards */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide mb-4">
              Categories
            </h2>
            <div className="w-20 h-[2px] bg-[#e2b4b4]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'Earrings', img: '/products/7_199.jpeg' },
              { name: 'Necklaces', img: '/products/1.jpeg' },
              { name: 'Rings', img: '/products/10_129.jpeg' },
              { name: 'Bracelets', img: '/products/8_Gold_plated_Bangle_Style_Cuff_Bracelet235.jpeg' }
            ].map((cat, idx) => (
              <Link to="/shop" key={idx} className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wider mb-2">
                      {cat.name.split('').map((letter, i) => (
                        <span key={i} className="inline-block">{letter}</span>
                      ))}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default Home;
