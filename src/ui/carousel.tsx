import { useEffect, useState } from "react";
import { Hint } from "../data/model";

interface CarouselProps {
  hint: Hint;
}
export function Carousel({ hint }: CarouselProps) {
  const photos = hint.files.map((photo) => {
    return `../assets/hints/${hint.password}/${photo}`;
  });

  const [current, setCurrent] = useState(0);
  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(photos[current]);
        setCurrentImage(image.default);
      } catch (error) {
        console.error("Erro ao carregar imagem", error);
      }
    };

    loadImage();
  }, [current, photos]);

  const onNextPress = () => {
    if (photos.length === current + 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const onPreviousPress = () => {
    if (current === 0) {
      setCurrent(photos.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  if (!currentImage) return null;

  return (
    <div className="flex-1 flex justify-center">
      <div className="flex flex-row items-center gap-8">
        {current > 0 && (
          <a href="#" onClick={onPreviousPress}>
            <p className="text-white text-8xl">{`<`}</p>
          </a>
        )}
        <div className="flex justify-center sm:px-12 p-8 h-[720px]">
          <img
            src={currentImage}
            key={current}
            className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"  
          />
        </div>
        {current + 1 < photos.length && (
          <a href="#" onClick={onNextPress}>
            <p className="text-white text-8xl">{`>`}</p>
          </a>
        )}
      </div>
    </div>
  );
}
