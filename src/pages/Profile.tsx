import { currentStudent } from "@/data/mockData";
import ProgressRing from "@/components/ProgressRing";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Flame, Target, Award } from "lucide-react";

const Profile = () => {
  const targetPoints = 20000;
  const progress = (currentStudent.ecoPoints / targetPoints) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <Card className="p-6 border-primary/30 bg-gradient-to-br from-card to-card-elevated animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-primary-foreground mb-4 shadow-lg shadow-primary/50">
                {currentStudent.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h2 className="text-2xl font-bold mb-1">{currentStudent.name}</h2>
              <p className="text-sm text-muted-foreground mb-4">{currentStudent.class}</p>
              
              <div className="w-full space-y-3 text-left">
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-xs text-muted-foreground">College</p>
                  <p className="font-medium text-sm">{currentStudent.college}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium text-sm break-all">{currentStudent.email}</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-xs text-muted-foreground">Mentor</p>
                  <p className="font-medium text-sm text-primary">{currentStudent.mentor}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Center Column - Main Progress */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 border-primary/30 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold mb-4 text-center">Eco Impact Progress</h3>
            <div className="flex justify-center mb-6">
              <ProgressRing 
                progress={progress}
                currentPoints={currentStudent.ecoPoints}
                targetPoints={targetPoints}
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Next Milestone</p>
              <p className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {(targetPoints - currentStudent.ecoPoints).toLocaleString()} points to go
              </p>
            </div>
          </Card>

          <Card className="p-6 border-primary/30 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-4">Tree Growth Chart 🌳</h3>
            <div className="relative h-48 bg-gradient-to-b from-muted/30 to-muted/50 rounded-lg overflow-hidden">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32">
                <div className="relative">
                  {/* Tree trunk */}
                  <div className="w-8 h-20 bg-gradient-to-b from-amber-800 to-amber-900 mx-auto rounded-t-lg animate-tree-grow" />
                  {/* Tree leaves based on streak */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full animate-scale-in" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-x-6 w-16 h-16 bg-gradient-to-br from-primary/80 to-secondary/80 rounded-full animate-scale-in" style={{ animationDelay: "0.7s" }} />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 translate-x-6 w-16 h-16 bg-gradient-to-br from-primary/80 to-secondary/80 rounded-full animate-scale-in" style={{ animationDelay: "0.9s" }} />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-sm font-medium bg-card/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/30">
                {currentStudent.streak} day streak 🔥
              </div>
            </div>
          </Card>

          <Card className="p-6 border-primary/30 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-bold mb-4">Challenge Breakdown</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                <span className="text-sm font-medium">Easy Challenges</span>
                <Badge className="bg-primary/20 text-primary border-primary/50">
                  {currentStudent.challengesCompleted.easy}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/10">
                <span className="text-sm font-medium">Medium Challenges</span>
                <Badge className="bg-secondary/20 text-secondary border-secondary/50">
                  {currentStudent.challengesCompleted.medium}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent/10">
                <span className="text-sm font-medium">Hard Challenges</span>
                <Badge className="bg-accent/20 text-accent border-accent/50">
                  {currentStudent.challengesCompleted.hard}
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Quick Stats & Achievements */}
        <div className="lg:col-span-1 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 border-primary/30 text-center animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <Trophy className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-2xl font-bold">{currentStudent.ecoPoints.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Total Points</p>
            </Card>
            <Card className="p-4 border-primary/30 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">
                {currentStudent.challengesCompleted.easy + 
                 currentStudent.challengesCompleted.medium + 
                 currentStudent.challengesCompleted.hard}
              </p>
              <p className="text-xs text-muted-foreground">Completed</p>
            </Card>
            <Card className="p-4 border-primary/30 text-center animate-fade-in" style={{ animationDelay: "0.25s" }}>
              <Award className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <p className="text-2xl font-bold">#{currentStudent.rank}</p>
              <p className="text-xs text-muted-foreground">Rank</p>
            </Card>
            <Card className="p-4 border-primary/30 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Flame className="h-8 w-8 mx-auto mb-2 text-orange-500" />
              <p className="text-2xl font-bold">{currentStudent.streak}</p>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </Card>
          </div>

          <Card className="p-6 border-accent/30 bg-gradient-to-br from-card to-accent/5 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Achievements
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {currentStudent.badges.map((badge, index) => (
                <div
                  key={badge.id}
                  className="group relative p-4 rounded-lg bg-card border border-accent/30 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {badge.icon}
                  </div>
                  <p className="text-xs font-semibold line-clamp-2">{badge.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(badge.earnedAt).toLocaleDateString()}
                  </p>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-accent/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
                    <p className="text-xs">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
