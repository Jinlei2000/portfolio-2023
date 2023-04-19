export default () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className=" overflow-hidden rounded-lg shadow-lg">
          <img
            src="/img/oncolor-1.png"
            alt="Placeholder"
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-own-neutral-900 dark:text-own-neutral-200 md:text-2xl xl:text-3xl">
          Device Programming
        </h3>
        <p className="text-md text-own-neutral-700 dark:text-own-neutral-300 md:text-lg xl:text-xl">
          Anime/Manga App
        </p>
      </div>
    </>
  )
}
