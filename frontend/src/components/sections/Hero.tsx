import React from 'react'
import { Button } from '../ui/button'
import { Github, Linkedin, Mail, Download, ArrowDown, Instagram } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="animate-fade-in">
            <p className="text-primary font-mono text-lg mb-4">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Douglas Morais
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground">
              Full-Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              I craft exceptional digital experiences with modern technologies. 
              Passionate about creating scalable applications that solve real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg" 
              className="text-lg px-8 py-4"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/douglasmorais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/douglasmorais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:douglas@example.com"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce mx-auto block p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero