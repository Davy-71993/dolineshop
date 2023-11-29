"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"

const formSchema = z.object({
  email: z.string().min(6, {
    message: "Email must be at least 6 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export default function LoginForm() {

  const router = useRouter()
  const nexturl = useSearchParams().get('callbackUrl') || '/'
  
   // 1. Define your form.
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const auth = await signIn('credentials', { ...values, redirect: false })
      if(!auth?.error && auth?.ok){
        router.push(nexturl)
        router.refresh()
      }
    } catch (error) {
      console.log(error)
    }
    
  }


  return (
    <div className="w-full text-slate-500 flex flex-col justify-center items-center h-screen max-h-[30rem]">
      <h1 className="my-10 text-2xl font-bold">Login</h1>
      <div className="w-full max-w-lg border-2 px-5 py-10 rounded-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </Form>
        <h1 className="mt-5 font-[200] text-center text-base text-slate-700 italic">
          New to doline shop, &nbsp;
          <Link className="font-bold text-blue-500 hover:text-blue-700" href="/register">Register here</Link>
        </h1>
      </div>
    </div>
  )
}
