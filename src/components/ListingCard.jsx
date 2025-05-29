import { Card, CardContent } from '@/components/ui';
import { DollarSign, Pin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ListingCardImages from './ListingCardImages';
import ListingFavoriteButton from './ListingFavoriteButton';

const ListingCard = ({ listing }) => {
  return (
    <Link to={`/listings/${listing.id}`}>
      <Card className='relative w-[320px]'>
        <div className='relative'>
          <ListingCardImages listing={listing} />
          <ListingFavoriteButton
            listing={listing}
            className='absolute right-4 top-4'
          />
        </div>
        <CardContent className='flex flex-col gap-2 p-4'>
          <h2 className='mb-2 text-xl font-semibold'>{listing.name}</h2>
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
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;
