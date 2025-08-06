import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import {MovieCardProps} from "@/types";
import {upperCase} from "upper-case";

const MovieCardTemplate: React.FC<MovieCardProps> = ({title, poster, ratings, language, releaseYear}) => {
  return (
      <Card className="w-[230px] h-[225px] p-4 gap-3 rounded-xs">
          <CardContent className="w-fit h-fit p-0">
                  <Image
                      src={poster}
                      alt={`${title} Poster`}
                      width={198}
                      height={137}
                      className="rounded-xs h-[137px] m-0"
                      style={{ width: 198, height: "auto" }}
                      priority
                  />
          </CardContent>
          <CardHeader className="p-0 gap-3">
              <CardTitle className="truncate max-w-full whitespace-nowrap overflow-hidden">{title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Image src="/star.png" alt="star" width={9} height={9}/>
                  <p className="text-xs">{ratings.toFixed(1)}</p>
                  <p className="text-xs">{upperCase(language)}</p>
                  <p className="text-xs">{releaseYear}</p>
              </CardDescription>
          </CardHeader>
      </Card>
  );
};

export default MovieCardTemplate;
