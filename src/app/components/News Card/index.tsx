import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
  title: string
  date: string
  description: string
  imageSrc: string
  link: string
}

export default function NewsCard({ title, date, description, imageSrc, link }: NewsCardProps) {
  return (
    <Link href={link}>
      <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-[160px]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-xs text-gray-500">{date}</p>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </Link>
  )
}
