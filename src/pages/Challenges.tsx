import { availableChallenges } from "@/data/mockData";
import ChallengeCard from "@/components/ChallengeCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Challenges = () => {
  const easyLChallenges = availableChallenges.filter(c => c.difficulty === 'easy');
  const mediumChallenges = availableChallenges.filter(c => c.difficulty === 'medium');
  const hardChallenges = availableChallenges.filter(c => c.difficulty === 'hard');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Eco Challenges
        </h1>
        <p className="text-muted-foreground">
          Choose your challenge and start making a difference today
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <TabsList className="grid w-full md:w-auto grid-cols-4 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="easy">Easy</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger value="hard">Hard</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableChallenges.map((challenge, index) => (
              <div key={challenge.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ChallengeCard challenge={challenge} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="easy" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {easyLChallenges.map((challenge, index) => (
              <div key={challenge.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ChallengeCard challenge={challenge} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="medium" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediumChallenges.map((challenge, index) => (
              <div key={challenge.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ChallengeCard challenge={challenge} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hard" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardChallenges.map((challenge, index) => (
              <div key={challenge.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ChallengeCard challenge={challenge} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Challenges;
