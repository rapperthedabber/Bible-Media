import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav'
import Body from '@/components/body'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Body />
    <Footer />
    </div>
  )
}
