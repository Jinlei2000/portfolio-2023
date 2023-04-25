import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import { useReducedMotion } from 'framer-motion'

export default () => {
  // use reduced motion
  const shouldReduceMotion = useReducedMotion()
  return (
    <>
      <main className="grid h-screen place-items-center bg-white px-6 dark:bg-own-neutral-900 lg:px-8">
        <div className="text-center">
          <Player
            autoplay={shouldReduceMotion ? false : true}
            loop
            src="https://lottie.host/3b89f617-9889-4a75-ba32-2652a1118a04/VkaIk6A8qe.json"
            className=""
          />
          <div className="-translate-y-10 md:-translate-y-16">
            <h1 className="text-3xl font-bold tracking-tight text-own-neutral-900 dark:text-own-neutral-200 md:text-5xl xl:text-6xl">
              Page not found
            </h1>
            <p className="text-md mx-auto mt-2 max-w-xs font-medium text-own-neutral-500 dark:text-own-neutral-400 md:mt-6 md:max-w-none md:text-lg xl:text-xl">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <Link
                to="/"
                className="bg-own-alpha mx-3 rounded-own bg-own-primary-500 px-3 py-3 font-medium leading-none text-own-neutral-50 hover:bg-own-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-own-primary-400 dark:bg-own-primary-450 dark:text-own-neutral-50 dark:hover:bg-own-primary-500 dark:focus-visible:ring-own-primary-500"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
