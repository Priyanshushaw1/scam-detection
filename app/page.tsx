import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Phone, MessageSquare, AlertTriangle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-green-500 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">TrueAlert</h1>
          </div>
          <div className="space-x-2">
            <Link href="/login">
              <Button variant="outline" className="bg-white text-green-600">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-white text-green-600">Register</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-green-500 to-green-400 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Protect Yourself From Scams</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              TrueAlert detects and alerts you about potential scam calls and messages in real-time, keeping you and
              your information safe.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-white text-green-600">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Scam Detection</h3>
                <p className="text-gray-600">Identifies potential scam calls and alerts you before you answer.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Filtering</h3>
                <p className="text-gray-600">
                  Automatically filters suspicious messages and places them in a scam box.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Chatbox</h3>
                <p className="text-gray-600">
                  Get real-time updates on the latest scams and ask questions about potential fraud.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 TrueAlert. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
