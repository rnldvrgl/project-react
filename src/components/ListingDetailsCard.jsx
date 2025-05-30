import { DollarSign, Pin, Users } from 'lucide-react';

import ListingDetailsCardImages from '@/components/ListingDetailsCardImages';
import { Card, Separator } from '@/components/ui';
import ListingFavoriteButton from './ListingFavoriteButton';

const ListingDetailsCard = ({ listing }) => {
  return (
    <Card className='p-4 mx-auto'>
      <ListingDetailsCardImages listing={listing} />
      <Separator className='mb-4' />
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
          <h1 className='mb-2 text-2xl font-bold'>{listing.name}</h1>
          <div className='flex items-center gap-2'>
            <DollarSign className='w-4 h-4 text-primary' />
            <span className='text-muted-foreground'>
              <span className='font-bold text-foreground'>{listing.price}</span>{' '}
              / night
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Pin className='w-4 h-4 text-primary' />
            <span className='text-muted-foreground'>
              {listing.location.name}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Users className='w-4 h-4 text-primary' />
            <span className='text-muted-foreground'>
              {listing.maxGuests} Guests
            </span>
          </div>
        </div>
        <ListingFavoriteButton listing={listing} />
      </div>
      <Separator className='my-4' />
      <div className='whitespace-pre-line'>{listing.description}</div>
    </Card>
  );
};

export default ListingDetailsCard;
