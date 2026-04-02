
import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageCircle, 
  Heart, 
  Share2, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Twitter, 
  Copy, 
  Check, 
  X,
  ChevronLeft,
  ChevronRight,
  Mail
} from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const STORAGE_KEY = 'thriya_recently_viewed';
const WHATSAPP_NUMBER = "919995133495";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedMetal, setSelectedMetal] = useState<string | null>(null);

  const productImages = useMemo(() => {
    if (!product) return [];
    // Use actual images array if available, otherwise use single image
    if (product.images && product.images.length > 0) {
      return product.images;
    }
    return [product.image];
  }, [product]);

  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      updateRecentlyViewed(foundProduct.id);
      setActiveImageIndex(0);
      
      if (foundProduct.availableSizes && foundProduct.availableSizes.length > 0) {
        setSelectedSize(foundProduct.availableSizes[0]);
      } else {
        setSelectedSize(null);
      }
      
      if (foundProduct.availableMetals && foundProduct.availableMetals.length > 0) {
        setSelectedMetal(foundProduct.availableMetals[0]);
      } else {
        setSelectedMetal(foundProduct.material);
      }
    } else {
      navigate('/shop');
    }
    window.scrollTo(0, 0);
  }, [id, navigate]);

  const updateRecentlyViewed = (productId: string) => {
    const saved = localStorage.getItem(STORAGE_KEY);
    let recentlyViewed: string[] = saved ? JSON.parse(saved) : [];
    recentlyViewed = recentlyViewed.filter(id => id !== productId);
    recentlyViewed.unshift(productId);
    recentlyViewed = recentlyViewed.slice(0, 6);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recentlyViewed));
  };

  const handleWhatsAppOrder = () => {
    if (!product) return;
    const currentUrl = window.location.href;
    let variantDetails = "";
    if (selectedSize) variantDetails += ` (Size: ${selectedSize})`;
    if (selectedMetal) variantDetails += ` (Metal: ${selectedMetal})`;
    const message = `Hi Thriya Jewels, I'd like to order the ${product.name}${variantDetails} - ₹${product.price.toLocaleString('en-IN')}.\n\nLink: ${currentUrl}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!product) return null;

  const metalColors: Record<string, string> = {
    'Gold': 'bg-yellow-400',
    'Silver': 'bg-gray-300',
    'Rose Gold': 'bg-orange-200',
  };

  return (
    <div className="animate-fade-in bg-[#fcf9f4] min-h-screen relative pb-12">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-8 md:pt-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-black mb-8 transition-colors p-1">
          <ArrowLeft size={16} /> Back
        </Link>

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20">
          {/* Mobile Optimized Carousel */}
          <div className="space-y-6 mb-12 lg:mb-0">
            <div className="group relative aspect-[4/5] bg-white overflow-hidden shadow-sm rounded-sm">
              <img 
                src={productImages[activeImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-opacity duration-500 animate-fade-in" 
                key={activeImageIndex}
              />
              
              <button 
                onClick={() => setActiveImageIndex(prev => (prev - 1 + productImages.length) % productImages.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 active:scale-90 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setActiveImageIndex(prev => (prev + 1) % productImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 active:scale-90 transition-all"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
                {productImages.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === activeImageIndex ? 'bg-[#e2b4b4] w-5' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex justify-center gap-3 overflow-x-auto no-scrollbar py-1">
              {productImages.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImageIndex(i)}
                  className={`flex-shrink-0 w-16 md:w-20 aspect-square overflow-hidden rounded-sm transition-all border-2 ${
                    i === activeImageIndex ? 'border-[#e2b4b4] scale-105' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#e2b4b4] font-bold mb-4">
                {product.category}
              </p>
              <h1 className="serif text-4xl md:text-6xl text-gray-900 mb-6 italic leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-widest">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed tracking-wide font-light mb-12 max-w-xl">
              Each piece at Thriya Jewels is meticulously handcrafted. This {product.name.toLowerCase()} embodies our commitment to timeless elegance and superior quality.
            </p>

            {/* Variant Selections - Mobile Optimized Tap Areas */}
            <div className="space-y-10 mb-12 pb-10 border-b border-gray-100">
              {product.availableMetals && (
                <div>
                  <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-800 mb-6 block">Select Metal</label>
                  <div className="flex flex-wrap gap-4">
                    {product.availableMetals.map(metal => (
                      <button 
                        key={metal}
                        onClick={() => setSelectedMetal(metal)}
                        className={`flex items-center gap-3 px-5 py-3 border rounded-full transition-all active:scale-95 ${
                          selectedMetal === metal 
                          ? 'border-[#e2b4b4] bg-[#fdf8f8] text-gray-900 shadow-sm' 
                          : 'border-gray-200 text-gray-400 bg-white'
                        }`}
                      >
                        <div className={`w-3.5 h-3.5 rounded-full ${metalColors[metal] || 'bg-gray-400'}`}></div>
                        <span className="text-[11px] uppercase tracking-widest font-bold">{metal}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.availableSizes && (
                <div>
                  <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-800 mb-6 block">Select Size</label>
                  <div className="flex flex-wrap gap-4">
                    {product.availableSizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center text-[12px] font-bold border rounded-md transition-all active:scale-95 ${
                          selectedSize === size 
                          ? 'border-gray-900 bg-gray-900 text-white shadow-lg' 
                          : 'border-gray-200 text-gray-400 bg-white hover:border-gray-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Primary Action Button - Prominent on Mobile */}
            <div className="flex flex-col gap-4 mb-16">
              <button 
                onClick={handleWhatsAppOrder}
                className="w-full py-5 bg-[#333] text-white text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-black transition-all flex items-center justify-center gap-4 shadow-xl active:scale-[0.98] rounded-xl"
              >
                <MessageCircle size={18} /> Order Now via WhatsApp
              </button>
              <div className="grid grid-cols-2 gap-4">
                <button className="py-4 border border-gray-100 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-500 rounded-lg bg-white active:bg-gray-50">
                  <Heart size={16} /> Wishlist
                </button>
                <button 
                  onClick={() => setIsShareMenuOpen(true)}
                  className="py-4 border border-gray-100 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-500 rounded-lg bg-white active:bg-gray-50"
                >
                  <Share2 size={16} /> Share
                </button>
              </div>
            </div>

            {/* Service Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-gray-50">
              <div className="flex items-center gap-4 text-gray-500">
                <Truck size={20} className="text-[#e2b4b4]" />
                <span className="text-[9px] uppercase tracking-widest font-bold text-gray-700">Free Shipping (Orders above ₹499)</span>
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                <RotateCcw size={20} className="text-[#e2b4b4]" />
                <span className="text-[9px] uppercase tracking-widest font-bold text-gray-700">30-Day Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {isShareMenuOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsShareMenuOpen(false)}></div>
          <div className="relative bg-white w-full max-w-sm p-10 rounded-t-[32px] md:rounded-3xl shadow-2xl flex flex-col items-center">
             <button onClick={() => setIsShareMenuOpen(false)} className="absolute top-6 right-6 p-2 text-gray-300 hover:text-black">
               <X size={24} />
             </button>
             <h3 className="serif text-3xl italic mb-10">Share this Jewel</h3>
             <div className="grid grid-cols-3 gap-8 w-full">
                <button onClick={() => { window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`); setIsShareMenuOpen(false); }} className="flex flex-col items-center gap-3 active:scale-90 transition-transform">
                  <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center"><Twitter size={24} className="text-gray-600" /></div>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Twitter</span>
                </button>
                <button onClick={() => { window.open(`mailto:?subject=Check out this jewelry from Thriya Jewels&body=${window.location.href}`); setIsShareMenuOpen(false); }} className="flex flex-col items-center gap-3 active:scale-90 transition-transform">
                  <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center"><Mail size={24} className="text-gray-600" /></div>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Email</span>
                </button>
                <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="flex flex-col items-center gap-3 active:scale-90 transition-transform">
                  <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center">
                    {copied ? <Check size={24} className="text-green-500" /> : <Copy size={24} className="text-gray-600" />}
                  </div>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">{copied ? 'Copied' : 'Link'}</span>
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
