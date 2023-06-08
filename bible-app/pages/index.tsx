import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav'
import Body from '@/components/body'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Nav />
    <Body />
    </div>
  )
}
