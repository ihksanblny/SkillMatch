import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Section dengan Gambar Background */}
      {/* Hero Section dengan Gambar Background dan Overlay Gelap */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        {/* Overlay Gelap */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>

        {/* Gambar Latar Belakang */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(../assets/go.jpg)' }}></div>

        <div className="relative z-10">
          {/* Judul dengan Shadow untuk Membantu Membaca */}
          <h1 className="text-5xl font-semibold mb-6 drop-shadow-lg leading-tight" data-aos="fade-up">
            Temukan Freelancer Profesional untuk Proyek Anda
          </h1>

          {/* Deskripsi dengan Shadow dan Kontras yang Lebih Tinggi */}
          <p className="text-xl mb-8 max-w-lg mx-auto leading-relaxed opacity-80 drop-shadow-md" data-aos="fade-up" data-aos-delay="200">
            Mulai kolaborasi dengan ahli dari berbagai bidang dan capai tujuan Anda lebih cepat.
          </p>

          {/* Tombol dengan Hover Animasi */}
          <motion.button
            className="bg-white text-blue-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all"
            data-aos="zoom-in"
            data-aos-delay="50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Mulai Sekarang
          </motion.button>
        </div>
      </section>

      <section class="highlights py-20 bg-gray-50">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-semibold mb-8" data-aos="fade-up">Kenapa Memilih Kami?</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      <div class="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
        <div class="text-6xl text-blue-500 mb-4">
          <i class="fas fa-clock" style={{ color: "#1d4e7e" }}></i> 
        </div>
        <h3 class="text-xl font-semibold mb-2">Cepat</h3>
        <p class="text-gray-600">Akses freelancer dalam hitungan menit.</p>
      </div>
      <div class="flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
        <div class="text-6xl text-green-500 mb-4">
        <i class="fa-solid fa-shield-halved" style={{ color: "#1d4e7e" }}></i> 
        </div>
        <h3 class="text-xl font-semibold mb-2">Aman</h3>
        <p class="text-gray-600">Transaksi dijamin aman dengan sistem pembayaran terpercaya.</p>
      </div>
      <div class="flex flex-col items-center" data-aos="fade-up" data-aos-delay="600">
        <div class="text-6xl text-yellow-500 mb-4">
        <i class="fa-solid fa-cubes" style={{ color: "#1d4e7e" }}></i> 
        </div>
        <h3 class="text-xl font-semibold mb-2">Beragam</h3>
        <p class="text-gray-600">Ribuan pilihan kategori layanan yang dapat disesuaikan dengan kebutuhan Anda.</p>
      </div>
    </div>
  </div>
</section>

      {/* Kategori Section dengan Animasi dan Hover Effects */}
      <section className="py-24 bg-gray-50">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-10" data-aos="fade-up">
      Popular Categories
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Web Development Card */}
      <div
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          src="https://images.unsplash.com/photo-1610989001873-03968eed0f08?q=80&w=2490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Web Development"
          className="w-full h-48 object-cover rounded-t-lg rounded-b-lg mb-2"
          data-aos="zoom-in"
        />
        <h3 className="text-xl font-bold mb-2">Web Development</h3>
        <p className="text-gray-600 mb-4">
          Bangun aplikasi dan situs web responsif dengan kualitas terbaik.
        </p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          data-aos="fade-right"
        >
          Jelajahi Kategori
        </button>
      </div>
      {/* Design Grafis Card */}
      <div
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <img
          src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Graphic Design"
          className="w-full h-48 object-cover rounded-t-lg rounded-b-lg mb-2"
          data-aos="zoom-in"
        />
        <h3 className="text-xl font-bold mb-2">Graphic Designers</h3>
        <p className="text-gray-600 mb-4">
          Desain logo, branding, dan materi promosi yang menarik dan kreatif.
        </p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          data-aos="fade-right"
        >
          Jelajahi Kategori
        </button>
      </div>
      {/* Penulisan Card */}
      <div
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <img
          src="https://images.unsplash.com/photo-1670836037273-1da88ca47acd?q=80&w=2530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Writing"
          className="w-full h-48 object-cover rounded-t-lg rounded-b-lg mb-2"
          data-aos="zoom-in"
        />
        <h3 className="text-xl font-bold mb-2">Content Writers</h3>
        <p className="text-gray-600 mb-4">
          Penulisan artikel dan konten berkualitas untuk kebutuhan bisnis Anda.
        </p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          data-aos="fade-right"
        >
          Jelajahi Kategori
        </button>
      </div>
    </div>
  </div>
</section>

{/* Testimoni Section */}
<section className="py-24 bg-gray-100">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-10" data-aos="fade-up">
      Apa Kata Pengguna Kami
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      {/* Testimoni 1 */}
      <div className="max-w-md p-8 bg-white rounded-2xl shadow-xl" data-aos="fade-up" data-aos-delay="200">
        <p className="text-xl font-medium text-gray-600 mb-4">
          "SkillMatch memberikan saya akses ke berbagai freelancer berkualitas tinggi. Saya berhasil menyelesaikan proyek tepat waktu dengan hasil yang memuaskan!"
        </p>
        <div className="flex items-center justify-center mt-4">
          <img 
            src="https://randomuser.me/api/portraits/men/3.jpg" 
            alt="User Avatar" 
            className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4" 
          />
          <div>
            <p className="font-semibold text-gray-700">Nawal Thoriq</p>
            <p className="text-gray-500">Pengacara a.k.a Pengangguran Banyak Acara</p>
          </div>
        </div>
      </div>

      {/* Testimoni 2 */}
      <div className="max-w-md p-8 bg-white rounded-2xl shadow-xl" data-aos="fade-up" data-aos-delay="400">
        <p className="text-xl font-medium text-gray-600 mb-4">
          "Platform yang sangat user-friendly. Saya bisa memilih freelancer dengan mudah dan kualitas kerja mereka luar biasa. Sangat puas dengan hasilnya!"
        </p>
        <div className="flex items-center justify-center mt-4">
          <img 
            src="https://randomuser.me/api/portraits/women/2.jpg" 
            alt="User Avatar" 
            className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4" 
          />
          <div>
            <p className="font-semibold text-gray-700">Riska</p>
            <p className="text-gray-500">Anggota Gym Kebugaran Jasmani</p>
          </div>
        </div>
      </div>

      {/* Testimoni 3 */}
      <div className="max-w-md p-8 bg-white rounded-2xl shadow-xl" data-aos="fade-up" data-aos-delay="600">
        <p className="text-xl font-medium text-gray-600 mb-4">
          "Proses pencarian freelancer sangat cepat dan efisien. Freelancer yang saya temukan memiliki keahlian yang sangat mendalam dan hasilnya luar biasa."
        </p>
        <div className="flex items-center justify-center mt-4">
          <img 
            src="https://randomuser.me/api/portraits/men/7.jpg" 
            alt="User Avatar" 
            className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4" 
          />
          <div>
            <p className="font-semibold text-gray-700">Ferry Ezra</p>
            <p className="text-gray-500">Pacar Rayya</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="partners py-20 bg-gray-100">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-6">Dipercaya oleh Partner Kami</h2>
    <p className="text-gray-600 mb-10">
      Kami dipercaya oleh perusahaan dan komunitas ternama di berbagai bidang.
    </p>
    <div className="flex justify-center items-center flex-wrap gap-8">
      <i className="fab fa-microsoft text-blue-600 text-4xl hover:text-blue-800 transition duration-300"></i>
      <i className="fab fa-apple text-gray-900 text-4xl hover:text-gray-600 transition duration-300"></i>
      <i className="fab fa-google text-red-600 text-4xl hover:text-red-800 transition duration-300"></i>
      <i className="fab fa-amazon text-yellow-600 text-4xl hover:text-yellow-800 transition duration-300"></i>
      <i className="fab fa-facebook text-blue-600 text-4xl hover:text-blue-800 transition duration-300"></i>
      <i className="fab fa-steam text-blue-900 text-4xl hover:text-blue-600 transition duration-300"></i>
    </div>
  </div>
</section>

    </div>
  );
};

export default LandingPage;
