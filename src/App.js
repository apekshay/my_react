import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
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

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
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
