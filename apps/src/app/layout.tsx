import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
// or `v1X-appRouter` if you are using Next.js v1X

export default function RootLayout(props: any) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          {props.children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
