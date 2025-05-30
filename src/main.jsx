import { seedLocalDatabase } from '@/api/data/seed';
import ThemeProvider from '@/components/ThemeProvider';
import { store } from '@/state/store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import AuthProvider from './components/AuthProvider';
import './index.css';
import Router from './Router';

// DO NOT REMOVE: Seeds the local storage database with data
seedLocalDatabase();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Provider store={store}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Provider>
  </ThemeProvider>,
);
