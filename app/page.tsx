"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function LoginAccount() {

  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center overflow-hidden">
      <div className="w-fit m-auto bg-white lg:max-w-lg">
        <Card className="p-10 lg:p-12">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign in</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Button onClick={handleLogin} className="flex justify-center items-center gap-x-2 border rounded-full">
                <FcGoogle className="text-xl" />
                <span>Login With Google</span>
              </Button>
            </div>
            <div className="grid gap-2">
              <Button onClick={handleLogin} className="flex justify-center items-center gap-x-2 border rounded-full">
                <FaApple className="text-xl" />
                <span>Login With Apple</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}