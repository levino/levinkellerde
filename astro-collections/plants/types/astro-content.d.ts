import z from 'zod'

declare module 'astro:content' {
  export function defineCollection(...args: any[]): any;
  export { z }
}