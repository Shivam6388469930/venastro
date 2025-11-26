'use client';

import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const router=useRouter()
  const services = [
    {
      title: "Manpower Staffing",
      desc: "Streamline your workforce with our comprehensive staffing solutions. We provide rigorously verified, skilled professionals and reliable unskilled manpower tailored to your industry needs. Our end-to-end staffing process ensures seamless integration and long-term success.",
      points: [
        "Skilled & Unskilled Manpower Solutions",
        "Office Staff Outsourcing & Management",
        "Executive Search & Talent Acquisition",
        "Background Verified & Pre-screened Candidates",
        "Quick Turnaround & Bulk Hiring",
        "Industry-Specific Staffing Expertise"
      ],
      icon: "👥",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      borderColor: "border-blue-800/50"
    },
    {
      title: "Web Development",
      desc: "Transform your digital presence with cutting-edge web solutions. We build high-performance, scalable websites and applications using modern technologies. From stunning business websites to complex e-commerce platforms, we deliver solutions that drive growth and engagement.",
      points: [
        "Responsive Business Websites & Portals",
        "E-commerce Store Development",
        "Custom Web Applications & SaaS Platforms",
        "SEO-Optimized & Lightning Fast Performance",
        "Progressive Web Apps (PWA)",
        "Ongoing Maintenance & Support"
      ],
      icon: "💻",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900/20 to-pink-900/20",
      borderColor: "border-purple-800/50"
    },
    {
      title: "Digital Marketing",
      desc: "Accelerate your business growth with data-driven digital marketing strategies. We combine creative excellence with analytical precision to deliver measurable results across all digital channels. Maximize your ROI with our comprehensive marketing ecosystem.",
      points: [
        "Google Ads & Meta Advertising Campaigns",
        "Technical & Local SEO Optimization",
        "Social Media Management & Strategy",
        "Content Marketing & Brand Storytelling",
        "Conversion Rate Optimization (CRO)",
        "Analytics & Performance Tracking"
      ],
      icon: "📈",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-900/20 to-red-900/20",
      borderColor: "border-orange-800/50"
    }
  ];

  const stats = [
    { number: "500+", label: "Professionals Placed" },
    { number: "100+", label: "Websites Delivered" },
    { number: "50+", label: "Marketing Campaigns" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 blur-3xl"></div>
        <div className="relative px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800 bg-clip-text text-transparent leading-tight">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            Comprehensive business solutions designed to drive growth, efficiency, and digital transformation
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${service.bgGradient} border ${service.borderColor} rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-2xl overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full blur-xl"></div>
              </div>

              {/* Service Icon */}
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Service Title */}
                <h2 className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                  {service.title}
                </h2>

                {/* Service Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-400 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group relative overflow-hidden` }  onClick={()=>router.push('/get-services')}>
                  <span className="relative z-10">Get This Service</span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Our Service Process
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            A streamlined approach to deliver exceptional results every time
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery & Analysis", desc: "Understanding your unique requirements" },
              { step: "02", title: "Strategy & Planning", desc: "Customized solution design" },
              { step: "03", title: "Execution & Delivery", desc: "Quality-driven implementation" },
              { step: "04", title: "Support & Growth", desc: "Ongoing optimization & maintenance" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {process.step}
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">{process.title}</h3>
                <p className="text-gray-500 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how our comprehensive services can drive your success story
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transition-transform shadow-lg shadow-purple-500/25"  onClick={()=>router.push('/get-services')}>
            Start Your Project
          </button>
          <button className="px-8 py-4 rounded-2xl font-semibold border border-gray-700 text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-colors"  onClick={()=>router.push('/contact')}>
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}