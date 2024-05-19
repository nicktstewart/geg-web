import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
