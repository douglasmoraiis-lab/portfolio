import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { mockProjects } from '@/data/mock'
import { Github, ExternalLink, Star } from 'lucide-react'

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filteredProjects = filter === 'featured' 
    ? mockProjects.filter(project => project.featured)
    : mockProjects

  const ProjectCard: React.FC<{ project: typeof mockProjects[0] }> = ({ project }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-200">
            {project.title}
          </CardTitle>
          {project.featured && (
            <div className="flex items-center text-yellow-500">
              <Star size={16} fill="currentColor" />
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4">
          {project.liveUrl && (
            <Button variant="default" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A showcase of my recent work and personal projects
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'}
                onClick={() => setFilter('all')}
              >
                All Projects ({mockProjects.length})
              </Button>
              <Button 
                variant={filter === 'featured' ? 'default' : 'outline'}
                onClick={() => setFilter('featured')}
              >
                Featured ({mockProjects.filter(p => p.featured).length})
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button size="lg" asChild>
              <a href="https://github.com/douglasmorais" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects