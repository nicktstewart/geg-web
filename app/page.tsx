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

const HomePage = () => {
  const games = [
    {
      id: 1,
      title: "Battle Against the Acolytes of Science",
      description: "An action packed game set in a world after death.",
      image: "/logos/BAAS.png",
      link: "/games/baas",
    },
    {
      id: 2,
      title: "Wayward Bones",
      description: "Dig your way to an exciting adventure.",
      image: "/logos/wayward_bones.png",
      link: "/games/wayward_bones",
    },
    {
      id: 3,
      title: "Comet Parkour",
      description: "Jump from comet to comet.",
      image: "/logos/comet_parkour.png",
      link: "/games/comet_parkour",
    },
    {
      id: 4,
      title: "Blowoon",
      description: "Blow up a balloon!",
      image: "/logos/blowoon.png",
      link: "/games/blowoon",
    },
  ];

  return (
    <main className="mt-8">
      <section className="mb-8">
        <Card className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <Image
              src={games[0].image}
              alt={games[0].title}
              width={700}
              height={400}
              style={{ borderRadius: "8px", objectFit: "cover" }}
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
                <Link href={games[0].link}>Play Now!</Link>
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.slice(1).map((game) => (
          <Card key={game.id} className="flex flex-col">
            <div className="p-4">
              <Image
                src={game.image}
                alt={game.title}
                width={400}
                height={400}
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
            </div>
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
                  <Link href={game.link}>Play Now!</Link>
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
