import Image from 'next/image'
import PresentationImg from "/public/bg-presentation.webp";
function Header() {
  return (
    <div className="h-96 sm:h-[600px] overflow-hidden relative flex justify-center arise-animation">
    <div className=" select-none absolute top-10 sm:top-20 sm:left-20 w-[90%] sm:w-1/2 presentation-banner p-10 z-10 ">
      <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center">
        La herramienta perfecta para tomar apuntes, crear listas y mantener
        tus tareas en orden
      </h1>
      <h2 className=" text-primary text-md sm:text-xl mt-3 sm:mt-6 opacity-75 ">
        Organiza tu vida con Noter
      </h2>
    </div>
    <Image
      priority={true}
      quality={70}
      placeholder="blur"
      src={PresentationImg}
      className=" object-cover saturate-50"
      alt="Imagen de cuaderno de notas"
      sizes="(max-width: 600px) 600px,(min-width: 600px) 900px,(min-width: 900px) 1920px"
    />
  </div>
  )
}

export default Header
