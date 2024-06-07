import { Navigate, Outlet } from 'react-router-dom'
import DefaultTemplate from '../layout/default'

export default function Protected() {
  //   const { isSignedIn } = useContext(AuthContext)

  const isSignedIn = true

  return isSignedIn ? (
    <DefaultTemplate>
      <Outlet />
    </DefaultTemplate>
  ) : (
    <Navigate to='/login' />
  )
}
