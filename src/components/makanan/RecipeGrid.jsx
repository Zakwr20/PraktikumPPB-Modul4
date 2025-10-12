// src/components/makanan/RecipeGrid.jsx (rename menjadi RecipeGrid.jsx dan pindahkan ke src/components/)
import { Clock, Star, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
// ... (kode useEffect dan useRef Anda tetap sama)

export default function RecipeGrid({ recipes }) {
  // ... (kode useEffect dan useRef Anda tetap sama)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {recipes.map((recipe, index) => {
        const isMakanan = recipe.kategori === 'makanan';
        return (
          <div
            key={recipe.id + recipe.kategori} // Key lebih unik
            // ... (sisa div Anda tetap sama)
          >
          
            <Link to={`/resep/${recipe.kategori}/${recipe.id}`}>
            <div className="group ...">
              {/* ... Isi card Anda ... */}
               </div>
                </Link>
            <div className={`relative bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl ${isMakanan ? 'shadow-blue-500/5 hover:shadow-blue-500/15' : 'shadow-green-500/5 hover:shadow-green-500/15'} transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:bg-white/20`}>
              {/* ... (Image dan konten card lainnya) */}
              <span className={`text-xs font-semibold ${isMakanan ? 'text-blue-700 bg-blue-100/90' : 'text-green-700 bg-green-100/90'} px-2 md:px-3 py-1 md:py-1.5 rounded-full`}>
                {isMakanan ? 'Makanan' : 'Minuman'}
              </span>
              {/* ... (sisa konten card Anda) */}
            </div>
          </div>
        );
      })}
    </div>
    // ...
  );
}

