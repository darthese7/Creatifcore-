import { motion } from 'framer-motion';
import { StaggerGroup, StaggerItem } from './StaggerGroup';
import SectionReveal from './SectionReveal';

type Project = {
  title: string;
  summary: string;
  tags: string[];
  metrics: string[];
  accentClassName: string;
};

type ProjectsProps = {
  projects: Project[];
};

function getTagClassName(tag: string) {
  if (tag.toLowerCase().includes('brand')) {
    return 'bg-[#ffe2cf] text-[#281817]';
  }

  if (tag.toLowerCase().includes('social')) {
    return 'bg-[#d8fbf2] text-[#17362b]';
  }

  if (tag.toLowerCase().includes('ui') || tag.toLowerCase().includes('ux')) {
    return 'bg-[#f8e8ef] text-[#2b1722]';
  }

  if (tag.toLowerCase().includes('motion')) {
    return 'bg-[#e0efff] text-[#17273d]';
  }

  return 'bg-white/90 text-black';
}

function Projects({ projects }: ProjectsProps) {
  return (
    <SectionReveal id="work" className="bg-[#080808] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <StaggerGroup className="mx-auto max-w-[560px] text-center">
          <StaggerItem>
            <span className="section-pill">Projects</span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="section-title mt-3 md:whitespace-nowrap">From Brief to Outcome</h2>
          </StaggerItem>
          <StaggerItem>
            <p className="section-copy mx-auto mt-2 max-w-[360px] text-balance">
              We define the goal, design the system, and deliver assets that make a difference.
            </p>
          </StaggerItem>
        </StaggerGroup>

        <div className="mx-auto mt-10 grid max-w-[920px] gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0d0d0d] shadow-[0_18px_40px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <div className="relative h-[244px] bg-[#111111]">
                <div className="absolute inset-0 grid place-items-center text-[14px] font-medium text-white/72">
                  Project thumbnail
                </div>
              </div>

              <div className="px-7 pb-8 pt-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-[24px] font-semibold tracking-[-0.05em] text-white sm:text-[26px]">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full bg-[#4b4b4b] px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.04em] text-white/94"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} tags`}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3.5 py-2 text-[11px] font-medium ${getTagClassName(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-8 text-white/56">{project.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Projects;
