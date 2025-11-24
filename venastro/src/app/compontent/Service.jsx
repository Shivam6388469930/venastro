'use client';

import { useState } from 'react';

export default function GetServicePage() {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
    budget: '',
    timeline: ''
  });

  const services = [
    {
      id: "manpower",
      title: "Manpower Staffing",
      description: "Get qualified, verified professionals for your business needs. Fast hiring, smooth onboarding.",
      icon: "👥",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      features: [
        "Skilled & Unskilled Manpower",
        "Office Staff Outsourcing",
        "Executive Search & Talent Acquisition",
        "Background Verified Candidates",
        "Quick Turnaround & Bulk Hiring",
        "Industry-Specific Staffing"
      ],
      process: [
        { step: "1", title: "Requirement Analysis", desc: "Understand your staffing needs" },
        { step: "2", title: "Candidate Sourcing", desc: "Find perfect matches from our network" },
        { step: "3", title: "Screening & Interviews", desc: "Thorough vetting process" },
        { step: "4", title: "Final Selection", desc: "Onboarding & joining support" }
      ]
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with latest technologies.",
      icon: "💻",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900/20 to-pink-900/20",
      features: [
        "Responsive Business Websites",
        "E-commerce Store Development",
        "Custom Web Applications",
        "SEO-Optimized Performance",
        "Progressive Web Apps (PWA)",
        "Ongoing Maintenance & Support"
      ],
      process: [
        { step: "1", title: "Discovery & Planning", desc: "Understand your goals and requirements" },
        { step: "2", title: "Design & Prototyping", desc: "Create stunning UI/UX designs" },
        { step: "3", title: "Development", desc: "Build with modern technologies" },
        { step: "4", title: "Testing & Launch", desc: "Quality assurance and deployment" }
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Grow your business with data-driven digital marketing strategies and campaigns.",
      icon: "📈",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-900/20 to-red-900/20",
      features: [
        "Google & Meta Advertising",
        "SEO Optimization",
        "Social Media Management",
        "Content Marketing",
        "Conversion Rate Optimization",
        "Analytics & Performance Tracking"
      ],
      process: [
        { step: "1", title: "Strategy Development", desc: "Create customized marketing plan" },
        { step: "2", title: "Campaign Setup", desc: "Implement across platforms" },
        { step: "3", title: "Execution & Monitoring", desc: "24/7 campaign management" },
        { step: "4", title: "Optimization", desc: "Continuous improvement & reporting" }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹15,000",
      period: "one-time",
      features: [
        "Up to 5 pages website",
        "Basic SEO setup",
        "1 month support",
        "Mobile responsive",
        "Contact form",
        "Basic analytics"
      ],
      popular: false,
      gradient: "from-gray-500 to-gray-700",
      service: "web-development"
    },
    {
      name: "Professional",
      price: "₹35,000",
      period: "one-time",
      features: [
        "Up to 15 pages website",
        "Advanced SEO",
        "3 months support",
        "E-commerce functionality",
        "Social media integration",
        "Advanced analytics"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500",
      service: "web-development"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "project-based",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "6 months support",
        "Advanced features",
        "Priority support",
        "Dedicated manager"
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
      service: "web-development"
    }
  ];

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setFormData(prev => ({ ...prev, service: serviceId }));
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 2 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans pt-16">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Get Our Services
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Choose from our comprehensive services and let's start your success journey today.
          </p>
        </div>
      </div>

      {/* Services Selection */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          Choose Your Service
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Select the service that matches your business needs. Get started with a free consultation.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group bg-gradient-to-br ${service.bgGradient} border ${
                selectedService === service.id ? 'border-white/50' : 'border-gray-800'
              } rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-2xl cursor-pointer`}
              onClick={() => handleServiceSelect(service.id)}
            >
              {/* Service Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white text-3xl mb-4`}>
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-3`}>
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selection Indicator */}
              {selectedService === service.id && (
                <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
                  <span>✓</span>
                  <span className="text-sm font-medium">Selected</span>
                </div>
              )}

              <button className={`w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all duration-300`}>
                {selectedService === service.id ? 'Service Selected' : 'Select Service'}
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        {selectedService && (
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              How It Works
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {services.find(s => s.id === selectedService)?.process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Section (Web Development Only) */}
        {selectedService === 'web-development' && (
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-4">
              Web Development Packages
            </h3>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Choose the package that best fits your needs. Custom solutions available for complex requirements.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-gray-800/30 to-black border ${
                    plan.popular ? 'border-purple-500' : 'border-gray-700'
                  } rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      {plan.period !== "Custom" && (
                        <span className="text-gray-400">/{plan.period}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-black text-xs">✓</span>
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r ${plan.gradient} text-white hover:scale-105 transition-transform`}
                    onClick={() => setFormData(prev => ({ ...prev, budget: plan.name }))}
                  >
                    {plan.price === "Custom" ? "Get Quote" : "Select Plan"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-4">
              Get Started Today
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Fill out the form below and we'll get back to you within 2 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Service Interested In *
                  </label>
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Expected Budget
                  </label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="15k-30k">₹15,000 - ₹30,000</option>
                    <option value="30k-50k">₹30,000 - ₹50,000</option>
                    <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                    <option value="1L+">₹1,00,000+</option>
                    <option value="custom">Custom Quote</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Project Timeline
                </label>
                <select 
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent (1-2 weeks)</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Project Details / Requirements *
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your project requirements, goals, and any specific features you need..."
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/25 group relative overflow-hidden"
              >
                <span className="relative z-10">Submit Your Inquiry</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              <p className="text-gray-500 text-center text-sm">
                We respect your privacy and will never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}