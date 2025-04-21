
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { jokes } from "@/data/jokes";
import { Laugh, RefreshCcw } from "lucide-react";

const RandomJoke = () => {
  const [joke, setJoke] = useState<{ setup: string; punchline: string } | null>(null);
  const [showPunchline, setShowPunchline] = useState(false);

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
    setShowPunchline(false);
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Random Joke</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get a fresh random joke every time. Click the button to reveal the punchline!
          </p>
        </div>

        {joke && (
          <div className="max-w-xl mx-auto mb-8">
            <Card className="shadow-lg border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laugh className="h-6 w-6 text-primary" />
                  Random Joke
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl mb-6">{joke.setup}</p>
                {showPunchline ? (
                  <p className="text-xl font-medium text-primary animate-fade-in">
                    {joke.punchline}
                  </p>
                ) : (
                  <div className="h-8" />
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant={showPunchline ? "outline" : "default"}
                  onClick={() => setShowPunchline(!showPunchline)}
                >
                  {showPunchline ? "Hide Punchline" : "Reveal Punchline"}
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={getRandomJoke}
                  className="hover-scale"
                >
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  New Joke
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Joke Time. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RandomJoke;
