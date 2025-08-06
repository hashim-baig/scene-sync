import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { MovieCardTemplateProps} from "@/types";

const MovieCardTemplate: React.FC<MovieCardTemplateProps> = ({title, poster, ratings, language, releaseYear}) => {
  return (
      <Card className="w-[230px] h-[225px] p-4 gap-3 rounded-xs">
          <CardContent className="relative w-full h-[137px] p-0 overflow-hidden rounded-xs">
              <Image
                  src={poster}
                  alt={`${title} Poster`}
                  fill
                  sizes="(max-width: 640px) 100vw, 230px"
                  style={{
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  priority
              />
          </CardContent>
          <CardHeader className="p-0 gap-3">
              <CardTitle className="truncate max-w-full whitespace-nowrap overflow-hidden">{title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Image src="/star.png" alt="star" width={9} height={9}/>
                  <p className="text-xs">{ratings}</p>
                  <p className="text-xs">{language}</p>
                  <p className="text-xs">{releaseYear}</p>
              </CardDescription>
          </CardHeader>
      </Card>
  );
};

export default MovieCardTemplate;
