// src/components/navbar/DesktopNavbar.jsx
import logoUrl from '../../assets/LOGORN.png';

export default function DesktopNavbar({ currentPage, onNavigate }) {
  // Hapus 'makanan' & 'minuman', ganti dengan 'menu', tambahkan 'favorites'
  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'menu', label: 'Menu' },
    { id: 'favorites', label: 'Favorit' },
    { id: 'profile', label: 'Profile' }
  ];

  return (
    <nav className="hidden md:block shadow-lg border-b border-blue-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        {/* ... sisa kode tidak perlu diubah ... */}
         <div className="flex items-center space-x-10">
            {navItems.map((item) => (
            <button
                key={item.id}
                onClick={() => onNavigate(item.id)} // Navigasi akan ditangani oleh App
                className={`px-4 py-3 text-base font-medium transition-all duration-200 border-b-2 ${
                currentPage === item.id
                    ? 'text-blue-600 border-blue-500'
                    : 'text-slate-600 border-transparent hover:text-blue-500 hover:border-blue-300'
                }`}
            >
                {item.label}
            </button>
            ))}
        </div>
        {/* ... sisa kode tidak perlu diubah ... */}
    </nav>
  );
}