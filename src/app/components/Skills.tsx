import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiExpress,
    SiHono,
    SiCloudflare,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiSqlite,
    SiPrisma,
    SiGit,
    SiGithub,
    SiDocker,
    SiCloudflarepages,
    SiCodeium
  } from "@icons-pack/react-simple-icons";
  
  const Skills = () => {
    const skills = [
      {
        category: "Frontend",
        technologies: [
          { name: "React.js", icon: <SiReact className="text-blue-500" /> },
          { name: "Next.js", icon: <SiNextdotjs className="text-gray-700 dark:invert" /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
          { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
          { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
        ],
      },
      {
        category: "Backend",
        technologies: [
          { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
          { name: "Express.js", icon: <SiExpress className="text-gray-500 dark:invert" /> },
          { name: "Hono.js", icon: <SiHono className="text-orange-500" /> },
          { name: "Cloudflare Pages", icon: <SiCloudflarepages className="text-yellow-500"/> },
          { name: "Cloudflare Workers", icon: <SiCloudflare className="text-yellow-500" /> },
        ],
      },
      {
        category: "Databases",
        technologies: [
          { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
          { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
          { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
          { name: "SQLite", icon: <SiSqlite className="text-orange-400" /> },
          { name: "Prisma ORM", icon: <SiPrisma className="text-black dark:invert" /> },
        ],
      },
      {
        category: "Tools",
        technologies: [
          { name: "Git", icon: <SiGit className="text-orange-500" /> },
          { name: "GitHub", icon: <SiGithub className="text-black dark:invert" /> },
          { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
          { name: "Cloudflare", icon: <SiCloudflare className="text-yellow-500" /> },
          { name: "VS Code", icon: <SiCodeium className="text-blue-600" /> },
        ],
      },
    ];
  
    return (
      <section className="mt-10">
        <h2 className="mb-4 border-b font-medium text-xl">Skills & Technologies</h2>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.category} className="shadow-sm p-4 border rounded-lg">
              <h3 className="mb-2 font-semibold text-lg">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.technologies.map((tech, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    {tech.icon && <span className="text-2xl">{tech.icon}</span>}
                    <span className="text-sm">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  