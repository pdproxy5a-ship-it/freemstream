import './globals.css'

export const metadata = {
  title: 'RetroTunes - Free Music Player',
  description: 'Free legal music streaming with 90s style',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}