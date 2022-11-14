import { useState, useEffect } from 'react';

export default function useLocalStorage(baseContacts) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? baseContacts
  );
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
