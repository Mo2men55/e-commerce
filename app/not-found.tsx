import React from 'react'

export default function Notfound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Page Not Found</h1>
      <p className='text-lg text-muted-foreground'>
        The page you are looking for does not exist.
      </p>
    </div>
  )
}
