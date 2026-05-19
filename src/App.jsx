import { Circle, Mail, ExternalLink, FileText, Code, Server, Brain } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "AI Fitness Dashboard",
      description:
        "A full-stack dashboard for tracking workouts, nutrition, sleep, and progress with AI-generated insights and recommendations.",
      tech: ["React", "Node.js", "PostgreSQL", "OpenAI API", "Charts"],
      status: "Planned flagship project",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      title: "AI C Debugging Assistant",
      description:
        "A tool that explains C compiler errors, runtime bugs, memory issues, and confusing code in beginner-friendly language.",
      tech: ["C", "Python", "LLMs", "Static Analysis", "CLI"],
      status: "Planned AI/dev-tool project",
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "Multithreaded HTTP Server",
      description:
        "A systems project demonstrating sockets, threading, request handling, concurrency, and Linux development.",
      tech: ["C", "Linux", "Sockets", "Threads", "HTTP"],
      status: "Planned systems project",
      icon: <Server className="h-5 w-5" />,
    },
  ];

  const skills = [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "Linux",
    "PyTorch",
    "Machine Learning",
    "Google Colab",
    "Rest APIs",
    "Git",
    "Data Structures & Algorithms",
    "Systems Programming",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10 md:py-16">
        <nav className="flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">Antoine Albrecht</h1>
          <div className="flex items-center gap-4 text-sm text-zinc-300">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>

        <section className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300 shadow-lg">
              Currently building full-stack, AI, and systems projects
            </div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
              Computer Science Student
            </p>
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Building full-stack, AI, and systems projects.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              I’m a CS student focused on practical software engineering, systems programming,
              and AI-powered tools. I like building projects that are polished, useful, and easy to demo.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg transition hover:bg-zinc-200"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-400"
              >
                <FileText className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl">
            <p className="text-sm text-zinc-400">Current focus</p>
            <h3 className="mt-3 text-2xl font-semibold">Summer Project Roadmap</h3>
            <div className="mt-6 space-y-4 text-sm text-zinc-300">
              <div className="rounded-2xl bg-zinc-950/70 p-4">Month 1: Portfolio + full-stack stack</div>
              <div className="rounded-2xl bg-zinc-950/70 p-4">Month 2: AI fitness dashboard MVP</div>
              <div className="rounded-2xl bg-zinc-950/70 p-4">Month 3: Polish, deploy, and add AI features</div>
              <div className="rounded-2xl bg-zinc-950/70 p-4">Month 4: Systems project</div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">Projects</p>
              <h2 className="mt-2 text-3xl font-bold">Featured Work</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-zinc-500 hover:bg-zinc-900"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-800 text-zinc-100">
                  {project.icon}
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {project.status}
                </p>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 text-sm text-zinc-300">
                  <a href="#" className="inline-flex items-center gap-1 hover:text-white">
                    GitHub <Circle className="h-4 w-4" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-1 hover:text-white">
                    Demo <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">Skills</p>
          <h2 className="mt-2 text-3xl font-bold">Technical Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-3xl bg-white p-8 text-zinc-950">
          <h2 className="text-3xl font-bold">Let’s connect.</h2>
          <p className="mt-3 max-w-2xl text-zinc-700">
            I’m currently looking for software engineering internships and project opportunities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="antoinealbrecht21@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://github.com/antoinealbrecht" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-semibold">
              <Circle className="h-4 w-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/antoine-albrecht-9b1a7328a/" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-semibold">
              <Circle className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
