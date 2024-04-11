import { Routes, Route } from 'react-router-dom'
import { Templates } from '@templates'

export function Home() {
  return (
    <Routes>
      <Route path="/" element={<Templates.Default />} />
    </Routes>
  )
}
