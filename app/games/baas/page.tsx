import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battle Against the Acolytes of Science Demo | Gurii Eco Games",
  description:
    "Play the Battle Against the Acolytes of Science Demo - a unique game from Gurii Eco Games.",
  openGraph: {
    title: "Battle Against the Acolytes of Science Demo | Gurii Eco Games",
    description:
      "Play the Battle Against the Acolytes of Science Demo - a unique game from Gurii Eco Games.",
    url: "https://www.guriieco.com/games/baas",
    siteName: "Gurii Eco Games",
    images: [
      {
        url: "https://www.guriieco.com/logos/BAAS.png",
        width: 1200,
        height: 630,
        alt: "Battle Against the Acolytes of Science",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Battle Against the Acolytes of Science Demo | Gurii Eco Games",
    description:
      "Play the Battle Against the Acolytes of Science Demo - a unique game from Gurii Eco Games.",
    site: "@GuriiEco",
    creator: "@GuriiEco",
    images: "https://www.guriieco.com/logos/BAAS.png",
  },
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Battle Against the Acolytes of Science Demo
      </h1>
      <div className="aspect-w-16 aspect-h-9 h-screen">
        <iframe
          src="https://guriiecogames.github.io/geg-builds/BAASdemo/"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
