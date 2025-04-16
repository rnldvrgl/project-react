import { Button, DateRangePicker, Input, Stepper } from "@/components/ui"
import { Search } from 'lucide-react'
import { memo, useState } from "react"
const ListingFilters = ({onChange}) => {
    const [dates, setDates] = useState()
    const [guests, setGuests] = useState(0)
    const [search, setSearch] = useState('')

    const handleSubmit = () => {
        onChange({dates, guests, search});
    }
    
  return (
  <div className='flex flex-col items-center justify-center gap-2 lg:flex-row'>
    <Input className='w-[400px]' placeholder='Search destinations'value={search} onChange={(e) => setSearch(e.target.value)}/>
    <DateRangePicker placeholder='Add dates' value={dates} onChange={setDates} minDate={new Date()}/>
    <Stepper label='guest' value={guests} onChange={setGuests}/>
    <Button onClick={handleSubmit}>
        <Search className ='size-4' />
    </Button>
    </div>
  )
}

export default memo(ListingFilters)