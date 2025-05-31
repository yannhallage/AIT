import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
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

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>🔔 Informations</CardTitle>
        <CardDescription>
          Espace réservé pour d'autres actions futures
        </CardDescription>

        {/* <Button variant="link">Sign Up</Button> */}

      </CardHeader>
      <CardContent>
        {/* <div className="bg-white rounded-xl shadow-md p-4 border border-gray-300">
          <h3 className="text-sm font-medium text-gray-700"></h3>
          <p className="text-xs text-gray-500"></p>
        </div> */}
      </CardContent>
    </Card>
  )
}
