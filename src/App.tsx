import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './router/Router'
const queryClient = new QueryClient()
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  )
}

export default App
