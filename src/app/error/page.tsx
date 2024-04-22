'use client' // Error components must be Client Components

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Error ({
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className='p-4'>
      <h2>You are not authenticated due to logging out or something went wrong</h2>
      <a href='http://localhost:3000/login'>
        <button className='p-2 bg-sky-400 text-white rounded-md'>
          Go to Login Page
        </button>
      </a>
    </div>
  )
}
