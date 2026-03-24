// import bassImg from "./img/bass.svg";
import drumsImg from "./img/drums.png";
import pianoImg from "./img/piano.png";
import type { classDataType } from "./types";

export const classesData: classDataType[] = [
  {
    id: "bateria-id",
    title: "Batería",
    img: drumsImg,
    items: [
      {
        id: "drums-1",
        item: "Desarrollá tu ritmo desde cero",
      },
      {
        id: "drums-2",
        item: "Mejorá tu coordinación rápidamente",
      },
      {
        id: "drums-3",
        item: "Clases dinámicas y prácticas",
      },
      {
        id: "drums-4",
        item: "Sentí el groove desde el primer día",
      },
      {
        id: "drums-5",
        item: "Algo",
      },
    ],
  },
  {
    id: "piano-id",
    title: "Piano",
    img: pianoImg,
    items: [
      {
        id: "piano-1",
        item: "Coordinación de ambas manos",
      },
      {
        id: "piano-2",
        item: "Técnica básica y postura correcta",
      },
      {
        id: "piano-3",
        item: "Aprendé a tu ritmo, sin presión",
      },
      {
        id: "piano-4",
        item: "Acordes y armonía aplicada",
      },
      {
        id: "piano-5",
        item: "Algo",
      },
    ],
  },
];
