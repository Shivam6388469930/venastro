// 'use client'

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function Home() {
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: ""
//   });



//   {/* ---------------------------------- */ }
//   {/* GET SERVICE MODAL */ }
//   {/* ---------------------------------- */ }
//   {
//     showModal && (
//       <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-center justify-center px-4">
//         <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-fadeIn">

//           {/* CLOSE BUTTON */}
//           <button
//             className="text-gray-400 hover:text-white float-right text-xl"
//             onClick={() => setShowModal(false)}
//           >
//             ✖
//           </button>

//           <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             Request This Service
//           </h2>
//           <p className="text-gray-400 text-center mt-2 mb-6">
//             Fill in your details and we will contact you shortly.
//           </p>

//           {/* FORM */}
//           <form
//             onSubmit={async (e) => {
//               e.preventDefault();

//               try {
//                 const res = await fetch("https://api.venastro.in/api/v1/email/send", {
//                   method: "POST",
//                   headers: { "Content-Type": "application/json" },
//                   body: JSON.stringify(formData),
//                 });

//                 const data = await res.json();

//                 if (data.status === "success") {
//                   alert("Request submitted successfully!");
//                   setShowModal(false);

//                   setFormData({
//                     name: "",
//                     email: "",
//                     phone: "",
//                     service: "",
//                     message: ""
//                   });
//                 } else {
//                   alert("Something went wrong.");
//                 }
//               } catch (err) {
//                 alert("Server error.");
//                 console.log(err);
//               }
//             }}
//             className="space-y-5"
//           >

//             {/* Name */}
//             <input
//               type="text"
//               placeholder="Your Name *"
//               required
//               name="name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white"
//             />

//             {/* Email */}
//             <input
//               type="email"
//               placeholder="Your Email *"
//               required
//               name="email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white"
//             />

//             {/* Phone */}
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               name="phone"
//               value={formData.phone}
//               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white"
//             />

//             {/* Service */}
//             <select
//               name="service"
//               required
//               value={formData.service}
//               onChange={(e) => setFormData({ ...formData, service: e.target.value })}
//               className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white"
//             >
//               <option value="">Select Service</option>
//               <option value="Manpower Staffing">Manpower Staffing</option>
//               <option value="Web Development">Web Development</option>
//               <option value="Digital Marketing">Digital Marketing</option>
//             </select>

//             {/* Message */}
//             <textarea
//               rows="4"
//               placeholder="Your Message *"
//               required
//               name="message"
//               value={formData.message}
//               onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//               className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white resize-none"
//             ></textarea>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.03] transition-transform"
//             >
//               Submit Request
//             </button>

//           </form>
//         </div>
//       </div>
//     )
//   }

//   const router = useRouter()
//   const services = [
//     {
//       title: "Manpower Staffing",
//       desc: "Verified and skilled candidates for quick placements in both skilled and unskilled roles.",
//       icon: "👥"
//     },
//     {
//       title: "Web Development",
//       desc: "Fast, responsive and SEO-friendly websites, ecommerce stores, and custom web applications.",
//       icon: "💻"
//     },
//     {
//       title: "Digital Marketing",
//       desc: "Grow your business using SEO, Google Ads, Meta Ads, Social Media, and branding strategies.",
//       icon: "📈"
//     }
//   ];

  // const hiringProcess = [
  //   "Requirement Collection",
  //   "Talent Sourcing",
  //   "Screening & Interviews",
  //   "Selection & Joining"
  // ];

  // const uniquePoints = [
  //   "Multi-Service Provider",
  //   "24/7 Customer Support",
  //   "Strong Qualified Manpower Network"
  // ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white font-sans">




//       {/* HERO */}
//       <section className="relative py-24 px-4 text-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 blur-3xl"></div>
//         <div className="relative max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800 bg-clip-text text-transparent leading-tight">
//             Ven Astro Digital Solution
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
//             Empowering Business Through People & Technology
//           </p>
//           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 transition-transform shadow-lg shadow-blue-500/25" onClick={() => router.push('/get-services')}>
//               Get Started
//             </button>
//             <button className="px-8 py-3 rounded-full font-semibold border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-colors" onClick={() => router.push('/services')}>
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="px-4 py-16 max-w-4xl mx-auto">
//         <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
//           <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
//             About Us
//           </h2>
//           <p className="text-gray-300 mt-6 text-lg leading-relaxed">
//             Ven Astro Digital Solution is a multi-service agency offering manpower staffing,
//             web development, and digital marketing services. We deliver modern, reliable and
//             high-quality solutions designed to accelerate business growth.
//           </p>
//         </div>
//       </section>

      

//       {/* SERVICES */}
//       <section id="services" className="px-4 py-16 max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
//             Our Core Services
//           </h2>
//           <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
//             Comprehensive solutions to meet all your business needs
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-xl"
//             >
//               <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
//                 {s.icon}
//               </div>
//               <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
//                 {s.title}
//               </h3>
//               <p className="text-gray-400 mt-4 leading-relaxed">{s.desc}</p>
//               <button
//                 className="mt-6 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105"
//                 onClick={() => setShowModal(true)}
//               >
//                 Get This Service
//               </button>

//             </div>
//           ))}
//         </div>
//       </section>

      

//       {/* CONTACT */}
//       <section id="contact" className="py-20 px-4 text-center bg-gradient-to-b from-gray-900 to-black">
//         <div className="max-w-2xl mx-auto">
//           <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
//             Get In Touch
//           </h2>
//           <p className="text-gray-400 mt-4 text-lg">
//             Ready to transform your business? Let's talk.
//           </p>

//           <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-pink-500/50 transition-colors">
//               <div className="text-2xl mb-2">📧</div>
//               <h3 className="font-semibold text-gray-300">Email</h3>
//               <p className="text-gray-400 mt-2">venastro.co@gmail.com</p>
//             </div>
//             <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-pink-500/50 transition-colors">
//               <div className="text-2xl mb-2">📱</div>
//               <h3 className="font-semibold text-gray-300">Phone</h3>
//               <p className="text-gray-400 mt-2">+91 8009426038</p>
//             </div>
//             <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-pink-500/50 transition-colors">
//               <div className="text-2xl mb-2">🌐</div>
//               <h3 className="font-semibold text-gray-300">Website</h3>
//               <p className="text-gray-400 mt-2">www.venastro.in</p>
//             </div>
//           </div>
//         </div>
//       </section>


//     </div>
//   );
// }


'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Users, Laptop, TrendingUp, Mail, Phone, Globe } from "lucide-react";
import Navbar from "./compontent/Navbar";
import Footer from "./compontent/Footer";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const router = useRouter();

  const services = [
    {
      title: "Manpower Staffing",
      desc: "Verified and skilled candidates for quick placements in both skilled and unskilled roles.",
      icon: <Users className="text-white w-10 h-10" />
    },
    {
      title: "Web Development",
      desc: "Fast, responsive and SEO-friendly websites, ecommerce stores, and custom web applications.",
      icon: <Laptop className="text-white w-10 h-10" />
    },
    {
      title: "Digital Marketing",
      desc: "Grow your business using SEO, Google Ads, Meta Ads, Social Media, and branding strategies.",
      icon: <TrendingUp className="text-white w-10 h-10" />
    }
  ];

  const hiringProcess = [
    "Requirement Collection",
    "Talent Sourcing",
    "Screening & Interviews",
    "Selection & Joining"
  ];

  const uniquePoints = [
    "Multi-Service Provider",
    "24/7 Customer Support",
    "Strong Qualified Manpower Network"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white font-sans">
 <Navbar/> 
      {/* ------------------------------------------------ */}
      {/* MODAL (Moved inside return, UI unchanged) */}
      {/* ------------------------------------------------ */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-center justify-center px-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-fadeIn">

            <button
              className="text-gray-400 hover:text-white float-right text-xl"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>

            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Request This Service
            </h2>
            <p className="text-gray-400 text-center mt-2 mb-6">
              Fill in your details and we will contact you shortly.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const res = await fetch("https://api.venastro.in/api/v1/email/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                  });

                  const data = await res.json();

                  if (data.status === "success") {
                    alert("Request submitted successfully!");
                    setShowModal(false);

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
                  alert("Server error.");
                  console.log(err);
                }
              }}
              className="space-y-5"
            >

              <input
                type="text"
                placeholder="Your Name *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white"
              />

              <input
                type="email"
                placeholder="Your Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white"
              />

              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white"
              >
                <option value="">Select Service</option>
                <option value="Manpower Staffing">Manpower Staffing</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>

              <textarea
                rows="4"
                placeholder="Your Message *"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.03] transition-transform"
              >
                Submit Request
              </button>

            </form>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800 bg-clip-text text-transparent leading-tight">
            Ven Astro Digital Solution
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Empowering Business Through People & Technology
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 transition-transform"
              onClick={() => router.push("/get-services")}
            >
              Get Started
            </button>

            <button
              className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400"
              onClick={() => router.push("/services")}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION — unchanged */}
      <section id="about" className="px-4 py-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Ven Astro Digital Solution is a multi-service agency offering manpower staffing,
            web development, and digital marketing services.
          </p>
        </div>
      </section>
      
      {/* VISION & MISSION */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Our Vision
            </h3>
            <p className="text-gray-300 mt-4 leading-relaxed">
              To become India's most trusted one-stop business solutions provider by delivering
              skilled manpower, modern digital tools, and consistent support.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Empower businesses with comprehensive digital solutions and reliable staffing
              services that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <section id="services" className="px-4 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Our Core Services
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to meet all your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <div className="text-4xl mb-4">{s.icon}</div>

              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                {s.title}
              </h3>

              <p className="text-gray-400 mt-4">{s.desc}</p>

              <button
                className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105"
                onClick={() => setShowModal(true)}
              >
                Get This Service
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-yellow-900/10 to-orange-900/10 border border-yellow-800/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center">
            Hiring Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {hiringProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-black font-bold text-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <p className="text-gray-300 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE POINTS */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-900/10 to-purple-900/10 border border-cyan-800/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">
            What Makes Us Unique
          </h2>
          <div className="grid gap-4 mt-10">
            {uniquePoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-black/30 hover:bg-black/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <span className="text-black font-bold">✓</span>
                </div>
                <span className="text-gray-300 text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-4 text-center bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-pink-500/50">
              <Mail className="w-10 h-10 mx-auto text-white" />
              <p className="text-gray-400 mt-2">venastro.co@gmail.com</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-pink-500/50">
              <Phone className="w-10 h-10 mx-auto text-white" />
              <p className="text-gray-400 mt-2">+91 8009426038</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-pink-500/50">
              <Globe className="w-10 h-10 mx-auto text-white" />
              <p className="text-gray-400 mt-2">www.venastro.in</p>
            </div>

          </div>
        </div>
      </section>
  <Footer/>
    </div>
  );
}
