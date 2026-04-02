
import React from 'react';
import { Sparkles, Heart, ShieldCheck } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <div className="animate-fade-in bg-[#fcf9f4]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=2070&auto=format&fit=crop")'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="serif italic text-5xl md:text-7xl text-white drop-shadow-lg mb-8 leading-tight">
            Simple, elegant, <br /> 
            and personal.
          </h1>
          <div className="w-16 h-[1px] bg-[#e2b4b4] mx-auto"></div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#e2b4b4] font-bold mb-6">Our Origins</p>
            <h2 className="serif italic text-4xl md:text-5xl text-gray-900 mb-8">The Beginning</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-gray-600 text-sm md:text-base leading-relaxed tracking-wide font-light">
              <p>
                Thriya began on a normal day, between three friends—Anamika, Thasleema, and Keerthana. During a casual conversation, Keerthana shared an idea she had been thinking about: creating a jewellery brand that felt simple, elegant, and personal. The idea felt right to all of us, and slowly, that small thought turned into something real.
              </p>
              <p>
                We decided to take our time. Instead of creating many designs, we chose to pick each piece carefully, one by one. We keep our collections limited, focusing only on jewellery that feels timeless and easy to wear. Thriya is built on friendship, patience, and love for simplicity—made for those who appreciate quiet beauty and meaningful details.
              </p>
            </div>
          </div>
          
          {/* Founders Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
            <div className="flex flex-col items-center">
              <div className="aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-lg shadow-lg mb-4">
                <img 
                  src="/peeps/IMG-20241102-WA0141.jpg.jpeg" 
                  alt="Anamika - Co-founder of Thriya Jewels" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="serif italic text-xl text-gray-900 mb-1">Keerthana</h3>
              <p className="text-[9px] uppercase tracking-widest text-gray-500">Co-founder</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-lg shadow-lg mb-4">
                <img 
                  src="/peeps/IMG-20260106-WA0021.jpg.jpeg" 
                  alt="Thasleema - Co-founder of Thriya Jewels" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="serif italic text-xl text-gray-900 mb-1">Thasleema</h3>
              <p className="text-[9px] uppercase tracking-widest text-gray-500">Co-founder</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-lg shadow-lg mb-4">
                <img 
                  src="/peeps/Untitled design.jpg" 
                  alt="Keerthana - Co-founder of Thriya Jewels" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="serif italic text-xl text-gray-900 mb-1">Anamika</h3>
              <p className="text-[9px] uppercase tracking-widest text-gray-500">Co-founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop" 
              alt="Thoughtful Jewelry Selection" 
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#e2b4b4] font-bold mb-6">Our Approach</p>
            <h2 className="serif italic text-4xl text-gray-900 mb-8">Thoughtful Selection</h2>
            <div className="space-y-6 text-gray-600 text-sm leading-relaxed tracking-wide font-light">
              <p>
                We believe in quality over quantity. Rather than rushing to create countless designs, we take our time to curate each piece thoughtfully. Every item in our collection is chosen because it feels timeless, easy to wear, and genuinely special.
              </p>
              <p>
                Our limited collections mean that when you choose a piece from Thriya, you're selecting something that has been carefully considered—not just for its beauty, but for how it fits into your everyday life. We focus on jewellery that you'll want to wear again and again, pieces that become part of your story.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <Heart size={24} className="mx-auto text-[#e2b4b4] mb-3" />
                <p className="text-[9px] uppercase tracking-widest font-bold">Friendship</p>
              </div>
              <div className="text-center">
                <Sparkles size={24} className="mx-auto text-[#e2b4b4] mb-3" />
                <p className="text-[9px] uppercase tracking-widest font-bold">Patience</p>
              </div>
              <div className="text-center">
                <ShieldCheck size={24} className="mx-auto text-[#e2b4b4] mb-3" />
                <p className="text-[9px] uppercase tracking-widest font-bold">Simplicity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="serif italic text-4xl text-gray-900 mb-8">Find Your Piece</h2>
          <p className="text-gray-500 text-sm tracking-wide font-light mb-12">
            Our carefully curated collections are made for those who appreciate quiet beauty and meaningful details. Each piece is chosen with intention, designed to be timeless and easy to wear.
          </p>
          <a 
            href="/#/shop" 
            className="inline-block px-12 py-5 bg-[#333] text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black transition-all"
          >
            Explore the Collection
          </a>
        </div>
      </section>
    </div>
  );
};

export default Story;
