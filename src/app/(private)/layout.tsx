import { ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'

export default function PrivateLayout ({ children }: { children: ReactNode }) {
  return (
    <main className='h-screen w-full'>
      <nav>
        <Header></Header>
      </nav>
      <section className='flex min-h-[calc(100vh-4.25rem)]'>
        <div className='grow w-[calc(100vw-28rem)] p-4 pl-2'>{children}</div>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </main>
  )
}
