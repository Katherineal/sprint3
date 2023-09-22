"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { ButtonLoading } from "@/components/ui/buttonloading"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"

export default function Home() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const auth = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    console.log(auth.user)
    if (auth.user !== null && auth.user !== false) {
      router.push("/")
    }
  }, [auth, router])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    const res = await login(username, password)
    const body = await res.json()
    const status = res.status

    if (status === 200) {
      auth.login(username, password)
    } else {
      console.log(body)
      toast({
        variant: "destructive",
        title: "Error",
        description: body.data,
      })
    }
    setLoading(false)
  }

  const login = async (username, password) => {
    const body = {
      username: username,
      password: password,
    }
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }

    return fetch(siteConfig.baseUrl, options)
  }

  if (auth.user !== false) {
    return
  }

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-center gap-2">
          <Card className="w-[350px]">
            <form onSubmit={handleLogin}>
              <CardHeader>
                <CardTitle>Ingresar</CardTitle>
                <CardDescription>Accedé con tus credenciales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter user"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                {loading ? (
                  <ButtonLoading text="Ingresando" />
                ) : (
                  <Button type="submit">Login</Button>
                )}
              </CardFooter>
            </form>
          </Card>
        </div>
      </section>
    </>
  )
}
