import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);


export function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
      return interval + " year(s) ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
      return interval + " month(s) ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
      return interval + " day(s) ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
      return interval + " hour(s) ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
      return interval + " minute(s) ago";
  }
  return Math.floor(seconds) + " second(s) ago";
}

export const checkIsLiked = (likeList: string[], userId: string) => {
    return likeList.includes(userId);
  };
