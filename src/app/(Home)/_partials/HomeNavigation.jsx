import React from 'react'
import { List, Search } from 'react-bootstrap-icons'

export default function HomeNavigation() {
  return (
    <header className='p-4 shadow'>
      <nav className='flex items-center justify-between'>
        <button type="button">
          <List/>
        </button>
        <h1 className='font-semibold'>QURAN</h1>
        <button type="button">
          <Search/>
        </button>
      </nav>
    </header>
  )
}
