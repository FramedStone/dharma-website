'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import heroImage from '../../app/public/pictures/hbuddha_u.jpg';
import { useCallback } from 'react';
import { delay, motion } from 'framer-motion'

export default function Hero() {
  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <Image
        src={heroImage}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="container z-10 text-left text-white space-y-6 max-auto px-4">
        <motion.h1 
          className="text-4xl font-bold sm:text-5xl md:text-6xl"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
        >
          终身学习 生生修行
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl" style={{ textAlign: 'left' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2}}
        >
          就读佛教学院不一定要出家，<br/>
          而是从修学佛法的过程中，<br/>
          去体悟人生的真义，<br/>
          以佛法来庄严自己，<br/>
          进而为社会大众服务。<br/>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="mt-4" onClick={scrollToAbout}>查看课程时间表</Button>
        </motion.div>
      </div>
    </section>
  )
}