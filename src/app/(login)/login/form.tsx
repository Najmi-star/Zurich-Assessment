'use client'

import { USER_AUTHENTICATED, USER_UNAUNTHETICATED } from '@/lib/constant'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export const LoginForm = () => {
  const { data, status } = useSession()
  const [loginAttempt, setLoginAttempt] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (data) {
      if (status === USER_AUTHENTICATED) {
        // User is authenticated, navigate to dashboard
        router.push('/dashboard')
      } else if (status === USER_UNAUNTHETICATED) {
        // User is not authenticated, set flag
        setLoginAttempt(true)
      }
    }
  }, [data, status, router])

  return (
    <section className='grid grid-cols-2 w-full' style={{ minHeight: '100vh' }}>
      <div className='relative min-h-full bg-sky-700'></div>
      <div className='w-full px-16 py-8 m-auto'>
        <div className='mb-4 text-3xl font-semibold'>
          Welcome to <span className='text-sky-500'>Client Listing</span>
        </div>
        <div className='flex'>
          <button
            className='bg-sky-500 h-16 w-5/12 font-semibold text-white rounded-md'
            onClick={() => signIn('google')}
          >
            Sign in with Google
          </button>
          <Image
            alt='logo'
            src='/images/google_logo.png'
            width={65}
            height={10}
          ></Image>
        </div>
        <p className='text-red-400 font-bold text-lg mt-2'>
          {loginAttempt ? 'Login failed, please try again' : ''}
        </p>
      </div>
    </section>
  )
}
