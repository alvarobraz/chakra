import type { AppProps } from 'next/app'
import { ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage';
import { QueryClient, QueryClientProvider } from 'react-query';
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  makeServer();
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >

    <ChakraProvider resetCSS theme={theme}>
        <SidebarDrawerProvider>
             <Component {...pageProps} />
        </SidebarDrawerProvider>
    </ChakraProvider>

    <ReactQueryDevtools />
    </QueryClientProvider>
    )
    
}

export default MyApp
