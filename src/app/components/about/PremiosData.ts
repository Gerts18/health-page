
import { StaticImageData } from "next/image";
import team_avatar_1 from "@/assets/img/about/docUno.png";
import team_avatar_2 from "@/assets/img/about/docDos.png";
import team_avatar_3 from "@/assets/img/about/docTres.png";
import team_avatar_4 from "@/assets/img/about/docCuatro.png";
import team_avatar_5 from "@/assets/img/about/docCinco.png";
//import './index.css';

interface TeamDataType {
  id: number;
  home?: number;
  img: StaticImageData;
  name: string;
  job_title: string;
}[]

const team_data:TeamDataType[] = [
  {
    id: 1, 
    img: team_avatar_1,
    name: "Rosalina D. Williamson",
    job_title: "Founder",
  },
  {
    id: 2, 
    img: team_avatar_2,
    name: "Diconda PIran Will",
    job_title: "dentist",
  },
  {
    id: 3, 
    img: team_avatar_3,
    name: "Hulk M. Kenbon",
    job_title: "neurologist",
  },
  {
    id: 4, 
    img: team_avatar_4,
    name: "Haliam Z. Dicolaz",
    job_title: "Consultant",
  },
  {
    id: 5, 
    img: team_avatar_5,
    name: "Nicolas D. Case",
    job_title: "dentist",
  },

]
export default team_data
