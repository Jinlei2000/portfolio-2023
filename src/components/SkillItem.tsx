import { SplideSlide } from '@splidejs/react-splide'
import { IconType } from 'react-icons/lib'

export default ({
  icon: Icon,
  title,
  color,
}: {
  icon?: IconType
  title: string
  color: string
}) => {
  return (
    <SplideSlide>
      <div className="mr-6 flex h-full items-center space-x-2 rounded-own-md bg-own-neutral-100 px-5 py-4 dark:bg-own-neutral-700 lg:mr-7 lg:space-x-3 lg:rounded-3xl lg:px-6 lg:py-5 xl:mr-8 xl:space-x-4 xl:rounded-own-lg xl:px-7 xl:py-6">
        {Icon && (
          <Icon
            className={`h-7 w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9`}
            style={{ color: color }}
          />
        )}
        <p className="whitespace-nowrap text-lg font-semibold text-own-neutral-700 dark:text-own-neutral-300 lg:text-xl xl:text-2xl">
          {title}
        </p>
      </div>
    </SplideSlide>
  )
}
