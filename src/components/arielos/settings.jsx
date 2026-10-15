'use client';

import { createContext, useContext } from 'react';
import { defaultBookingUrl } from '@/lib/booking';

export const HomeSettings = createContext({
  email: 'eyal@citevia.com',
  bookingUrl: defaultBookingUrl,
  directDelivery: false,
});
export const useHomeSettings = () => useContext(HomeSettings);
