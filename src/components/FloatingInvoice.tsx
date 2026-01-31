import { motion } from "framer-motion";
import { Check, FileText, DollarSign, Calendar } from "lucide-react";

const FloatingInvoice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: -10, rotateX: 5 }}
      animate={{ opacity: 1, y: 0, rotateY: -5, rotateX: 2 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative"
    >
      {/* Main Invoice Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="bg-card border border-border rounded-2xl p-6 hero-card-shadow w-[340px] md:w-[400px]"
      >
        {/* Invoice Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Invoice #1042</p>
              <p className="text-xs text-muted-foreground">Acme Corporation</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium flex items-center gap-1">
            <Check className="w-3 h-3" />
            Paid
          </div>
        </div>

        {/* Invoice Items */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-sm text-muted-foreground">Web Design Services</span>
            <span className="text-sm font-medium text-foreground">$2,400</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-sm text-muted-foreground">Development</span>
            <span className="text-sm font-medium text-foreground">$4,800</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-muted-foreground">Consultation</span>
            <span className="text-sm font-medium text-foreground">$800</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center pt-4 border-t-2 border-primary/20">
          <span className="font-semibold text-foreground">Total</span>
          <span className="text-xl font-bold text-gradient">$8,000</span>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Revenue</p>
            <p className="text-sm font-bold text-foreground">+23%</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-3 shadow-lg"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <Calendar className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Due in</p>
            <p className="text-sm font-bold text-foreground">3 days</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Glow Effect Behind Card */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-primary rounded-full scale-75 translate-y-10" />
    </motion.div>
  );
};

export default FloatingInvoice;
