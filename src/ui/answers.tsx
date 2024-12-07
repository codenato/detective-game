import { useState } from "react";
import {
  CrimeLocal,
  CrimeTime,
  HintType,
  Killer,
  MurderMethod,
  MurderReason,
  Weapon,
} from "../data/model";
import Button from "./button";
import { SelectField } from "./select-field";
import { useAppDispatch, useAppSelector } from "../data/store";
import { changeResult, finalSubmit } from "../data/slice";

const hintOptionsMap = {
  [HintType.KILLER]: Killer,
  [HintType.CRIME_TIME]: CrimeTime,
  [HintType.MURDER_METHOD]: MurderMethod,
  [HintType.MURDER_REASON]: MurderReason,
  [HintType.WEAPON]: Weapon,
  [HintType.CRIME_LOCAL]: CrimeLocal,
};

export function Answers() {
  const dispatch = useAppDispatch();
  const rightAnswers = useAppSelector((state) => state.root.answers);
  const isFinalAnswers = useAppSelector((state) => state.root.isFinalAnswers);

  const [answers, setAnswers] = useState<{
    [x: string]: { answer: string };
  }>();

  const onSelectValue = (value: { answer: string; question: string }) => {
    setAnswers({
      ...answers,
      [value.question]: { answer: value.answer },
    });
  };

  const validate = () => {
    if (!answers) return false;
    return Object.values(answers).length === Object.keys(rightAnswers).length;
  };

  const onGuessSubmit = () => {
    let result = "VOCE ERROU TODAS 🥵";
    Object.keys(answers!).forEach((question) => {
      if (
        rightAnswers[question as HintType].answer ===
        answers![question as HintType].answer
      ) {
        result = "VOCE ACERTOU: " + question;
      }
    });
    dispatch(changeResult(result));
  };

  const onFinalSubmit = () => {
    if (!answers) return;
    dispatch(finalSubmit(answers));
  };

  const onSubmit = () => {
    if (!validate()) return;

    if (!isFinalAnswers) {
      return onGuessSubmit();
    }
    onFinalSubmit();
  };

  return (
    <div className="flex flex-col">
      {Object.values(HintType).map((key) => {
        return (
          <SelectField
            key={key}
            label={key}
            options={["Selecione", ...Object.values(hintOptionsMap[key])]}
            onChange={onSelectValue}
          />
        );
      })}
      <a href="#" className="pt-6" onClick={onSubmit}>
        <Button label="ENVIAR PALPITE" />
      </a>
    </div>
  );
}
