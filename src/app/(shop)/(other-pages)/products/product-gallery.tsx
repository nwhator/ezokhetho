'use client'

import { Dialog } from '@headlessui/react'
import { Cancel01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

interface TImage {
  src: string
  alt?: string
  width?: number
  height?: number
}

const AUTOPLAY_MS = 3000

/**
 * A client component that renders product media as a proper carousel:
 * auto-advances every 3 seconds, supports manual prev/next + dot navigation,
 * and opens a lightbox when an image is clicked.
 */
export function ProductGallery({ media, className }: { media: TImage[]; className?: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [snapCount, setSnapCount] = useState(0)
  const [hovering, setHovering] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [interactionTick, setInteractionTick] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    setSnapCount(emblaApi.scrollSnapList().length)
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi || hovering || lightboxOpen || snapCount <= 1) return
    const id = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [emblaApi, hovering, lightboxOpen, snapCount, interactionTick])

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
      setInteractionTick((t) => t + 1)
    },
    [emblaApi]
  )

  const scrollBy = useCallback(
    (direction: 1 | -1) => {
      if (direction === 1) emblaApi?.scrollNext()
      else emblaApi?.scrollPrev()
      setInteractionTick((t) => t + 1)
    },
    [emblaApi]
  )

  if (!media.length) {
    return null
  }

  return (
    <>
      <div
        className={clsx('relative', className)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Main carousel */}
        <div className="embla overflow-hidden bg-zinc-100" ref={emblaRef}>
          <div className="embla__container">
            {media.map((image, index) => (
              <div className="embla__slide basis-full" key={index + '--carousel'}>
                <button
                  type="button"
                  onClick={() => {
                    setLightboxIndex(index)
                    setLightboxOpen(true)
                  }}
                  className="group relative block aspect-3/4 w-full cursor-zoom-in"
                  aria-label={`View ${image.alt || 'product image'} in full size`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt || 'Product image'}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    fill
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    priority={index === 0}
                  />
                  {/* Hover hint */}
                  <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-900 opacity-0 shadow-md backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                    <span className="sr-only">View full size</span>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next arrows */}
        {snapCount > 1 && (
          <>
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous image"
              className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md backdrop-blur transition-all hover:bg-white hover:text-[#0033A0]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next image"
              className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md backdrop-blur transition-all hover:bg-white hover:text-[#0033A0]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Counter */}
        {snapCount > 1 && (
          <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium tracking-[0.15em] text-white backdrop-blur">
            {String(selectedIndex + 1).padStart(2, '0')} / {String(snapCount).padStart(2, '0')}
          </span>
        )}

        {/* Dots / thumbnails */}
        {snapCount > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {media.map((image, index) => (
              <button
                key={index + '--dot'}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to image ${index + 1}`}
                className={clsx(
                  'h-1.5 rounded-full transition-all duration-300',
                  index === selectedIndex ? 'w-8 bg-[#0033A0]' : 'w-1.5 bg-zinc-300 hover:bg-zinc-400'
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        className="fixed inset-0 z-[120]"
      >
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={28} color="currentColor" strokeWidth={1} />
          </button>

          <div className="flex h-full max-h-full w-full max-w-5xl flex-col items-center justify-center gap-4">
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
              <Image
                src={media[lightboxIndex]?.src}
                alt={media[lightboxIndex]?.alt || 'Product image'}
                sizes="(max-width: 1024px) 90vw, 70vw"
                width={media[lightboxIndex]?.width}
                height={media[lightboxIndex]?.height}
                className="max-h-full w-auto max-w-full object-contain"
              />
            </div>

            {media.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((i) => (i - 1 + media.length) % media.length)
                  }
                  aria-label="Previous image"
                  className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIndex((i) => (i + 1) % media.length)}
                  aria-label="Next image"
                  className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div className="flex items-center gap-3">
              {media.length > 1 &&
                media.map((image, index) => (
                  <button
                    key={index + '--lightbox-dot'}
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={clsx(
                      'h-1.5 rounded-full transition-all duration-300',
                      index === lightboxIndex ? 'w-8 bg-[#FF6B00]' : 'w-1.5 bg-white/30 hover:bg-white/50'
                    )}
                  />
                ))}
              <span className="ml-2 text-xs font-medium tracking-[0.2em] text-white/60">
                {String(lightboxIndex + 1).padStart(2, '0')} / {String(media.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}
