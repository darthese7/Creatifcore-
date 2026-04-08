export const BOOK_CALL_PATH = '/book-call';

export const CALENDLY_URL =
  'https://calendly.com/tosinmayowa/30min?hide_gdpr_banner=1&background_color=1a1a1a&primary_color=ff7800&text_color=ffffff';

export const HOME_NAVIGATION = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonial' },
];

export const BOOKING_NAVIGATION = HOME_NAVIGATION.map((item) => ({
  ...item,
  href: `/${item.href}`,
}));
