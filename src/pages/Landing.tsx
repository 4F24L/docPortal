import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FileText, Shield, Zap } from 'lucide-react';

const Landing = () => {
  const footerLinks = {
    QuickLinks: [
      { name: 'Features', to: '#' },
      { name: 'Pricing', to: '#' },
      { name: 'Demo', to: '#' },
      { name: 'Blog', to: '#' }
    ],
    Resources: [
      { name: 'Documentation', to: '#' },
      { name: 'API Reference', to: '#' },
      { name: 'Guides', to: '#' },
      { name: 'Support', to: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', to: '#' },
      { name: 'Terms of Service', to: '#' },
      { name: 'Security', to: '#' },
      { name: 'Compliance', to: '#' }
    ],
    bottomLinks: [
      { name: 'Contact Us', to: '#' },
      { name: 'System Status', to: '#' },
      { name: 'Feedback', to: '#' }
    ]
  };

  const linkClass = "text-sm text-gray-400 hover:text-white transition-colors";
  const sectionTitleClass = "text-base font-semibold text-white mb-4";
  const gradientTextClass = "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent";
  const gradientBgClass = "bg-gradient-to-br from-gray-800 to-gray-900";
  const cardClass = "relative p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-500 transition-all shadow-lg hover:shadow-gray-500/10";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar isAuthenticated={false} onLogout={() => {}} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            <span className={`block ${gradientTextClass} mb-2`}>Transform Your</span>
            <span className="block text-3xl sm:text-5xl md:text-6xl bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Document Experience</span>
          </h1>
          <p className="mt-5 text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Unlock the power of AI-driven document management. Chat with your PDFs, 
            extract insights instantly, and collaborate seamlessly with your team.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/chat"
              className="group relative inline-flex items-center justify-center rounded-lg px-8 py-3 text-base font-semibold text-white overflow-hidden animate-pulse-slow"
            >
              {/* Pulsing border effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-indigo-500/50 animate-[pulse_3s_ease-in-out_infinite]"></div>
              <div className="absolute inset-0 rounded-lg border-2 border-purple-500/50 animate-[pulse_3s_ease-in-out_infinite_1.5s]"></div>
              
              {/* Combined gradient and glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_100%] animate-gradient-x-slow group-hover:blur-xl group-hover:opacity-80 transition-all duration-&lsqb;900ms&rsqb ease-in-out"></div>
              
              {/* Diagonal hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-&lsqb;900ms&rsqb ease-in-out"></div>
              
              {/* Combined border and shimmer */}
              <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_100%] animate-gradient-x-slow">
                <div className="absolute inset-0 rounded-lg bg-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-&lsqb;900ms&rsqb ease-in-out"></div>
                </div>
              </div>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                Try Demo Chat
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-all duration-&lsqb;900ms&rsqb ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>

              {/* Combined dots */}
              <div className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-indigo-500 animate-ping-slow"></div>
              <div className="absolute -left-2 -bottom-2 w-4 h-4 rounded-full bg-purple-500 animate-ping-slow animation-delay-2000"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${gradientTextClass}`}>
              Why Choose DocuFlow?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Experience the future of document management today
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FileText, title: 'Smart Document Management', description: 'Organize, search, and manage your documents with AI-powered categorization' },
              { icon: Shield, title: 'Enterprise Security', description: 'Bank-level encryption and advanced security features to protect your data' },
              { icon: Zap, title: 'AI-Powered Automation', description: 'Automate repetitive tasks and workflows with intelligent AI assistance' }
            ].map((feature, index) => (
              <div key={index} className={cardClass}>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800">
                  <FileText className="h-4 w-4 text-white" />
                </div>
                <span className={`text-base font-medium ${gradientTextClass}`}>DocuFlow</span>
              </div>
              <p className="text-sm text-gray-400">
                Transforming document management with AI-powered solutions for modern businesses.
              </p>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).slice(0, 3).map(([section, links]) => (
              <div key={section}>
                <h3 className={sectionTitleClass}>{section.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.to} className={linkClass}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} DocuFlow. All rights reserved.
              </div>
              <div className="flex space-x-6">
                {footerLinks.bottomLinks.map((link, index) => (
                  <Link key={index} to={link.to} className={linkClass}>{link.name}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
