import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-full h-screen">
    <img
      className="hidden sm:block absolute w-full h-full oject-cover"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/96955d63-0bb3-452c-a226-67c595f275b9/US-en-20230327-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      alt="/"
    />
    <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
    <div className="fixed w-full px-4 py-24 z-50">
      <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white !important">
        <div className="max-w-[320px] mx-auto py-16">
          <h1 className="text-3xl font-bold">Sign IN</h1>
          <form className="w-full flex flex-col py-4">
            <input
              className="p-3 my-2 bg-gray-700 rounded"
              type="email"
              placeholder="email"
              autoComplete="email"
            />
            <input
              className="p-3 my-2 bg-gray-700 rounded"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button className="bg-red-600 py-3 my-6 rounded font-bold">
              Sign In
            </button>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <p>
                <input className="mr-2" type="checkbox" />
                Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p className="py-8">
              <span className="text-gray-600">
                New to Notflix?
              </span>{' '}
              <Link to='/signup'>Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Login