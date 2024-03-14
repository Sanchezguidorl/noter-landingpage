import Link from 'next/link'
import Image from 'next/image'
import BgStartImage from "/public/bg-start-section.webp";
function Footer() {
  return (
    <div className="relative arise-animation overflow-hidden">
    <Image
      quality={70}
      placeholder="blur"
      src={BgStartImage}
      alt="Imagen de fondo de mesa de estudio con artículos de estudio"
      className=" saturate-50"
      sizes="(max-width: 600px) 600px,(min-width: 600px) 900px,(min-width: 900px) 1920px"
    />
    <div className="absolute top-0 text-center banner w-1/2 h-full left-1/2 flex flex-col justify-center items-center  select-none">
      <p className="text-xl sm:text-4xl md:text-4xl lg:text-5xl p-3 opacity-75 text-primary word-spacing font-semibold font-permanent">
        Moderniza tu manera de estudiar y aumenta tu productividad
      </p>
      <div className="w-full sm:p-10 flex justify-center">
        <Link
          href={"https://noter-app-coder.netlify.app/"}
          className="gradient-start-button px-6 py-3 sm:px-10 sm:py-6 hover:saturate-150 text-md sm:text-xl rounded-3xl hover:rounded-none text-white "
        >
          Empezar ahora
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Footer
