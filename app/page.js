import App from "./components/App";
import { ReactLenis } from "lenis/react"; // Import ReactLenis and useLenis
import "lenis/dist/lenis.css"; // Import Lenis CSS

export const metadata = {
  title: "The Shoe Company",
  description: "The Shoe Company - Custom Shoes for You",
  openGraph: {
    title: "The Shoe Company",
    description: "The Shoe Company - Custom Shoes for You",
    siteName: "My Shoe Company",
    url: "https://theshoecompanynew.netlify.app",
    images: [
      {
        url: 'https://theshoecompanynew.netlify.app/images/home.png', 
        width: 1200,
        height: 630,
        alt: 'A beautiful look of my website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "The Shoe Company",
    images: [
      {
        url: 'https://theshoecompanynew.netlify.app/images/home.png', 
        width: 1200,
        height: 630,
        alt: 'A beautiful illustration of my website',
      },
    ],
    description: "The Shoe Company - Custom Shoes for You",
  }
}
export default function Home() {
  return (
    <div className="bg-black">
      <ReactLenis
        root
        options={{ lerp: 0.05, duration: 1.2, smoothTouch: true }}
      >
        <App />
      </ReactLenis>
    </div>
  );
}
