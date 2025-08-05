import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Skeleton} from "@/components/ui/skeleton";

const MovieCardSkeleton = ({}) => {
    return (
        <Card className="w-[230px] h-[225px] p-4 gap-3 rounded-xs">
            <CardContent className="w-fit h-fit p-0">
                <Skeleton className="h-[137px] w-[198px]"/>
            </CardContent>
            <CardHeader className="p-0 gap-3">
                <CardTitle className="truncate max-w-full whitespace-nowrap overflow-hidden">
                    <Skeleton/>
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                    <Skeleton className="h-[9px] w-[9px] rounded-full"/>
                    <Skeleton className="h-[18px] w-[40px]"/>
                    <Skeleton className="h-[18px] w-[40px]"/>
                    <Skeleton className="h-[18px] w-[40px]"/>
                </CardDescription>
            </CardHeader>
        </Card>
    );
};

export default MovieCardSkeleton;
