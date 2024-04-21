'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui'

export function Header ({ children }: { children?: ReactNode }) {
  return (
    <section className='w-full bg-white sticky border-2 b-slate-500 flex-none'>
      <div className='h-16 flex justify-between py-2 px-8'>
        <Link href='/dashboard'>
          <Image
            alt='logo'
            src='/images/zurich_logo.png'
            width='62'
            height='52'
          />
        </Link>
        <div className='font-bold text-lg content-center'>Client List</div>
        <div className='flex items-center'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='text-center ml-4 mr-4'>Maxwell</div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='bg-yellow-200'></NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid gap-2 p-2'>
                      <Link href='/login'>Logout</Link>
                    </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </section>
  )
}
