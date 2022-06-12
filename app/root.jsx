import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStyles from  '~/styles/global.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container } from "react-bootstrap";


export const meta = () => ({
  description: "A cool blog built with Remix",
  keywords: "remix, react, javascript",
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  {rel: 'stylesheet', href: bootstrap},
  {rel: 'stylesheet', href: globalStyles}
]

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({children,title}) {
  return (
    <html lang="en">
      <head>
        <title>{title?title:'Remix Blog'}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <ScrollRestoration />
        <Scripts />
        {children}
        {console.log(process.env.NODE_ENV)}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null} 
      </body>
    </html>
  );
}


function Layout({children}) {
  return (
  <Container>
  <nav className="navbar">
  <Col md="1" className="border"><Link to='/' className='logo'>
      Remix
    </Link></Col>
    <Col md="1" className="border"><Link to='/posts' className='logo'>
      Posts
    </Link></Col>
    <Col md="1" className="border"><Link to='/catalog' className='logo'>
      Catalog
    </Link></Col>
  </nav>
  <div className="container">
    {children}
  </div>
  </Container>
  );
}
