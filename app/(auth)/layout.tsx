import { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="auth_layout">{children}</div>
  )
}

export default AuthLayout