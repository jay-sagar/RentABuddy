import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt=""
          src="/friends.jpg"
          width={800}
          height={800}
          className="absolute inset-0 h-full w-full object-cover rounded-3xl"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Rent A Buddy</h2>

        <p className="mt-4 text-gray-600">
          Welcome to RentABuddy, your ultimate destination for finding the perfect companion for your next adventure or movie night in. With RentABuddy, you're never alone in creating memorable experiences.
        </p>
        <p className="mt-4 text-gray-600">
          Whether you're craving the excitement of exploring new destinations or simply seeking the comfort of shared laughter over a movie, RentABuddy offers a diverse selection of trusted companions ready to join you on your journey.
          </p>
        <p className="mt-4 text-gray-600">
          Browse our extensive roster of friendly buddies, each handpicked to ensure compatibility and reliability. From avid travelers to movie enthusiasts, our companions bring unique perspectives and vibrant personalities to every encounter.
          </p>
        <p className="mt-4 text-gray-600">
With RentABuddy, planning your next outing is effortless. Simply choose your desired companion, select your activity, and book with confidence knowing you're in good company. Whether it's a weekend getaway or a cozy night in, RentABuddy is your go-to destination for companionship on your terms. 
        </p>
          <p className="mt-4 text-gray-600">
          Join our community today and discover the joy of shared experiences with RentABuddy. Your perfect companion is just a booking away.
          </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
