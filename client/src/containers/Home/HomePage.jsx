import React from 'react'
import Banner from './Banner';
import Postcards from '../Blogs/Postcards';
import Category from './Category';

const HomePage = () => {
  return (
    <main className="mt-10">
      {/* Banner.jsx */}
      <Banner />

      <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        {/* post cards */}
        <Postcards />

        {/* right sidebar */}
        <Category />

      </div>
    </main>
  )
}

export default HomePage