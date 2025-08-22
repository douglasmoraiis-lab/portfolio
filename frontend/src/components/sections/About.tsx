import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Code, Users, Zap, Target } from 'lucide-react'

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="text-primary" size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices and design patterns.'
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams and mentoring junior developers.'
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks to deliver innovative solutions.'
    },
    {
      icon: <Target className="text-primary" size={32} />,
      title: 'Problem Solver',
      description: 'Analyzing complex requirements and delivering solutions that exceed expectations.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with 4+ years of experience building modern web applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - About Text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Hi! I'm Douglas, a full-stack developer based in Brazil who enjoys 
                creating exceptional digital experiences. My journey in web development 
                started in 2019, and I've been passionate about building things that 
                live on the internet ever since.
              </p>
              
              <p className="text-lg leading-relaxed">
                I specialize in building scalable web applications using modern 
                technologies like React, Node.js, and TypeScript. I love working 
                on challenging projects that push me to learn and grow as a developer.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me contributing to open-source 
                projects, learning new technologies, or sharing knowledge with the 
                developer community through blog posts and mentoring.
              </p>

              <div className="pt-4">
                <h3 className="text-2xl font-semibold mb-4">What drives me:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Building products that make a real difference
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Continuous learning and improvement
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Collaborating with amazing teams
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Sharing knowledge with the community
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0 text-center">
                    <div className="mb-4 flex justify-center">
                      {highlight.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About