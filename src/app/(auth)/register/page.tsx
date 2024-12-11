'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { RegisterInput, registerSchema } from "@/types/auth";
import { AppRoutes } from "@/constants/routes";

export default function RegisterPage() {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
  
  const onSubmit = async (data: RegisterInput) => {
    console.log(data)
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-light">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your details to get started</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      className="h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="h-12"
                      {...field}
                    />
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
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button className="w-full h-12" type="submit">
              Sign up
            </Button>
          </form>
        </Form>
        
        <div className="text-center">
          <a
            href={AppRoutes.LOGIN}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Already have an account? Sign in
          </a>
        </div>
      </div>
    </div>
  )
}