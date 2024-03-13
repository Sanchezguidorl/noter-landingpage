import Image from "next/image";
import "../styles/Home.css";
import PresentationImg from "/public/bg-presentation.webp";
import BgStartImage from "/public/bg-start-section.webp";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Link from "next/link";
import CardPerspective from "@/components/layouts/CardPerspective";
import SecuentialWriteText from "@/components/layouts/SecuentialWriteText";
import SignalCellularConnectedNoInternet0BarIcon from "@mui/icons-material/SignalCellularConnectedNoInternet0Bar";
import SubjectIcon from "@mui/icons-material/Subject";
function Home() {
  return (
    <div className=" bg-white overflow-hidden">
      <div className="h-96 sm:h-[600px] overflow-hidden relative flex justify-center arise-animation">
        <div className="absolute top-10 sm:top-20 sm:left-20 w-[90%] sm:w-1/2 presentation-banner p-10 z-10 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <SecuentialWriteText
              delay={0}
              text="La herramienta perfecta para tomar apuntes, crear listas y mantener
            tus tareas en orden"
            />
          </h1>
          <h2 className=" text-primary text-md sm:text-xl mt-3 sm:mt-6 opacity-75 ">
            Organiza tu vida con Noter
          </h2>
        </div>
        <Image
          priority
          quality={70}
          placeholder="blur"
          src={PresentationImg}
          className=" object-cover saturate-50"
          alt="Imagen de cuaderno de notas"
        />
      </div>
      <div className=" bg-white relative px-10 word-spacing overflow-hidden arise-animation ">
        <div className="px-8 flex justify-center sm:justify-start pt-20">
          <p className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-75 text-primary  w-full sm:w-2/3 md:w-1/2 p-6">
            <SecuentialWriteText
              delay={1.5}
              text="Estamos comprometidos a promover el desarrollo personal y el estudio
            en todos los estratos de la sociedad"
            />
          </p>
        </div>
        <div className="p-8  flex justify-center sm:justify-end pt-20">
          <p className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-75 text-primary w-full sm:w-2/3 md:w-1/2 p-6">
            <SecuentialWriteText
              delay={3}
              text="Por tal motivo, hemos creado esta herramienta gratuita y accesible"
            />
          </p>
        </div>
        <div className="py-10 mt-10 w-full flex flex-col sm:flex-row justify-center gap-8 md:gap-14 lg:gap-24 text-primary">
          <CardPerspective classes="shadow-secondary-text shadow-md hover:shadow-interactive hover:shadow-lg w-fit relative z-20 benefitCard p-8 rounded-3xl flex-1 flex flex-col items-center gap-5">
            <SignalCellularConnectedNoInternet0BarIcon className="text-7xl opacity-75" />
            <p className="opacity-75 text-center sm:text-lg md:text-xl font-semibold">
              Accede a tus notas en cualquier lugar sin preocuparte por la
              clidad de conexión
            </p>
          </CardPerspective>
          <CardPerspective classes="shadow-secondary-text shadow-md hover:shadow-interactive hover:shadow-lg w-fit relative z-20 benefitCard p-8 rounded-3xl flex-1 flex flex-col items-center gap-5">
            <AddTaskIcon className="text-7xl opacity-75" />
            <p className="opacity-75 text-center sm:text-lg md:text-xl font-semibold">
              Agrega tareas con fechas límite y márclas cuando las completes con
              un simple clck
            </p>
          </CardPerspective>
          <CardPerspective classes="shadow-secondary-text shadow-md hover:shadow-interactive hover:shadow-lg w-fit relative z-20 benefitCard p-8 rounded-3xl flex-1 flex flex-col items-center gap-5">
            <SubjectIcon className="text-7xl opacity-75" />
            <p className="opacity-75 text-center sm:text-lg md:text-xl font-semibold">
              Optimiza tu tiempo y ahorra papel al tomar notas digitalmente
            </p>
          </CardPerspective>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative h-full w-full bubles-animation">
            <div className="rounded-full aspect-square absolute top-10 bg-primary-buttons w-10 opacity-30"></div>
            <div className="rounded-full aspect-square absolute top-20 bg-primary-buttons w-20 opacity-30 left-1/2"></div>
            <div className="rounded-full aspect-square absolute top-60 bg-primary-buttons w-40 opacity-30 left-3/4"></div>
            <div className="rounded-full aspect-square absolute top-1/2 bg-primary-buttons w-40 opacity-30 left-1/4"></div>
            <div className="rounded-full aspect-square absolute top-1/2 bg-primary-buttons w-1/4 opacity-30 left-3/4"></div>
            <div className="rounded-full aspect-square absolute -bottom-20 bg-primary-buttons w-40 opacity-30 left-2/4"></div>
          </div>
        </div>
      </div>
      <div className="relative arise-animation overflow-hidden">
        <Image
          quality={70}
          placeholder="blur"
          src={BgStartImage}
          alt="Imagen de fondo de mesa de estudio con artículos de estudio"
          className=" saturate-50"
        />
        <div className="absolute top-0 text-center banner w-1/2 h-full left-1/2 flex flex-col justify-center items-center">
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
    </div>
  );
}

export default Home;
