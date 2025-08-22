import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { mockExperience } from '@/data/mock'
import { Calendar } from 'lucide-react'

const Experience: React.FC = () => {
  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present'
    const [year, month] = dateString.split('-')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
            <p className="text-xl text-muted-foreground">
              My professional journey and key accomplishments
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {mockExperience.map((exp, index) => (
              <Card key={exp.id} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Timeline Line */}
                {index !== mockExperience.length - 1 && (
                  <div className="absolute left-4 top-20 bottom-0 w-px bg-border hidden md:block"></div>
                )}
                
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{exp.position}</CardTitle>
                      <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-center justify-center w-4 h-4 bg-primary rounded-full border-4 border-background absolute left-1.5 top-8"></div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience