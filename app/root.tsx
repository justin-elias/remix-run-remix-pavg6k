import React from 'react';
import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import { cssBundleHref } from '@remix-run/css-bundle';
import './css/common.css';

export const links = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
