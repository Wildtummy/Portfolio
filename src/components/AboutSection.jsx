import { BrainCircuit, Code, BarChart3 } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">AI Engineer & Full-Stack Developer</h3>

            <p className="text-muted-foreground">
              I'm Tushar Yadav, a B.Tech graduate from IIT Roorkee with a strong foundation in software engineering, data science, and AI. I build intelligent, scalable, and user-centric applications across multiple domains.
            </p>

            <p className="text-muted-foreground">
              My projects span AI agents, data pipelines, dashboards, and full-stack web apps — combining technologies like Python, LangChain, SQL, React, and FastAPI. Whether it’s crafting backend logic, deploying ML models, or designing intuitive UIs, I enjoy turning ideas into impactful products.
            </p>

            <p className="text-muted-foreground">
              I’m always eager to explore new technologies, solve real-world problems, and contribute across the stack — from data layers to user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Tushar Yadav.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & LLM Engineering</h4>
                  <p className="text-muted-foreground">
                    Designing AI agents and prototypes with LangChain, OpenAI, and vector databases like Qdrant and FAISS.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive web apps using FastAPI, Next.js, React, TypeScript, and Streamlit.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Engineering & Analytics</h4>
                  <p className="text-muted-foreground">
                    Crafting data pipelines, conducting exploratory analysis, and building BI dashboards using SQL, Pandas, PySpark, and Power BI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
