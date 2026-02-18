import React from 'react';
import { Leaf, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-emerald-800 text-emerald-100">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-serif font-bold text-2xl text-white">HJM Landscaping</span>
            </div>
            <p className="text-emerald-200/80 mb-6 leading-relaxed">
              Creating beautiful, functional outdoor spaces across the UK. Fully insured and guaranteed workmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-emerald-900 rounded-full hover:bg-emerald-800 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-emerald-900 rounded-full hover:bg-emerald-800 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-emerald-900 rounded-full hover:bg-emerald-800 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Paving & Patios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Driveways</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fencing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garden Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Turfing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 mt-1" />
                <span>123 Garden Lane,<br/>Chester, CH1 1AA<br/>United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <a href="tel:+447000000000" className="hover:text-white">07700 900 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500" />
                <a href="mailto:info@hjmlandscaping.co.uk" className="hover:text-white">info@hjmlandscaping.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-400">
          <p>&copy; {new Date().getFullYear()} HJM Landscaping. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
