'use client';

import { createContext, useContext } from 'react';
import { defaultBookingUrl } from '@/lib/booking';

export const HomeSettings = createContext({
  email: 'info@citevia.io',
  bookingUrl: defaultBookingUrl,
  directDelivery: false,
});
export const useHomeSettings = () => useContext(HomeSettings);
