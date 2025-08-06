import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {PageOrEllipsis} from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getPageItems = (currentPage: number, totalPages: number): PageOrEllipsis[] =>  {
  const pages: PageOrEllipsis[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  pages.push(1);

  const left = currentPage - 1;
  const right = currentPage + 1;

  if (left > 2) {
    pages.push('ellipsis');
  } else {
    for(let i = 2; i < left; i++) {
      pages.push(i);
    }
  }

  for (let i = Math.max(2, left); i <= Math.min(totalPages - 1, right); i++) {
    pages.push(i);
  }

  if (right < totalPages - 1) {
    pages.push('ellipsis');
  } else {
    for(let i = right + 1; i < totalPages; i++) {
      pages.push(i);
    }
  }

  pages.push(totalPages);

  return pages;
}

