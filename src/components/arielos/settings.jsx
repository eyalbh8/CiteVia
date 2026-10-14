'use client';

import { createContext, useContext } from 'react';

export const HomeSettings = createContext({
  email: 'eyal@citevia.com',
  bookingUrl: '/private-ai-visibility-assessment',
});
export const useHomeSettings = () => useContext(HomeSettings);
