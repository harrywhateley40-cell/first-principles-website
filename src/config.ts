// Booking integration point. Set PUBLIC_BOOKING_URL in Vercel to the live
// Google Calendar appointment link. Until set, CTAs link to the in-page #book
// section so the site still has a clear local destination.
export const BOOKING_URL = import.meta.env.PUBLIC_BOOKING_URL || "#book";

export const isExternalBooking = BOOKING_URL.startsWith("http");

// Set PUBLIC_SITE_URL in Vercel if the production domain changes. Keeping this
// central makes canonical links, sitemap URLs and schema easier to maintain.
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://firstprinciplestutoring.com";

export const SITE_NAME = "First Principles";
export const TUTOR_NAME = "Harry Whateley";
