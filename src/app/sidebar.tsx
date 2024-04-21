'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ReactNode } from 'react'

export function Sidebar ({ children }: { children?: ReactNode }) {
  return (
    <nav className=''>
        <ul className='h-full content-container w-60 mr-8 pt-4 px-2 flex-1 flex-col border-r-2 border-gray-300'>
            <li className='w-full'>
                <Link href=''>
                    <Button className='w-full bg-sky-800'>
                        Client List
                    </Button>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
