import SunMap from "../assets/textures/2k_sun.jpg"
import MakemakeMap from "../assets/textures/4k_makemake_fictional.jpg"
import CeresMap from "../assets/textures/4k_ceres_fictional.jpg"
import HaumeaMap from "../assets/textures/4k_haumea_fictional.jpg"
import ErisMap from "../assets/textures/4k_eris_fictional.jpg"

export const planets = [
  {
    name: "sun",
    scale: 5,
    img: SunMap,
    speedRotation: 0,
    pos: 0,
  },
  {
    name: "Ceres",
    scale: 1,
    img: CeresMap,
    speedRotation: 10,
    pos: 10,
  },
  {
    name: "Makemake",
    scale: 3,
    img: MakemakeMap,
    speedRotation: 25,
    pos: 22,
  },
  {
    name: "Eris",
    scale: 2,
    img: ErisMap,
    speedRotation: 50,
    pos: 36,
  },
  {
    name: "Haumea",
    scale: 2.5,
    img: HaumeaMap,
    speedRotation: 35,
    pos: 55,
  }
];