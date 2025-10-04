import Link from 'next/link';
import Logo from '@/components/Logo';

export default function NotFound() {
  return (
    <html lang="sk">
      <body style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontFamily: 'sans-serif',
        flexDirection: 'column',
        gap: '1rem',
        paddingTop: '40px'
      }}>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Logo />
        </div>
        <h1 style={{margin: 0}}>404</h1>
        <p style={{margin: 0}}>Stránka neexistuje.</p>
        <Link href="/" style={{color: '#4814A7', textDecoration: 'underline'}}>
            Späť na úvod
        </Link>
      </body>
    </html>
  );
}
