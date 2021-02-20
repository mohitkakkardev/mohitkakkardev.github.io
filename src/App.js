import React, { useState, useEffect } from 'react';
import Pages from './pages';
import { trackPromise } from 'react-promise-tracker';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below
    trackPromise(
    fetch('https://gitconnected.com/v1/portfolio/mohitkakkardev')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      }));
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;