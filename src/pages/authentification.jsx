"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc"

export default function Authentificati() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center px-8">
                <img src="https://eservices.cgi.ci/avit/resources/images/home/home-public-person.png" alt="Framer" className="" />
                {/* <img src="/coins.png" alt="Coins" className="mb-8 w-64" /> */}
                <h2 className="text-4xl font-bold leading-tight text-center">
                    {/* Gerer les voyages et colis */}
                </h2>
            </div>

            {/* Sign in Form */}
            <div className="w-1/2 flex justify-center items-center p-6">
                <Card className="w-full max-w-md shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl">
                            {/* <img src="" alt="" srcset="" /> */}
                            Accedez a votre compte
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-4">
                        <Button variant="outline" className="w-full flex gap-2">
                            <FcGoogle className="text-xl" />
                            Se connecter avec Google
                        </Button>

                        <div className="flex items-center gap-4">
                            <Separator className="flex-1" />
                            <span className="text-sm text-muted-foreground">ou se connecter avec gmail</span>
                            <Separator className="flex-1" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Username or Email</Label>
                            <Input id="email" placeholder="you@example.com" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password">Password</Label>
                                <a href="#" className="text-sm text-muted-foreground hover:underline">Forgot?</a>
                            </div>
                            <Input id="password" type="password" />
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-4">
                        <Button className="w-full">Sign In</Button>
                        <p className="text-sm text-muted-foreground">
                            Don’t have an account? <a href="#" className="hover:underline">Sign up</a>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
