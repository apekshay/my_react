import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import UserContext from '../utils/UserContext'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'

const AboutUs = lazy(() => import('./components/AboutUs'))
const ContactUs = lazy(() => import('./components/ContactUs'))

//Header
//LOGO
//NavItems
//BODY
//Search bar
//Restaurants conatiner
//Restaurants lists
//FOOTER
//copyright
//link
//address
//contact
// setUserName can be accessed using the useContext(UserContext)
const AppLayout = () => {
  const [userName, setUserName] = useState('')
  useEffect(() => {
    setUserName('Apeksha Yenprediwar')
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className='app'>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:restId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
])

root.render(<RouterProvider router={appRouter} />)
