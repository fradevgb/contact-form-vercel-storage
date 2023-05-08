import { Form } from "@/components/Form"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className} flex  flex-col min-h-screen p-24`}>
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-center">Contacta conmigo</h2>
      <div className="flex max-w-2xl mx-auto">
        <Form />
      </div>
    </main>
  )
}
