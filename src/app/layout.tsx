import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Solo Tools',
  description: 'Virtual board game tools for solo play',
}
const kofi = `<script>
kofiWidgetOverlay.draw('hecedu', {
  'type': 'floating-chat',
  'floating-chat.donateButton.text': 'Support me',
  'floating-chat.donateButton.background-color': '#323842',
  'floating-chat.donateButton.text-color': '#fff'
});
</script>`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='h-full' lang="en">
    
      <body className={`${inter.className} relative h-full`}>{children}</body>
      
    </html>
  )
}
