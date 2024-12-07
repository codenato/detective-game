import { HintFileType, HintPassword } from "../data/model";
import { useAppSelector } from "../data/store";
import { AudioPlayer } from "./audio-player";
import { Carousel } from "./carousel";
import { VideoPlayer } from "./video-player";

export function TeamHintContainer() {
  const currentHint = useAppSelector(
    (state) =>
      state.root.hints[
        HintPassword[state.root.currentHint as keyof typeof HintPassword]
      ]
  );

  if (!currentHint)
    return (
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-disabled p-4">
          <p className="text-white text-3xl">Nenhuma dica selecionada</p>
        </div>
      </div>
    );

  switch (currentHint.fileType) {
    case HintFileType.AUDIO:
      return <AudioPlayer hint={currentHint} />;
    case HintFileType.CAROUSEL:
      return <Carousel hint={currentHint} />;
    case HintFileType.PHOTO:
      return <Carousel hint={currentHint} />;
    case HintFileType.VIDEO:
      return <VideoPlayer hint={currentHint} />;
  }
}
