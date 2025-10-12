// src/pages/ProfilePage.jsx
export default function ProfilePage() {
  return (
    <div className="p-4 md:p-8 pb-20 md:pb-8 max-w-2xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Profil Pengguna
      </h1>
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQGT48jD…eta&t=o4pAp8sxT_oP12KyBpXd8M6UrXo6pLIkUWOT7meAXRY" // Ganti dengan URL gambar profil Anda
          alt="Profil"
          className="w-32 h-32 rounded-full mb-4 shadow-md"
        />
        <h2 className="text-2xl font-bold text-slate-800">Zaki wira widiantoro</h2>
        <p className="text-slate-500">zakwr20@gmail.com</p>
        <div className="w-full mt-8 pt-6 border-t">
          <p className="text-gray-600 text-center">
            Ini adalah aplikasi Resep Nusantara, tempat untuk menemukan berbagai resep masakan dan minuman khas Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
}