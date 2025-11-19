import React from 'react';
import { GraduationCap, FileText, CheckCircle, Clock, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 p-2 rounded-xl shadow-lg shadow-teal-500/50">
                <FileText className="w-6 h-6 text-indigo-950" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-300 via-emerald-300 to-green-300 bg-clip-text text-transparent">
                Form Wallah
              </span>
            </Link>
            
            <div className="hidden md:flex space-x-4 items-center">
              <Link 
                to="/login"
                className="text-white px-6 py-2 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup"
                className="bg-gradient-to-r from-teal-400 to-emerald-500 text-indigo-950 px-6 py-2 rounded-full font-bold shadow-xl shadow-teal-500/50 hover:shadow-teal-500/70 transition-shadow"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-400/40 shadow-lg shadow-teal-500/20">
            <span className="text-sm font-semibold text-teal-200">🎯 Simplifying Exam Applications</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Fill Competitive Exam
            <br />
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-green-300 bg-clip-text text-transparent">
              Forms with Ease
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Your one-stop solution for JEE, NEET, SSC, UPSC, and more. 
            Fast, secure, and hassle-free form filling experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 text-indigo-950 px-8 py-4 rounded-full text-lg font-bold shadow-2xl shadow-teal-500/50 flex items-center gap-2">
              Start Filling Forms
              <ArrowRight />
            </button>
            <button className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-teal-400 shadow-lg shadow-teal-500/30">
              Watch Demo
            </button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
            <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-teal-400/30 shadow-xl shadow-teal-500/10">
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent"></div>
              <div className="text-gray-300 mt-2 font-medium">Forms Filled</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent"></div>
              <div className="text-gray-300 mt-2 font-medium">Exams Supported</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-green-400/30 shadow-xl shadow-green-500/10">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent"></div>
              <div className="text-gray-300 mt-2 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">Form Wallah?</span>
            </h2>
            <p className="text-gray-300 text-lg">Experience the future of form filling</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl shadow-teal-500/30">
              <div className="text-teal-300 mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-300">Fill forms in minutes, not hours</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl shadow-teal-500/30">
              <div className="text-teal-300 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Safe</h3>
              <p className="text-gray-300">Your data is encrypted and protected</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl shadow-teal-500/30">
              <div className="text-teal-300 mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Save Progress</h3>
              <p className="text-gray-300">Resume anytime from where you left</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl shadow-teal-500/30">
              <div className="text-teal-300 mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Auto Validation</h3>
              <p className="text-gray-300">Smart validation prevents errors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exams Section */}
      <section id="exams" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Supported <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">Examinations</span>
            </h2>
            <p className="text-gray-300 text-lg">We cover all major competitive exams</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-20"></div>
              <div className="relative">
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">JEE</h3>
                <p className="text-gray-300 mb-4">Joint Entrance Exam</p>
                <button className="flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 opacity-20"></div>
              <div className="relative">
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">NEET</h3>
                <p className="text-gray-300 mb-4">Medical Entrance</p>
                <button className="flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500 opacity-20"></div>
              <div className="relative">
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">SSC</h3>
                <p className="text-gray-300 mb-4">Staff Selection Commission</p>
                <button className="flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-20"></div>
              <div className="relative">
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">UPSC</h3>
                <p className="text-gray-300 mb-4">Civil Services</p>
                <button className="flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 opacity-20"></div>
              <div className="relative">
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">GATE</h3>
                <p className="text-gray-300 mb-4">Graduate Aptitude Test</p>
                <button className="flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-pink-500 opacity-20"></div>
              <div className="relative">
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-fuchsia-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">CAT</h3>
                <p className="text-gray-300 mb-4">Common Admission Test</p>
                <button className="flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-green-500/20 p-12 rounded-3xl border border-teal-400/40 shadow-2xl shadow-teal-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of students who trust Form Wallah for their exam applications
            </p>
            <button className="bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 text-indigo-950 px-10 py-4 rounded-full text-lg font-bold shadow-2xl shadow-teal-500/50">
              Fill Your First Form Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-300">
          <p className="font-medium">© 2024 Form Wallah. Made with 💚 for students.</p>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;