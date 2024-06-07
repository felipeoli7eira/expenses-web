import { Routes, Route, NavLink } from 'react-router-dom'
import AuthProvider from '../contexts/AuthContext'
import Protected from './ProtectedRoute'

import LoginPage from '../pages/public/Login/page'
import ExpensesRead from '../pages/private/Expenses/ExpensesRead/page'

export const appRoutesMap = {
  login: {
    path: '/login',
  },
  appHome: {
    path: '/app',
  },

  expenseRead: {
    path: 'despesas',
  },
  expenseCreate: {
    path: 'despesas/nova',
  },
}

export function AppRoutes(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path=''
          element={
            <div className='p-4 text-center'>
              <p className='text-white'>redirecione...</p>
              <nav className='flex gap-5 justify-content-center text-xl'>
                <NavLink to='/login'>login</NavLink>
                <NavLink to='/app'>app</NavLink>
              </nav>
            </div>
          }
        />

        <Route path={appRoutesMap.login.path} element={<LoginPage />} />

        <Route path={appRoutesMap.appHome.path} element={<Protected />}>
          <Route path={appRoutesMap.appHome.path} element={<>...</>} />
          <Route path={appRoutesMap.expenseRead.path} element={<ExpensesRead />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
