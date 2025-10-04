export default function NotFound() {
  return (
    <html lang="sk">
      <body style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h1 style={{margin: 0}}>404</h1>
        <p style={{margin: 0}}>Stránka neexistuje.</p>
        <a href="/sk" style={{color: '#4814A7', textDecoration: 'underline'}}>Späť na úvod</a>
      </body>
    </html>
  );
}

