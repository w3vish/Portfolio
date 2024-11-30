"use client"

import { Link } from "lucide-react";
import Image from "next/image";

const projectList = [
    {
        name: "Infinite Fusion Dex",
        description:
            "A fan-made site for Pokémon Infinite Fusion, offering tools to create and explore 470+ Pokémon fusions with 221k+ combinations and 172k+ custom sprites by 6,700+ artists.",
        techStack: ["Next.js", "Tailwind CSS", "Express.js", "SQLite", "Prisma"],
        features: [
            "221,390+ fusion combinations",
            "172,095 custom sprites",
            "Artist gallery of 6,736 artists",
            "400,000+ images to explore",
        ],
        url: "https://infinitefusion.org",
        image: "/infinitefusion.png",
    },
    {
        name: "Kampita",
        description:
            "Kampita is a free music streaming and download app with 40M+ high-quality songs. Users can stream or download music without any cost.",
        techStack: ["Next.js", "Tailwind CSS", "Hono.js", "PostgreSQL"],
        features: [
            "40M+ songs available for free download",
            "High-quality music streaming",
            "Fast and responsive UI",
            "Robust backend powered by Hono.js and PostgreSQL",
        ],
        url: "https://kampita.vercel.app",
        image: "/kampita.png",
    },
    {
        name: "Matlabi Dunia",
        description:
            "A database of 10,000+ Hindi and English shayaries, featuring a user-friendly platform for poetry lovers to explore and share heartfelt expressions.",
        techStack: ["Express.js", "MongoDB", "Vanilla HTML & CSS"],
        features: [
            "10,000+ shayaries in Hindi & English",
            "Responsive UI",
            "Category-based filtering",
            "Fast backend with Express.js and MongoDB",
        ],
        url: "https://matlabidunia.com",
        image: "/matlabidunia.png",
    },
];

const Projects = () => {

    return (
        <section className="mt-10">
            <h2 className="mb-4 border-b font-medium text-xl">Projects</h2>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projectList.map(project => {
                    return (
                        <div key={project.name} className="shadow-md px-2 pb-4 border rounded-lg overflow-hidden">

                            <h3 className="gap-1 my-2 hover:font-bold text-center hover:underline">
                                <a className="flex justify-center items-center gap-1" target="_blank" href={project.url}>
                                    {project.name}
                                    <Link className="size-4" />
                                </a>
                            </h3>
                            <a href={project.url} target="_blank">
                                <Image
                                    className="bg-transparent mb-4 rounded-lg w-full"
                                    src={project.image}
                                    alt={project.name}
                                    height={500}
                                    width={500}
                                />
                            </a>

                            <p className="">{project.description}</p>
                            <div className="">
                                <h4 className="mt-2 mb-1 font-bold">Tech Stack</h4>
                                <div className="flex flex-wrap gap-1 md:gap-2">
                                    {project.techStack.map(stack => (
                                        <span className="p-1 border rounded-md" key={stack}>
                                            {stack}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="">
                                <h4 className="mt-2 mb-1 font-bold">Features</h4>
                                <ul className="ml-4 list-disc">
                                    {project.features.map(feature => <li className="" key={feature}>{feature}</li>)}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p>For More Projects visit my <a href="https://github.com/w3vish" target="_blank" className="font-bold hover:underline">Github</a></p>
        </section>
    );
};

export default Projects;
