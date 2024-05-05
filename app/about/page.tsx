import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>About Gurii Eco Games</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            Gurii Eco Games is an indie game development group comprised mainly
            of talented Japanese developers and artists. We are passionate about
            creating unique and engaging gaming experiences.
          </p>
          <Separator className="my-6" />
          <h2 className="text-xl font-semibold mb-4">Our Team</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/guri.png" alt="Guri" />
                <AvatarFallback>Guri</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Guri</h3>
                <p className="text-sm text-gray-500">Visual Artist</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/nick.png" alt="Nick" />
                <AvatarFallback>Nick</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Nick</h3>
                <p className="text-sm text-gray-500">Developer</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/rei.png" alt="rei" />
                <AvatarFallback>Rei</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Rei</h3>
                <p className="text-sm text-gray-500">Sound Design</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/mori.png" alt="Mori" />
                <AvatarFallback>Mori</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Mori</h3>
                <p className="text-sm text-gray-500">Tester</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
