import { LocaleProvider } from '@arcblock/ux/lib/Locale/context';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { SessionProvider } from './contexts/session';
import ProfilePage from './pages/profile-page';
import './app.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <SessionProvider>
      <LocaleProvider translations={{}}>
        <Router basename={basename}>
          <App />
        </Router>
      </LocaleProvider>
    </SessionProvider>
  );
}
