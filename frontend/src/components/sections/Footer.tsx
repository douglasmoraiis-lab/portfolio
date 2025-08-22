import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/douglasmorais',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/douglasmorais',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:douglas@example.com',
      label: 'Email'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <div className="text-2xl font-bold font-mono mb-4">
                <span className="text-primary">&lt;</span>
                Douglas
                <span className="text-primary">/&gt;</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Full-stack developer passionate about creating exceptional digital experiences 
                with modern technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>douglas@example.com</p>
                <p>+55 (11) 99999-9999</p>
                <p>São Paulo, Brazil</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                © {currentYear} Douglas Morais. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm flex items-center">
                Made with <Heart size={16} className="mx-1 text-red-500 fill-current" /> using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer