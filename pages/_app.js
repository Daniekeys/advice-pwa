import { useEffect } from 'react';
import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";





export default function App({ Component, pageProps }) {
   return (
     <ThemeProvider enableSystem={true} attribute="class">
       <Component {...pageProps} />
   
     </ThemeProvider>
   );
}
