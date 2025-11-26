'use client'

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router=useRouter();
  const values = [
    {
      title: "Innovation",
      description: "Embracing cutting-edge technologies and creative solutions to drive business transformation.",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every project and service we undertake.",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "Building trust through transparency, honesty, and ethical business practices.",
      icon: "🤝"
    },
    {
      title: "Growth",
      description: "Dedicated to fostering growth for our clients, team, and community.",
      icon: "📈"
    }
  ];

  const teamStats = [
    { number: "3+", label: "Years Experience" },
    { number: "200+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Client Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            About Ven Astro
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses through innovative digital solutions and reliable manpower services. 
            We are your trusted partner in growth and digital transformation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/30 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-1 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between traditional business needs and modern digital solutions, 
                Ven Astro Digital Solution has evolved into a comprehensive service provider trusted by businesses across India.
              </p>
              <p>
                We understand that in today's competitive landscape, businesses need more than just services—they need 
                partners who can provide integrated solutions. That's why we've combined manpower staffing, web development, 
                and digital marketing under one roof.
              </p>
              <p>
                Our journey began with a simple belief: every business deserves access to quality digital solutions 
                and reliable manpower, regardless of their size or budget.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-2xl p-8 h-full">
            <div className="text-6xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold text-white mb-4">Why "Ven Astro"?</h3>
            <p className="text-gray-300 leading-relaxed">
              Our name combines "Ven" representing venture and innovation, with "Astro" symbolizing our commitment 
              to helping businesses reach stellar heights. We guide your business journey like stars guiding navigation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🔭</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To become India's most trusted integrated business solutions partner, recognized for transforming 
              businesses through innovative digital tools, reliable manpower, and growth-focused strategies that 
              drive sustainable success in the digital era.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses of all sizes with accessible, high-quality digital and staffing solutions. 
              We are committed to delivering measurable results, fostering long-term partnerships, and driving 
              innovation that helps our clients thrive in an increasingly competitive marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center hover:border-yellow-500/30 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8">
            Why Choose Ven Astro?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Integrated Solutions",
                description: "Get manpower, web development, and digital marketing services from a single trusted partner."
              },
              {
                title: "Expert Team",
                description: "Work with passionate professionals who bring diverse expertise and industry experience."
              },
              {
                title: "Client-Centric Approach",
                description: "We prioritize your business goals and customize solutions to meet your specific needs."
              },
              {
                title: "Proven Results",
                description: "Track record of delivering successful projects and driving measurable business growth."
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance ensuring your business operations never face downtime."
              },
              {
                title: "Affordable Excellence",
                description: "Premium quality services designed to be accessible for businesses of all sizes."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-black/30 hover:bg-black/50 transition-colors">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
          Ready to Grow Together?
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your business with our comprehensive solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-transform shadow-lg shadow-purple-500/25"  onClick={()=>router.push('/get-services')}>
            Start Your Journey
          </button>
          <button className="px-8 py-4 rounded-2xl font-semibold border border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors"  onClick={()=>router.push('/services')}>
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}