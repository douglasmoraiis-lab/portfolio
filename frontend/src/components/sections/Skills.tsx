import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { mockSkills } from '@/data/mock'

const Skills: React.FC = () => {
  const skillCategories = {
    frontend: mockSkills.filter(skill => skill.category === 'frontend'),
    backend: mockSkills.filter(skill => skill.category === 'backend'),
    database: mockSkills.filter(skill => skill.category === 'database'),
    tools: mockSkills.filter(skill => skill.category === 'tools'),
  }

  const SkillBar: React.FC<{ skill: typeof mockSkills[0] }> = ({ skill }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level * 10}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level * 10}%` }}
        ></div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Skills */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-center text-primary">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillCategories.frontend.map((skill) => (
                  <SkillBar key={skill.id} skill={skill} />
                ))}
              </CardContent>
            </Card>

            {/* Backend Skills */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-center text-primary">Backend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillCategories.backend.map((skill) => (
                  <SkillBar key={skill.id} skill={skill} />
                ))}
              </CardContent>
            </Card>

            {/* Database Skills */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-center text-primary">Database</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillCategories.database.map((skill) => (
                  <SkillBar key={skill.id} skill={skill} />
                ))}
              </CardContent>
            </Card>

            {/* Tools Skills */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-center text-primary">Tools & Others</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillCategories.tools.map((skill) => (
                  <SkillBar key={skill.id} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'GraphQL', 'REST APIs', 'Microservices', 'CI/CD', 'Testing',
                'Agile', 'Scrum', 'TDD', 'Design Patterns', 'Performance Optimization'
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills