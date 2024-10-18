import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { ChevronRight } from "lucide-react";

type Props = {
  image: string;
  title:string;
  description:string;
  tags: string[];
  href: string;
}

export default function ItemCard({ image, title, description, tags, href}: Props) {
  return (
    <Link className="flex justify-center items-center w-full h-full flex-1 gap-2 p-2" href={href}>
      <div className="flex flex-shrink-0 justify-center items-center h-16 w-16 p-1">
      <img src={image} alt={title} className="h-full w-full object-cover rounded-lg" />        
      </div>

      <div className="flex flex-col justify-center items-start w-full h-full gap-2 flex-1 flex-grow">
        <span className="text-sm">
          <span className="text-base font-semibold">{title}</span>
          {' - '}
          {description}
        </span>
        
        <span className="flex justify-start items-center gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={tag + index}
              className="border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </span>

      </div>

      <div className="p-2 pr-4">
        <ChevronRight />
      </div>
    </Link>
  )
}