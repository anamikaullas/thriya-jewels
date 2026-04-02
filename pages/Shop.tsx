
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  X, 
  Sparkles, 
  Filter, 
  SlidersHorizontal,
  Plus,
  Minus
} from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const STORAGE_KEYS = {
  CATEGORIES: 'thriya_shop_categories',
  MATERIALS: 'thriya_shop_materials',
  SEARCH: 'thriya_shop_search'
};

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    return saved ? JSON.parse(saved) : [];
  });
  
  const [activeMaterial, setActiveMaterial] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MATERIALS);
    return saved ? JSON.parse(saved) : [];
  });
  
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.SEARCH) || '';
  });

  // UI States
  const [showFilters, setShowFilters] = useState(true);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['category', 'material']);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(activeCategory));
  }, [activeCategory]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MATERIALS, JSON.stringify(activeMaterial));
  }, [activeMaterial]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SEARCH, searchQuery);
  }, [searchQuery]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = activeCategory.length === 0 || activeCategory.includes(p.category);
      const matchMat = activeMaterial.length === 0 || activeMaterial.includes(p.material);
      return matchSearch && matchCat && matchMat;
    });
  }, [searchQuery, activeCategory, activeMaterial]);

  const toggleFilter = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  const clearFilters = () => {
    setActiveCategory([]);
    setActiveMaterial([]);
    setSearchQuery('');
  };

  const FilterContent = () => (
    <div className="space-y-12">
      {/* Category Section */}
      <section>
        <button 
          onClick={() => toggleSection('category')}
          className="w-full flex justify-between items-center mb-6 border-b border-gray-100 pb-3 group"
        >
          <h3 className="text-[11px] uppercase tracking-widest font-bold group-hover:text-black">Category</h3>
          {expandedSections.includes('category') ? <Minus size={14} className="text-gray-400" /> : <Plus size={14} className="text-gray-400" />}
        </button>
        {expandedSections.includes('category') && (
          <div className="space-y-4 animate-fade-in pl-1">
            {['Rings', 'Necklaces', 'Earrings', 'Bracelets'].map(cat => (
              <label key={cat} className="flex items-center gap-4 cursor-pointer group py-1">
                <div 
                  className={`w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center transition-all ${activeCategory.includes(cat) ? 'bg-[#e2b4b4] border-[#e2b4b4]' : 'bg-white'}`}
                  onClick={() => toggleFilter(activeCategory, setActiveCategory, cat)}
                >
                  {activeCategory.includes(cat) && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
                <span className={`text-[12px] uppercase tracking-widest transition-colors ${activeCategory.includes(cat) ? 'text-black font-bold' : 'text-gray-500 group-hover:text-black'}`}>
                  {cat}
                </span>
              </label>
            ))}
          </div>
        )}
      </section>

      {/* Material Section */}
      <section>
        <button 
          onClick={() => toggleSection('material')}
          className="w-full flex justify-between items-center mb-6 border-b border-gray-100 pb-3 group"
        >
          <h3 className="text-[11px] uppercase tracking-widest font-bold group-hover:text-black">Material</h3>
          {expandedSections.includes('material') ? <Minus size={14} className="text-gray-400" /> : <Plus size={14} className="text-gray-400" />}
        </button>
        {expandedSections.includes('material') && (
          <div className="space-y-4 animate-fade-in pl-1">
            {[
              {name: 'Gold', color: 'bg-yellow-400'}, 
              {name: 'Silver', color: 'bg-gray-300'}, 
              {name: 'Rose Gold', color: 'bg-orange-200'}, 
              {name: 'Gemstones', color: 'bg-purple-400'}
            ].map(mat => (
              <label key={mat.name} className="flex items-center gap-4 cursor-pointer group py-1">
                <div 
                  className={`w-4 h-4 rounded-full ${mat.color} cursor-pointer ring-offset-2 transition-all ${activeMaterial.includes(mat.name) ? 'ring-2 ring-[#e2b4b4] scale-110' : ''}`}
                  onClick={() => toggleFilter(activeMaterial, setActiveMaterial, mat.name)}
                ></div>
                <span className={`text-[12px] uppercase tracking-widest transition-colors ${activeMaterial.includes(mat.name) ? 'text-black font-bold' : 'text-gray-500 group-hover:text-black'}`}>
                  {mat.name}
                </span>
              </label>
            ))}
          </div>
        )}
      </section>

      <div className="pt-8 opacity-40 text-center md:text-left">
         <h2 className="serif italic text-3xl text-gray-500 tracking-wider">Thriya Jewels</h2>
         <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-2">Authentic Craftsmanship</p>
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in bg-[#fcf9f4] min-h-screen pb-20">
      {/* Dynamic Collection Banner */}
      <div className="h-[40vh] md:h-80 w-full relative overflow-hidden bg-[#efe8df]">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop" 
          alt="Thriya Jewels Collection" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
           <div className="w-10 h-[1px] bg-[#e2b4b4] mb-4"></div>
           <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] italic serif text-gray-900 leading-tight">THE COLLECTION</h1>
           <p className="text-[9px] md:text-xs tracking-[0.4em] text-gray-500 uppercase mt-4 md:mt-6 font-bold">Timeless & Modern Femininity</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Mobile Toolbar - Sticky or fixed for thumb access */}
        <div className="sticky top-[64px] md:top-[88px] z-40 bg-[#fcf9f4]/90 backdrop-blur-md py-4 mb-8 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-800 hover:text-[#e2b4b4]"
            >
              <SlidersHorizontal size={16} />
              {showFilters ? 'Hide Filters' : 'Filters'}
            </button>
            <button 
              onClick={() => setIsMobileDrawerOpen(true)}
              className="md:hidden flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-900 bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm active:scale-95 transition-all"
            >
              <Filter size={14} />
              Filter
              { (activeCategory.length > 0 || activeMaterial.length > 0) && <span className="w-2 h-2 bg-[#e2b4b4] rounded-full"></span>}
            </button>
            {(activeCategory.length > 0 || activeMaterial.length > 0 || searchQuery) && (
              <button 
                onClick={clearFilters}
                className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#e2b4b4] font-bold underline underline-offset-4"
              >
                Reset
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-2 relative group flex-grow md:flex-grow-0 max-w-[150px] md:max-w-none">
             <Search size={16} className="text-gray-400 absolute left-0" />
             <input 
              type="text" 
              placeholder="Search..."
              className="bg-transparent text-[11px] md:text-sm border-b border-transparent focus:border-[#e2b4b4] outline-none w-full pl-6 pb-1 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
             />
          </div>
        </div>

        <div className="flex gap-12 relative items-start">
          {/* Desktop Sidebar */}
          <aside className={`hidden md:block sticky top-48 w-60 flex-shrink-0 transition-all duration-500 ${
            showFilters ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full w-0 invisible'
          }`}>
            <FilterContent />
          </aside>

          {/* Product Grid - 2 cols on mobile */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-x-4 md:gap-x-10 gap-y-12 transition-all duration-500 ${
                showFilters 
                ? 'grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
              }`}>
                {filteredProducts.map((p) => (
                  <Link to={`/product/${p.id}`} key={p.id} className="group flex flex-col animate-fade-in">
                    <div className="aspect-[4/5] bg-white overflow-hidden relative shadow-sm active:scale-95 transition-transform duration-300">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {p.isBestSeller && (
                        <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-0.5 text-[7px] uppercase tracking-widest font-bold text-gray-500">
                          Popular
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex flex-col items-center text-center">
                      <h4 className="text-[9px] md:text-[11px] uppercase tracking-widest font-bold text-gray-800 line-clamp-1 group-hover:text-[#e2b4b4] transition-colors">{p.name}</h4>
                      <p className="text-[10px] md:text-[11px] tracking-widest text-gray-400 font-light mt-0.5">₹{p.price.toLocaleString('en-IN')}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-white/50 border border-dashed border-gray-200 rounded-lg animate-fade-in">
                <Sparkles size={40} className="text-[#e2b4b4] opacity-30 mb-6" />
                <h3 className="serif text-3xl italic text-gray-900 mb-4 leading-tight">No matching pieces</h3>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] max-w-[200px] mb-8 leading-relaxed">
                  Try adjusting your filters or search term.
                </p>
                <button 
                  onClick={clearFilters}
                  className="px-8 py-3 bg-[#333] text-white text-[9px] uppercase tracking-widest font-bold rounded-sm active:scale-95 transition-all"
                >
                  Clear Selection
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer - Slide up */}
      <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-500 ${
        isMobileDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileDrawerOpen(false)}
        />
        <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-8 pb-12 transition-transform duration-500 max-h-[90vh] flex flex-col ${
          isMobileDrawerOpen ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <div className="flex justify-between items-center mb-8 flex-shrink-0">
            <div>
               <h2 className="serif text-3xl italic text-gray-900">Refine Search</h2>
               <p className="text-[8px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-1">Discover your perfect piece</p>
            </div>
            <button onClick={() => setIsMobileDrawerOpen(false)} className="p-3 bg-gray-50 rounded-full text-gray-400">
              <X size={20} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto pr-2 no-scrollbar">
            <FilterContent />
          </div>
          <div className="pt-8 flex-shrink-0">
            <button 
              onClick={() => setIsMobileDrawerOpen(false)}
              className="w-full py-5 bg-[#333] text-white text-[11px] uppercase tracking-[0.3em] font-bold rounded-xl shadow-2xl active:scale-[0.98] transition-all"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
