'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function NFTCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-very-dark-blue-bg p-4">
      <div className="w-full max-w-sm bg-neutral-very-dark-blue-card p-6 rounded-xl shadow-xl">
      <div 
          className="relative aspect-square w-full mb-4 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/image-equilibrium.jpg"
            alt="Equilibrium NFT"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-primary-cyan bg-opacity-50 flex items-center justify-center rounded-lg">
              <Image
                src="/icon-view.svg"
                alt="View"
                width={48}
                height={48}
              />
            </div>
          )}
        </div>
        <h2 className="text-2xl font-semibold text-white  mb-2">Equilibrium #3429</h2>
        <p className="text-primary-soft-blue mb-4">Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-primary-cyan font-semibold flex items-center gap-2"><Image src="/icon-ethereum.svg" width={16} height={16} alt='clock-icon'/> 0.041 ETH</span>
          <span className="text-primary-soft-blue flex items-center gap-2"><Image src="/icon-clock.svg" width={16} height={16} alt='clock-icon'/> 3 days left</span>
        </div>
        <div className="border-t border-neutral-very-dark-blue-line pt-4">
          <div className="flex items-center">
            <Image
              src="/image-avatar.png"
              alt="Creator"
              width={32}
              height={32}
              className="rounded-full border border-white mr-3"
            />
            <p className="text-primary-soft-blue">
              Creation of <span className="text-white">Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}