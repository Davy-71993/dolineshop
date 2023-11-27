import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isdashboard(headers:any){
  const url = headers.get('url')
  const pathName = url?.split('?')[0]
  return pathName?.includes('myshop')
}

