import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/invoicemonk-logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Invoicemonk" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Pricing
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
