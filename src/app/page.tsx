'use-client'

import { useRouter } from 'next/navigation'

export default function Home () {
  return (
    <div className='m-8 '>
      <p>
        This is a demo page and not in used, please click button below to start
      </p>
      <a href='http://localhost:3000/login'>
        <button className='p-2 bg-sky-400 text-white rounded-md'>
          Go to Login Page
        </button>
      </a>
    </div>
  )
}
