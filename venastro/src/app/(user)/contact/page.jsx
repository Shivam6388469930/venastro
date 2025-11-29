// 'use client'
// import { useRouter } from "next/navigation";

// export default function ContactPage() {
//   const router=useRouter()
//   const contactMethods = [
//     {
//       icon: "📧",
//       title: "Email Us",
//       details: "venastro.co@gmail.com",
//       description: "Send us an email anytime",
//       gradient: "from-purple-500 to-pink-500",
//       bgGradient: "from-purple-900/20 to-pink-900/20"
//     },
//     {
//       icon: "📱",
//       title: "Call Us",
//       details: "+91 8009426038",
//       description: "Mon to Sun: 9:00 AM - 8:00 PM",
//       gradient: "from-blue-500 to-cyan-500",
//       bgGradient: "from-blue-900/20 to-cyan-900/20"
//     },
//     {
//       icon: "🌐",
//       title: "Website",
//       details: "www.venastro.in",
//       description: "Explore our services online",
//       gradient: "from-green-500 to-emerald-500",
//       bgGradient: "from-green-900/20 to-emerald-900/20"
//     },
//     {
//       icon: "💬",
//       title: "Quick Support",
//       details: "WhatsApp Available",
//       description: "Instant messaging support",
//       gradient: "from-orange-500 to-red-500",
//       bgGradient: "from-orange-900/20 to-red-900/20"
//     }
//   ];

//   const services = [
//     "Manpower Staffing",
//     "Web Development", 
//     "Digital Marketing",
//     "Business Consultation"
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      
//       {/* Hero Section */}
//       <div className="relative overflow-hidden px-4 py-20">
//         <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-purple-900/20 blur-3xl"></div>
//         <div className="relative max-w-6xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 bg-clip-text text-transparent leading-tight">
//             Let's Connect
//           </h1>
//           <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
//             Ready to transform your business? Get in touch with us for comprehensive digital solutions 
//             and staffing services tailored to your needs.
//           </p>
//         </div>
//       </div>

//       {/* Contact Methods Grid */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {contactMethods.map((method, index) => (
//             <div 
//               key={index}
//               className={`group bg-gradient-to-br ${method.bgGradient} border border-gray-800 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer`}
//             >
//               <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${method.gradient} text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                 {method.icon}
//               </div>
//               <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
//               <p className="text-gray-200 font-semibold mb-1">{method.details}</p>
//               <p className="text-gray-400 text-sm">{method.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <div className="grid lg:grid-cols-2 gap-12">
          
//           {/* Contact Form */}
//           <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
//             <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent mb-2">
//               Send Us a Message
//             </h2>
//             <p className="text-gray-400 mb-8">
//               Fill out the form below and we'll get back to you within 24 hours.
//             </p>

//             <form className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-300 text-sm font-medium mb-2">
//                     Your Name *
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     placeholder="Enter your full name"
//                     className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-300 text-sm font-medium mb-2">
//                     Your Email *
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     placeholder="Enter your email address"
//                     className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-300 text-sm font-medium mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     placeholder="+91 00000 00000"
//                     className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-300 text-sm font-medium mb-2">
//                     Service Interested In
//                   </label>
//                   <select className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all">
//                     <option value="">Select a service</option>
//                     {services.map((service, index) => (
//                       <option key={index} value={service}>{service}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-300 text-sm font-medium mb-2">
//                   Your Message *
//                 </label>
//                 <textarea
//                   rows="5"
//                   required
//                   placeholder="Tell us about your project or requirements..."
//                   className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-4 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/25 group relative overflow-hidden"
//               >
//                 <span className="relative z-10">Send Message</span>
//                 <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//               </button>
//             </form>
//           </div>

//           {/* Additional Information */}
//           <div className="space-y-8">
//             {/* Response Time */}
//             <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-2xl p-6">
//               <div className="flex items-center space-x-4">
//                 <div className="text-3xl">⚡</div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-2">Quick Response Guaranteed</h3>
//                   <p className="text-gray-300">
//                     We typically respond to all inquiries within 2-4 hours during business days. 
//                     Emergency support available for existing clients.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Business Hours */}
//             <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-2xl p-6">
//               <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
//               <div className="space-y-3">
//                 {[
//                   { days: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
//                   { days: "Saturday", hours: "10:00 AM - 6:00 PM" },
//                   { days: "Sunday", hours: "Emergency Support Only" }
//                 ].map((schedule, index) => (
//                   <div key={index} className="flex justify-between items-center py-2 border-b border-gray-800/50 last:border-b-0">
//                     <span className="text-gray-300">{schedule.days}</span>
//                     <span className="text-gray-200 font-medium">{schedule.hours}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Why Contact Us */}
//             <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-2xl p-6">
//               <h3 className="text-xl font-bold text-white mb-4">Why Contact Us?</h3>
//               <ul className="space-y-3">
//                 {[
//                   "Free initial consultation for your projects",
//                   "Customized solutions for your business needs",
//                   "Transparent pricing with no hidden costs",
//                   "Ongoing support and maintenance",
//                   "Expert advice from industry professionals"
//                 ].map((point, index) => (
//                   <li key={index} className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                     <span className="text-gray-300">{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Location */}
//             <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-2xl p-6">
//               <div className="flex items-center space-x-4">
//                 <div className="text-3xl">📍</div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-2">Based in India</h3>
//                   <p className="text-gray-300">
//                     Serving clients nationwide with remote and on-site support capabilities.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="max-w-4xl mx-auto px-4 py-16 text-center">
//         <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12">
//           <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-4">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
//             Let's discuss how we can help you achieve your business goals with our comprehensive solutions.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:scale-105 transition-transform shadow-lg shadow-purple-500/25"  onClick={()=>router.push('/contact')}>
//               Schedule a Call
//             </button>
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {

  const router = useRouter();

  // ------------------------
  // Form State
  // ------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // ------------------------
  // Submit API
  // ------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://api.venastro.in/api/v1/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.status === "success") {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.log(err);
      alert("Server Error.");
    }
  };

  const services = [
    "Manpower Staffing",
    "Web Development",
    "Digital Marketing",
    "Business Consultation"
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent mb-4">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2">Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-300 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl"
                placeholder="+91 00000 00000"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-gray-300 mb-2">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl"
              >
                <option value="">Select service</option>
                {services.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-2">Message *</label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl resize-none"
                placeholder="Write your message..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>

    </div>
  );
}
