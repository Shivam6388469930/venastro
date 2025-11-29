import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from "lucide-react";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Manpower Staffing',
    'Web Development',
    'Digital Marketing',
    'Business Consultation'
  ];

 const contactInfo = [
  { icon: <Mail className="w-6 h-6 text-white" />, detail: 'venastro.co@gmail.com' },
  { icon: <Phone className="w-6 h-6 text-white" />, detail: '+91 8009426038' },

];

const socialLinks = [
  { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6 text-white" />, href: '#' },
  { name: 'Twitter', icon: <Twitter className="w-6 h-6 text-white" />, href: '#' },
  { name: 'Instagram', icon: <Instagram className="w-6 h-6 text-white" />, href: '#' },
  { name: 'Facebook', icon: <Facebook className="w-6 h-6 text-white" />, href: '#' },
];


  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ven Astro
                </h3>
                <p className="text-gray-400 text-sm">Digital Solution</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering businesses through innovative digital solutions and reliable manpower services. 
              Your trusted partner for growth and digital transformation.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
                  title={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-lg text-gray-400">{contact.icon}</span>
                  <span className="text-gray-400">{contact.detail}</span>
                </li>
              ))}
            </ul>
        
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {currentYear} Ven Astro Digital Solution. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="flex flex-col items-end space-y-3">
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/918009426038"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform group"
          >
            <span className="text-lg">💬</span>
            <span className="text-sm font-medium group-hover:block hidden">
              Chat with us
            </span>
          </a>
          
          {/* Phone CTA */}
          <a
            href="tel:+918009426038"
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform group"
          >
            <span className="text-lg">📞</span>
            <span className="text-sm font-medium group-hover:block hidden">
              Call us
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}