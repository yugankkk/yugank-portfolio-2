import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ToastProvider } from "@/components/ui/toast"

export const metadata: Metadata = {
  title: "Yugank Mahale - Mechanical Engineer & Filmmaker",
  description:
    "Portfolio of Yugank Mahale - Mechanical Engineering student and filmmaker from Fr. Conceicao Rodrigues College of Engineering",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased font-mono">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}
