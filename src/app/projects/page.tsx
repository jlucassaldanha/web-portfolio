import Projects, { ProjectType } from '@/components/sections/Projects/Projects';
import timeManagerCover from "../../../public/time_namager_cover.png"
import ticketDevCover from "../../../public/ticket_dev_cover.png"
import ticketDevApiCover from "../../../public/ticket_dev_api_cover.png"

const projects: ProjectType[] = [
  {
    title: "Time Manager Web",
    description: "Aplicação para controle de horas extras costruída em Next.JS",
    repoUrl: "https://github.com/jlucassaldanha/time-manager-web",
    deployUrl: "https://timemanagerweb.vercel.app",
    img: timeManagerCover
  },
  {
    title: "TicketDevWebApp",
    description: "Aplicação de publicação de eventos, venda, compra e validação de ingressos.",
    repoUrl: "https://github.com/jlucassaldanha/ticketdevwebapp",
    deployUrl: "https://ticketdevwebapp.vercel.app",
    img: ticketDevCover
  },
  {
    title: "Time Manager",
    description: "API Rest para controle de horas extras costruída em C# .NET",
    repoUrl: "https://github.com/jlucassaldanha/TimeManager"
  },
  {
    title: "TicketDevApi",
    description: "API Rest de publicação de eventos, venda, compra e validação de ingressos.",
    repoUrl: "https://github.com/jlucassaldanha/ticketdevwebapp",
    deployUrl: "https://ticketdevapi.onrender.com/api-docs",
    img: ticketDevApiCover
  },
  {
    title: "PyTACOAPI",
    description: "Aplicação de consulta de nutrientes e alimentos escrita em Python",
    repoUrl: "https://github.com/jlucassaldanha/PyTacoAPI",
  },
];

export default function Home() {
  return (
    <div>
      <main>
        <section className='min-h-[calc(100vh-3.5rem)] flex items-center'>
          <Projects projects={projects} />
        </section>
      </main>
    </div>
  );
}
