import { useEffect, useState } from "react";
import { getPokemons } from "./PokemonImages";
import "./App.css";

export function App() {
  //const [score, setScore] = useState(0);
  //const [bestScore, setBestScore] = useState(0);
  const [imgs, setImages] = useState([]);

  console.log(imgs);

  useEffect(() => {
    console.log("useEffect triggered");
    async function loadImages() {
      try {
        console.log("Fetching images...");
        const src = await getPokemons();
        console.log("First image:", src[0]);
        console.log("Type:", typeof src[0]);
        setImages(src);
      } catch (error) {
        alert(error);
      }
    }
    loadImages();
  }, []);

  useEffect(() => {
    console.log("Images state updated:", imgs);
  }, [imgs]);

  if (imgs.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {imgs.map((record) => {
        return (
          <div key={record.id}>
            <img src={record.url} alt="pokemon" />{" "}
          </div>
        );
      })}
    </>
  );
}
