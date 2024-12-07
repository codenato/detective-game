import { useCallback, useEffect, useRef } from "react";
import { HintPassword } from "../data/model";
import { addHintToCurrentTeam } from "../data/slice";
import { useAppDispatch } from "../data/store";
import Button from "./button";

export function HintPasswordModal() {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitPassword = useCallback(() => {
    const input = inputRef.current?.value;
    if (Object.keys(HintPassword).includes(`P${input}`)) {
      dispatch(addHintToCurrentTeam(`P${input}` as keyof typeof HintPassword));
    } else {
      alert("ERROU");
    }
  }, [dispatch]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onSubmitPassword();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSubmitPassword]);

  return (
    <div className="flex flex-col">
      <p className="text-white text-2xl pb-4">
        Digite a senha para recuperar a dica.
      </p>
      <input
        type="number"
        max={3}
        ref={inputRef}
        className={`
            bg-white text-black focus:outline-none px-4 py-2 
            [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none
            text-center text-2xl
            `}
        onInput={(e) => {
          const value = (e.target as HTMLInputElement).value;
          if (value.length > 3) {
            (e.target as HTMLInputElement).value = value.slice(0, 3);
          }
        }}
      />
      <a href="#" className="pt-8" onClick={onSubmitPassword}>
        <Button label="DESBLOQUEAR" />
      </a>
    </div>
  );
}
