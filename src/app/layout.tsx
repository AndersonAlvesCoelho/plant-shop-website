import './globals.css'

export const metadata = {
  title: 'Plant Shop Website',
  description: 'E-Commerce Plant Shop Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
