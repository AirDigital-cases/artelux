import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <motion.section initial={{opacity:0}} whileInView={{opacity:1}} className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="bg-gradient-to-b from-transparent to-black/20 glass p-8 rounded-md">
          <h3 className="text-2xl font-bold gold-text">Sobre a Artelux</h3>
          <p className="mt-4 text-gray-300 max-w-3xl">A Artelux é especializada na criação, fabricação e instalação de letreiros, fachadas, pergolados e coberturas, com foco em qualidade, segurança, acabamento profissional e projetos sob medida. Atuamos com equipes treinadas para trabalhos em altura e processos que priorizam durabilidade e estética.</p>
        </div>
      </div>
    </motion.section>
  )
}
