import Devbar from '@/components/Devbar/Devbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className='fixed top-0 bottom-0 left-0'>
        <Devbar />
      </div>
      <div className='ml-[700px]'>
        <Outlet />
      </div>
    </>
  );
};

export default App;
