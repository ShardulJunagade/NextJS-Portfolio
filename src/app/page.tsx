import { Briefcase, Folder, GraduationCap, GraduationCapIcon } from "lucide-react";
import Section from "@/components/Sections";
import Image from "next/image";
import ItemCard from "@/components/ItemCard";
import AboutMe from "@/components/headers/AboutMe";
import { data } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <div className="flex flex-col gap-7 items-center justify-center bg-primary-foreground p-8 pt-5 rounded-2xl " >

        <AboutMe name={data.name} role={data.role} availability={data.availability as "Available" | "Open to Opportunities" | "Unavailable"} location={data.location} email={data.email} image={data.image} resume={data.resume} currentCompany={data.experience[0]} />

        <Section title="Experience" icon={<Briefcase />} >
        {data.experience.map((experience) => (
          <ItemCard key={experience.id} image={experience.image} title={experience.title} description={experience.description} tags={experience.tags} href={experience.href} />
        ))}
        </Section>
      
        <Section title="Education" icon={<GraduationCap />}>
          {data.education.map((education) => (
            <ItemCard key={education.id} image={education.image} title={education.title} description={education.description} tags={education.tags} href={education.href} />
          ))}
        </Section>

        <Section title="Projects" icon={<Folder />}>
          {data.projects.map((project) => (
            <ItemCard key={project.id} image={project.image} title={project.title} description={project.description} tags={project.tags} href={project.href} />
          ))}
        </Section>
        </div>
    </main>
  );
}
