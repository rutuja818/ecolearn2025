import { leaderboard } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";

const Leaderboard = () => {
  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-accent" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-700" />;
      default:
        return <Award className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getRankBadgeClass = (rank: number) => {
    switch(rank) {
      case 1:
        return "bg-gradient-to-br from-accent to-accent/70 text-accent-foreground shadow-lg shadow-accent/50";
      case 2:
        return "bg-gradient-to-br from-gray-400 to-gray-500 text-white shadow-lg shadow-gray-400/50";
      case 3:
        return "bg-gradient-to-br from-amber-700 to-amber-800 text-white shadow-lg shadow-amber-700/50";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Leaderboard
        </h1>
        <p className="text-muted-foreground">
          Top eco-warriors from Green Valley High School
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        {leaderboard.slice(0, 3).map((student, index) => {
          const displayOrder = index === 0 ? 0 : index === 1 ? 2 : 1; // Arrange as 2nd, 1st, 3rd
          const actualStudent = index === 0 ? leaderboard[0] : index === 1 ? leaderboard[2] : leaderboard[1];
          const actualIndex = index === 0 ? 0 : index === 1 ? 2 : 1;
          
          return (
            <div
              key={actualStudent.id}
              className={`order-${displayOrder} animate-scale-in`}
              style={{ 
                animationDelay: `${0.2 + actualIndex * 0.1}s`,
                order: displayOrder 
              }}
            >
              <Card className={`p-6 text-center border-2 ${
                actualStudent.rank === 1 ? 'border-accent/50 bg-gradient-to-br from-card to-accent/5' :
                actualStudent.rank === 2 ? 'border-gray-400/50' :
                'border-amber-700/50'
              } relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${getRankBadgeClass(actualStudent.rank)} flex items-center justify-center text-2xl font-bold ${
                    actualStudent.rank === 1 ? 'animate-glow-pulse' : ''
                  }`}>
                    #{actualStudent.rank}
                  </div>
                  
                  <div className="mb-2">
                    {getRankIcon(actualStudent.rank)}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-1">{actualStudent.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{actualStudent.class}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/10">
                      <span className="text-muted-foreground">Points</span>
                      <span className="font-bold text-primary">{actualStudent.ecoPoints.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/10">
                      <span className="text-muted-foreground">Streak</span>
                      <span className="font-bold text-secondary">{actualStudent.streak} days 🔥</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Rest of the leaderboard */}
      <Card className="p-6 border-primary/30 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          Full Rankings
        </h2>
        
        <div className="space-y-3">
          {leaderboard.map((student, index) => (
            <div
              key={student.id}
              className="flex items-center gap-4 p-4 rounded-lg bg-card-elevated hover:bg-muted/50 transition-colors border border-border/50 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${0.6 + index * 0.05}s` }}
            >
              <div className={`w-12 h-12 rounded-full ${getRankBadgeClass(student.rank)} flex items-center justify-center font-bold flex-shrink-0`}>
                #{student.rank}
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold truncate">{student.name}</h4>
                <p className="text-sm text-muted-foreground">{student.class}</p>
              </div>
              
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-lg text-primary">
                  {student.ecoPoints.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  {student.streak} day streak
                </p>
              </div>
              
              <div className="hidden md:flex items-center gap-1 flex-shrink-0">
                {student.badges.slice(0, 3).map(badge => (
                  <span key={badge.id} className="text-xl">{badge.icon}</span>
                ))}
                {student.badges.length > 3 && (
                  <span className="text-xs text-muted-foreground ml-1">
                    +{student.badges.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Leaderboard;

