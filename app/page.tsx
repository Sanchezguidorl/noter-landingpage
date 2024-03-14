import "../styles/Home.css";
import dynamic from "next/dynamic";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SignalCellularConnectedNoInternet0BarIcon from "@mui/icons-material/SignalCellularConnectedNoInternet0Bar";
import SubjectIcon from "@mui/icons-material/Subject";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
const CardPerspective = dynamic(
  () => import("@/components/layouts/CardPerspective")
);
function Home() {
  return (
    <div className=" bg-white overflow-hidden">
      <Header/>
      <div className=" bg-white relative px-10 word-spacing overflow-hidden arise-animation ">
        <div className="px-8 flex justify-center sm:justify-start mt-10">
          <p className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-40 text-primary  w-full sm:w-2/3 md:w-1/2 p-6 flex items-center premise relative z-10">
            Estamos comprometidos a promover el desarrollo personal y el estudio
            en todos los estratos de la sociedad
          </p>
        </div>
        <div className="p-8  flex justify-center sm:justify-end mt-10">
          <p className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-40 text-primary w-full sm:w-2/3 md:w-1/2 p-6 flex items-center premise relative z-10">
            Por tal motivo, hemos creado esta herramienta gratuita y accesible
          </p>
        </div>
        <div className=" select-none py-10 mt-10 w-full flex flex-col sm:flex-row justify-center gap-8 md:gap-14 lg:gap-24 text-primary">
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
      <Footer />
    </div>
  );
}

export default Home;
