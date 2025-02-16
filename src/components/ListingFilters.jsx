import { Button, DateRangePicker, Input, Stepper } from "@/components/ui"
import { Search } from 'lucide-react'
const ListingFilters = () => {
  return (
  <div className='flex flex-row items-center justify-center gap-2'>
    <Input className='w-[400px]' placeholder='Search destinations'/>
    <DateRangePicker placeholder='Add dates' />
    <Stepper/>
    <Button>
        <Search className ='size-4' />
    </Button>
  </div>
  )
}

export default ListingFilters