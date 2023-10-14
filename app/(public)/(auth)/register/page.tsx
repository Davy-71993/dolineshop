"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

const formSchema = z.object({
  email: z.string().min(6, {
    message: "Email must be at least 6 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirm_password: z.string().min(6, {
    message: "Passwords don't match",
  }),
})

export default function ProfileForm() {
  
   // 1. Define your form.
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="w-full text-slate-500 mt-10 flex flex-col justify-center items-center h-screen max-h-[40rem]">
      <h1 className="my-10 text-2xl font-bold">Register</h1>
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
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password:</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirm Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </Form>
        <h1 className="mt-5 font-[200] text-center text-base text-slate-700 italic">
          Already have an account?, &nbsp;
          <Link className="font-bold text-blue-500 hover:text-blue-700" href="/login">Login here</Link>
        </h1>
      </div>
    </div>
  )
}
// import { CreateAccount } from '@/components/layout/regester'
// import React from 'react'

// type Props = {}

// const Register = (props: Props) => {
//   return (
//     <div className='w-full h-[80vh] flex justify-center items-center'>
//       <div className="w-full max-w-md h-fit bg-card shadow-2xl">
//         <CreateAccount />
//       </div>
//     </div>
//   )
// }

// export default Register