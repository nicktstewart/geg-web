import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomePage = () => {
  const games = [
    {
      id: 1,
      title: "Battle Against the Acolytes of Science",
      description: "An action packed game set in a world after death.",
      image: "/logos/BAAS_VerticalCapsule.webp",
      link: "/games/baas",
    },
    {
      id: 2,
      title: "Comet Parkour",
      description: "Jump from comet to comet",
      image: "/logos/comet_parkour.png",
      link: "/games/comet_parkour",
    },
    // Add more games...
  ];

  return (
    <div className="container mx-auto">
      <Header />
      <main className="mt-8">
        <section className="mb-8">
          <Card className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <Image
                src={games[0].image}
                alt={games[0].title}
                width={400}
                height={400}
              />
            </div>
            <CardContent className="md:w-1/2 p-4">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {games[0].title}
                </CardTitle>
                <CardDescription className="mt-2">
                  {games[0].description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="mt-4">
                  <Link href={games[0].link}>Learn More</Link>
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {games.slice(1).map((game) => (
            <Card key={game.id} className="flex flex-col">
              <Image
                src={game.image}
                alt={game.title}
                width={400}
                height={400}
              />
              <CardContent className="p-4">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild className="mt-4">
                    <Link href={game.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
