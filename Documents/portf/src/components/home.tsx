import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export function Home() {
  return (
    <div className="container px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Full-Stack Developer & DSA Enthusiast
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Hi, I'm Sameer, a passionate full-stack developer with expertise in
                building scalable applications and a strong foundation in Data
                Structures and Algorithms.
              </p>
            </div>
            <div className="space-x-4">
              <Button>View Projects</Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:your.email@example.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="TaskFlow"
            description="A project management tool with features like task assignment, real-time updates, and kanban boards."
            tech={['React', 'Node.js', 'MongoDB', 'WebSocket']}
          />
          <ProjectCard
            title="AlgoVisualizer"
            description="A tool to visualize various sorting and pathfinding algorithms interactively."
            tech={['HTML', 'CSS', 'JavaScript']}
          />
          <ProjectCard
            title="DevConnect"
            description="A social media platform for developers to share ideas and projects."
            tech={['MongoDB', 'Express', 'React', 'Node.js']}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <SkillCard
            title="Frontend"
            skills={['React', 'Angular', 'HTML', 'CSS', 'JavaScript']}
          />
          <SkillCard
            title="Backend"
            skills={['Node.js', 'Django', 'Express']}
          />
          <SkillCard
            title="Databases"
            skills={['MongoDB', 'MySQL', 'PostgreSQL']}
          />
          <SkillCard
            title="DevOps"
            skills={['Docker', 'CI/CD', 'AWS', 'Git']}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Feel free to reach out for collaborations or just a friendly chat.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="message"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}