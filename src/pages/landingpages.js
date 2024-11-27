import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';


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

      {/* Kategori Section dengan Animasi dan Hover Effects */}
      <section className="py-24 bg-gray-50">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-10" data-aos="fade-up">
      Kategori Layanan
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {/* Web Development Card */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
        data-aos="fade-up"
        data-aos-delay="200"
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative">
          <img
            src="https://api.deepai.org/job-view-file/202e1459-999c-44ef-af40-5f7abf7d34ed/outputs/output.jpg?art-image=true"
            alt="Web Development"
            className="w-full h-48 object-cover rounded-t-xl rounded-b-xl"
          />
        </div>
        <h3 className="text-xl font-semibold mb-4">Web Development</h3>
        <p className="text-gray-600">Bangun aplikasi dan situs web responsif dengan kualitas terbaik.</p>
      </motion.div>

      {/* Design Grafis Card */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
        data-aos="fade-up"
        data-aos-delay="400"
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative">
          <img
            src="https://api.deepai.org/job-view-file/46d5049d-3cd2-4656-bb94-c0d75b53b1ec/outputs/output.jpg?art-image=true"
            alt="Design Grafis"
            className="w-full h-48 object-cover rounded-t-xl rounded-b-xl"
          />
        </div>
        <h3 className="text-xl font-semibold mb-4">Design Grafis</h3>
        <p className="text-gray-600">Desain logo, branding, dan visual kreatif lainnya.</p>
      </motion.div>

      {/* Penulisan Card */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
        data-aos="fade-up"
        data-aos-delay="600"
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative">
          <img
            src="https://api.deepai.org/job-view-file/9895e7ab-9f10-44da-a6cf-bd87f3f3d9d1/outputs/output.jpg?art-image=true"
            alt="Penulisan"
            className="w-full h-48 object-cover rounded-t-xl rounded-b-xl"
          />
        </div>
        <h3 className="text-xl font-semibold mb-4">Penulisan</h3>
        <p className="text-gray-600">Penulisan artikel dan konten berkualitas untuk kebutuhan bisnis Anda.</p>
      </motion.div>
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

    </div>
  );
};

export default LandingPage;
