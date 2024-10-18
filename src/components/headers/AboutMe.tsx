import { File, Globe, Mail } from 'lucide-react';
import React from 'react'
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {
  name: string;
  role: string;
  availability: "Available" | "Open to Opportunities" | "Unavailable";
  email: string;
  location: string;
  image: string;
  resume: string;
  currentCompany: { title: string; description:string; duration:string};
}
export default function AboutMe({ name, role, availability, email, location, image, resume, currentCompany }: Props) {
  return (
    <div className='w-full h-full flex flex-col justify-center items-start gap-4 mt-2 mb-4'>
      <div className='w-full flex justify-between items-center'>
        {/* role */}
        <div className='inline-flex justify-center items-center gap-1 text-sm'>
          <Globe size={18} />
          {role}
        </div>
        {/* availability */}
        <div className='inline-flex justify-center items-center text-sm'>
          <Badge className={cn(availability === "Available" ? "bg-green-500 text-green-200" : availability === "Open to Opportunities" ? "bg-yellow-500 text-yellow-200" : "bg-red-500 text-red-200")}>
            {availability === "Available" ? "Available" : availability === "Open to Opportunities" ? "Open to Opportunities" : "Unavailable"}
          </Badge>
        </div>
      </div>

      <div className='w-full flex justify-between items-center'>
        {/* name, location, current company, image */}
        <div className='flex flex-col justify-center items-start gap-1'>
          <h1 className='text-3xl font-bold pb-1'>Hello, I&apos;m {name}</h1>
          <p>{role} based in {location}</p>
          {currentCompany && <p>{currentCompany.description} @ {currentCompany.title} for {currentCompany.duration}</p>}
        </div>
        <img src={image} alt={name} className='w-32 h-32 object-cover rounded-xl ml-5' />
      </div>

      <div className='h-full flex justify-center items-center gap-2'>
        {/* resume, contact me */}
        <Link href={`mailto:${email}`}>
          <Button variant="outline" className='flex justify-center items-center gap-2'>
            <Mail size="20"/> Email Me
          </Button>
        </Link>
        <Link href={resume} className='flex justify-center items-center gap-2'>
          <Button variant="outline">
            <File size="20" />&nbsp; Resume
          </Button>
        </Link>
      </div>
    </div>
  )
}