'use client'

import { listings as statisListings } from '@/api/data/listings';
import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Separator } from '@/components/ui';
import { useState } from 'react';
const HomePage = () => {
  const [listings, setListings] = useState(statisListings)
   return (
     <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters/>
        <Separator className='my-4' />
      </div>
        <ListingList listings={listings} />
     </div>
  )
}

export default HomePage