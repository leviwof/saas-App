import CompanionCard from '@/components/CompanionCard'
import CompanionLists from '@/components/CompanionLists'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl font-bold underline'>Page</h1>
      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Neura the Companion"
          topic="Neura Networks of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e" />
        <CompanionCard
          id="456"
          name="Luna the Companion"
          topic="The Human Body"
          subject="science"
          duration={30}
          color="#99927d" />
        <CompanionCard
          id="789"
          name="Astra the Companion"
          topic="The Solar System"
          subject="science"
          duration={45}
          color="#e9ba8c" />
      </section>

      <section className='home-section'>
        <CompanionLists
          title="Recently completed session"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>

    </main>
  )
}

export default Page