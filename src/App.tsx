import { useState, useEffect } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-dark/80 backdrop-blur-sm z-50 border-b border-neon-blue/30">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-0 ${glitchActive ? 'glitch-effect' : ''}`}>
            <span className="text-neon-blue neon-text">Portfolio</span>
          </h1>
          
          <div className="flex space-x-6">
            <button 
              className={`neon-text hover:text-neon-blue transition-colors ${activeSection === 'about' ? 'text-neon-blue' : 'text-white'}`}
              onClick={() => setActiveSection('about')}
            >
              About
            </button>
            <button 
              className={`neon-text hover:text-neon-green transition-colors ${activeSection === 'projects' ? 'text-neon-green' : 'text-white'}`}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </button>
            <button 
              className={`neon-text hover:text-neon-pink transition-colors ${activeSection === 'contact' ? 'text-neon-pink' : 'text-white'}`}
              onClick={() => setActiveSection('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-28 pb-16">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="fade-in">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-neon-blue neon-text">About Me</h2>
              <div className="neon-border p-6 bg-dark/50 rounded-lg mb-8">
                <p className="mb-4">
                  Welcome to my neon-inspired portfolio! I'm a passionate developer
                  specializing in creating unique web experiences with modern technologies.
                </p>
                <p className="mb-4">
                  My expertise includes React, TypeScript, and responsive design,
                  with a focus on creating visually stunning and interactive interfaces.
                </p>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4 text-neon-purple">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Responsive Design', 'UI/UX'].map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-neon-purple/10 text-neon-purple border border-neon-purple/50 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="fade-in">
            <h2 className="text-4xl font-bold mb-8 text-neon-green neon-text">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((project) => (
                <div 
                  key={project}
                  className="neon-border p-6 bg-dark/50 rounded-lg hover:bg-neon-green/5 transition-all group"
                >
                  <div className="h-40 mb-4 bg-neon-green/10 rounded flex items-center justify-center">
                    <span className="text-neon-green text-5xl">Project {project}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-green transition-colors">
                    Project Title {project}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    A short description of the project and the technologies used.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="neon-button text-sm border-neon-green text-neon-green">
                      View Demo
                    </a>
                    <a href="#" className="neon-button text-sm border-neon-green text-neon-green">
                      Source Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="fade-in">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-neon-pink neon-text">Get In Touch</h2>
              <div className="neon-border p-6 bg-dark/50 rounded-lg">
                <form className="space-y-6">
                  <div>
                    <label className="block text-neon-pink mb-2" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-dark border-2 border-neon-pink/50 focus:border-neon-pink rounded-md px-4 py-2 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neon-pink mb-2" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-dark border-2 border-neon-pink/50 focus:border-neon-pink rounded-md px-4 py-2 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neon-pink mb-2" htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full bg-dark border-2 border-neon-pink/50 focus:border-neon-pink rounded-md px-4 py-2 outline-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="neon-button border-neon-pink text-neon-pink hover:bg-neon-pink/10"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-dark/80 border-t border-neon-blue/30 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Neon Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
