"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { ProvideAuth as AuthProvider } from "@/helpers/auth-provider";
import Footer from '@/componentes/footer/Footer';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (<>
    <html lang="en" suppressHydrationWarning>
        <body>
            <AuthProvider>
                <div className="pagPrincipal">
                  {children}
                </div>
            </AuthProvider>
          <Footer/>
        </body>
      </html>
    </>
  )
}
