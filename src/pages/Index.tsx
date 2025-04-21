
import Header from "@/components/Header";
import JokeCard from "@/components/JokeCard";
import { jokes } from "@/data/jokes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <section className="mb-10">
          <h1 className="text-4xl font-bold mb-6 text-center">Daily Laughs</h1>
          <p className="text-lg text-center text-muted-foreground mb-8">
            The best collection of jokes to brighten your day!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jokes.map((joke) => (
            <JokeCard key={joke.id} joke={joke} />
          ))}
        </section>
      </main>
      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2023 Joke Time. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
