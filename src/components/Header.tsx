import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, User, Trophy, BookOpen, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: "/", label: "Home", icon: Leaf },
    { path: "/profile", label: "Profile", icon: User },
    { path: "/challenges", label: "Challenges", icon: Trophy },
    { path: "/learn", label: "Learn", icon: BookOpen },
  ];

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.path} to={item.path}>
            <Button
              variant={isActive(item.path) ? "default" : "ghost"}
              className={`${mobile ? "w-full justify-start" : ""} ${
                isActive(item.path) ? "shadow-eco" : ""
              }`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary group-hover:scale-110 transition-transform">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EcoLearn
            </span>
            <span className="text-xs text-muted-foreground">One Challenge at a Time</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="flex flex-col space-y-2 mt-8">
              <NavLinks mobile />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
