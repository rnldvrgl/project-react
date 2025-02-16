'use client'

import { listings as statisListings } from '@/api/data/listings';
import ListingList from '@/components/ListingList';
import { useState } from 'react';
const HomePage = () => {
  const [listings, setListings] = useState(statisListings)
   return (
     <div className='container py-4'>
        <ListingList listings={listings} />
     </div>
  )
}

export default HomePage