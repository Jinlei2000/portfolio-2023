export default () => {
  return (
    <footer className="bg-own-neutral-50 px-4 dark:bg-own-neutral-800 md:px-6">
      <div className="mx-auto max-w-screen-xl py-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="md:text-1xl transform px-1 text-center text-lg font-black text-own-neutral-600 dark:text-own-neutral-400 lg:text-3xl">
            LJ
          </p>
          <p className=" text-center text-sm font-medium text-own-neutral-700 dark:text-own-neutral-300 md:text-right md:text-base ">
            &copy; {new Date().getFullYear()} Lei Jin - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
