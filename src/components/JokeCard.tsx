
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, ThumbsUp } from "lucide-react";
import { useState } from "react";

interface JokeCardProps {
  joke: {
    id: number;
    setup: string;
    punchline: string;
    category: string;
  };
}

const JokeCard = ({ joke }: JokeCardProps) => {
  const [showPunchline, setShowPunchline] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{joke.category}</span>
          <span className="text-sm text-muted-foreground">#{joke.id}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-lg">{joke.setup}</p>
        {showPunchline ? (
          <p className="text-lg font-medium animate-fade-in">{joke.punchline}</p>
        ) : (
          <Button 
            onClick={() => setShowPunchline(true)}
            variant="outline"
            className="w-full"
          >
            Reveal Punchline
          </Button>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setLiked(!liked)}
          className={liked ? "text-blue-500" : ""}
        >
          <ThumbsUp className="w-4 h-4 mr-2" />
          {liked ? "Liked" : "Like"}
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JokeCard;
