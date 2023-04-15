import { IconType } from '@icons-pack/react-simple-icons'
import { SplideSlide } from '@splidejs/react-splide';

export default ({ icon: Icon, title }: { icon?: IconType; title: string }) => {
  return (
    <SplideSlide>
      <div className="flex space-x-2 rounded-own-md bg-own-neutral-100 px-5 py-4">
        {Icon && <Icon className="h-7 w-7" />}
        <p className="whitespace-nowrap text-lg font-semibold text-own-neutral-900 dark:text-own-neutral-200">
          {title}
        </p>
      </div>
    </SplideSlide>
  )
}
