"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession , signIn ,signOut } from 'next-auth/react'

const Dashboard = () => {
  const { data: session} =  useSession()

  if(!session){
    const router = useSession()

    if(!session){
      const router = useRouter()
      router.push('/dashboard')
    }
  }
  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard
