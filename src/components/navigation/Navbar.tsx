import React from "react";
import { Briefcase, DiamondPlus, Folder, GraduationCap, House, Mail,  } from "lucide-react";
import { ModeToggle } from "../ui/ModeToggle";
import { Button } from "../ui/button";
import Link from "next/link";
import { data } from "@/lib/data";

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className="w-full h-full max-w-lg bg-primary-foreground flex justify-between items-center px-8 py-4 rounded-xl border m-2 mt-5 ">
      <div className="flex justify-center items-center gap-4 z-10">

      {/* home */}
      <Link href="#home">
        <Button variant="ghost" size="icon">
          <House/>
        </Button>
      </Link>

      {/* experience */}
      <Link href="#experience"> 
        <Button variant="ghost" size="icon">
          <Briefcase/>
        </Button>
      </Link>

      {/* education section */}
      <Link href="#education">
        <Button variant="ghost" size="icon">
          <GraduationCap/>
        </Button>
      </Link>

      {/* projects */}
      <Link href="#projects">
        <Button variant="ghost" size="icon">
          <Folder/>
        </Button>
      </Link>

      {/* contact us section */}
      <Link href="#home">
        <Button variant="ghost" size="icon">
          <Mail/>
        </Button>
      </Link>
      </div>

      <div className="flex justify-center items-center gap-2">
      {/* Toggle Theme */}
      <ModeToggle />
      {/* hire me */}
      <Link href="">
        <Button className="flex justify-center items-center fap-2" variant="outline">
          <DiamondPlus /> &nbsp;
          Hire Me
        </Button>
      </Link>
      
      </div>
    </div>
  )
}