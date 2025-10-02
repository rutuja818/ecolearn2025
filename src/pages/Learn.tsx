import { learningTopics } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, BookOpen, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const Learn = () => {
  const classes = Array.from(new Set(learningTopics.map(t => t.class)));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Environmental Learning
        </h1>
        <p className="text-muted-foreground">
          Interactive lessons, quizzes, and games for Class 4-12
        </p>
      </div>

      <div className="space-y-8">
        {classes.map((className, classIndex) => {
          const classTopics = learningTopics.filter(t => t.class === className);
          
          return (
            <div key={className} className="animate-fade-in" style={{ animationDelay: `${classIndex * 0.1}s` }}>
              <h2 className="text-2xl font-bold mb-4 text-primary">{className}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classTopics.map((topic, index) => (
                  <Card 
                    key={topic.id} 
                    className="p-6 border-primary/30 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 animate-scale-in group"
                    style={{ animationDelay: `${(classIndex * 0.1) + (index * 0.05)}s` }}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {topic.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Link to={`/learn/${topic.id}/video`}>
                        <Button variant="outline" className="w-full justify-start group-hover:border-primary/50">
                          <PlayCircle className="mr-2 h-4 w-4 text-primary" />
                          Watch Video
                        </Button>
                      </Link>
                      <Link to={`/learn/${topic.id}/quiz`}>
                        <Button variant="outline" className="w-full justify-start group-hover:border-secondary/50">
                          <BookOpen className="mr-2 h-4 w-4 text-secondary" />
                          Take Quiz (5 Questions)
                        </Button>
                      </Link>
                      <Link to={`/learn/${topic.id}/game`}>
                        <Button variant="outline" className="w-full justify-start group-hover:border-accent/50">
                          <Gamepad2 className="mr-2 h-4 w-4 text-accent" />
                          Play Game: {topic.game.name}
                        </Button>
                      </Link>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground">
                        Game Steps: {topic.game.steps}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Learn;
