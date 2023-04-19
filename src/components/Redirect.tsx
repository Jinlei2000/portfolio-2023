import { useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

export default ({ to }: { to: string }) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(to, { replace: true })
  }, [])

  return <></>
}
