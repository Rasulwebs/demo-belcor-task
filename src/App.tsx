import { useState } from 'react'
import './App.css'
import Router from './router/Router'
import { QueryClient, QueryClientProvider } from 'react-query'
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
