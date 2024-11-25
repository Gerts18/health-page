import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="mr-6">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="FICMAC Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="flex items-center space-x-6 ml-2">
          <Link
            href="/nosotros"
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Nosotros
          </Link>
          <Link
            href="/investigaciones"
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Investigaciones
          </Link>
          <Link
            href="/educacion"
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Educación
          </Link>
          <Link
            href="/medicos"
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Médicos
          </Link>
          <Link
            href="/noticias"
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Noticias
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            className="bg-[#A0B8FF] text-white rounded-full hover:bg-[#A0B8FF]/90"
          >
            Log in
          </Button>
          <Button
            variant="outline"
            className="border-[#EB356E] text-[#EB356E] rounded-full hover:bg-[#EB356E]/10"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}

