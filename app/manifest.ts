import {MetadataRoute} from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ojala Solutions',
    short_name: 'Ojala Solutions',
    description: 'Professional software development services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#A8DF8E',
    icons: [
      {
        src: '/logo_small.webp',
        sizes: 'any',
        type: 'image/webp'
      }
    ]
  };
}