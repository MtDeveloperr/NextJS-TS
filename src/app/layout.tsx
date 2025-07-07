// app/layout.tsx
import './globals.css';
import { Roboto } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import EmotionRegistry from './EmotionRegistry';
import theme from '../theme';


const roboto = Roboto({
  weight: ['300','400','500','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <EmotionRegistry>
          <AppRouterCacheProvider options={{ key: 'css', enableCssLayer: true }}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
                
              </ThemeProvider>
            </StyledEngineProvider>
          </AppRouterCacheProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
