'use client';

import api from '@/api';
import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Separator, Spinner } from '@/components/ui';
import { useEffect, useState } from 'react';
const HomePage = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState({
    dates: undefined,
    guests: 0,
    search: '',
  });

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await api.get('/api/listings', { params: filters });

        setListings(response.data);
      } catch (error) {
        setError('Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchListings();
  }, [filters]);

  const renderListingList = () => {
    if (isLoading) {
        <div className='flex justify-center'>
          <Spinner size='sm' />
        </div>
    }

    if (error) {
      return <div className='text-center'>{error}</div>;
    }

    
    return <ListingList listings={listings} />;
  }

  const handleFilters = (filters) => {
    setFilters(filters);
  };

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleFilters} />
        <Separator className='my-4' />
      </div>
      {renderListingList()}
    </div>
  );
};

export default HomePage;
