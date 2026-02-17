
'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe, Rocket, Shield, Zap } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, className }: { icon: any, delay: number, className: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0.4, 0.8, 0.4],
      y: [-20, 20, -20],
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hidden lg:block ${className}`}
  >
    <Icon className="w-6 h-6 text-accent" />
  </motion.div>
);

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section className="w-full min-h-[90vh] relative overflow-hidden bg-[#0360AA] flex items-center">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[140px] rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/20 blur-[140px] rounded-full opacity-60 animate-pulse"></div>

        {/* Animated Mesh Grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Floating Decorative Icons */}
      <FloatingIcon icon={Code} delay={0} className="top-24 left-[10%]" />
      <FloatingIcon icon={Cpu} delay={1} className="bottom-24 left-[15%]" />
      <FloatingIcon icon={Globe} delay={2} className="top-32 right-[15%]" />
      <FloatingIcon icon={Shield} delay={3} className="bottom-32 right-[10%]" />
      <FloatingIcon icon={Zap} delay={4} className="top-1/2 left-[5%]" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-2 items-center"
        >
          <div className="flex flex-col space-y-8 text-center lg:text-left pt-12 lg:pt-0">
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 px-3 py-1 border-accent/30 text-accent bg-accent/5 rounded-full mb-4 animate-bounce"
              >
                <Rocket className="w-3 h-3" />
                <span className="text-[10px] uppercase font-bold tracking-widest">Digital Transformation Leaders</span>
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Transform Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent bg-[length:600%_auto] animate-gradient">
                  Vision into Reality
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-[600px] text-gray-400 text-lg md:text-xl leading-relaxed mx-auto lg:mx-0"
            >
              At <span className="text-white font-semibold">yellowbeamtech</span>, we architect high-performance digital ecosystems. From custom software to viral mobile apps, we build the future of your business.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl group transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(254,76,28,0.3)]">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-white/10 hover:bg-white/5 rounded-2xl transition-all duration-300">
                <Link href="/projects">View Projects</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-8 pt-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-white text-2xl font-bold">500+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Projects Delivered</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-white text-2xl font-bold">150+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Global Clients</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-white text-2xl font-bold">99%</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Satisfaction Rate</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
              <Image
                src="/main.jpeg"
                width={950}
                height={650}
                alt="yellowbeamtech Innovation Hub"
                className="w-full object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023055] via-transparent to-transparent opacity-60"></div>

              {/* Glassmorphic Info Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Powered by Innovation</h4>
                    <p className="text-gray-300 text-sm">Harnessing AI & Advanced Tech for your success.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
