import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-teal-500 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between items-center text-sm">
          {/* Left Column */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-2xl font-semibold mb-2">SkillMatch</h2>
            <p className="text-xs opacity-80">
              Platform terbaik untuk menemukan freelancer profesional yang siap membantu Anda.
            </p>
          </div>

          {/* Middle Column - Contact Information */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Kontak Kami</h3>
            <ul className="space-y-1">
              <li><a href="mailto:support@skillmatch.com" className="hover:text-gray-300 transition-colors">Email: support@skillmatch.com</a></li>
              <li><a href="tel:+123456789" className="hover:text-gray-300 transition-colors">Telepon: +123 456 789</a></li>
            </ul>
          </div>

          {/* Right Column - Social Media */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="text-center text-xs opacity-80 mt-6">
          <p>© 2024 SkillMatch. Semua Hak Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
