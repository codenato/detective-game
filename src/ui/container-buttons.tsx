import { openAnswersModal, openFinalAnswersModal } from "../data/slice";
import { useAppDispatch } from "../data/store";
import Button from "./button";

export function ContainerButtons() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-row justify-between w-full">
      <a
        href="#"
        onClick={() => dispatch(openAnswersModal())}
        className="w-[200px]"
      >
        <Button label="Palpite" />
      </a>
      <a
        href="#"
        className="w-[200px]"
        onClick={() => dispatch(openFinalAnswersModal())}
      >
        <Button label="Palpite final" />
      </a>
    </div>
  );
}
