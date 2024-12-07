import { useCallback } from "react";
import { HintPassword } from "../data/model";
import { hintsByCurrentTeamSelector } from "../data/selectors/hints-by-current-team";
import { openHintPasswordModal, selectHint } from "../data/slice";
import { useAppDispatch, useAppSelector } from "../data/store";
import { HintBox } from "./hint-box";

export function Hints() {
  const hints = useAppSelector(hintsByCurrentTeamSelector);

  const enabledHints = Object.keys(hints!);
  const disabledHintsSize = 6 - enabledHints.length;

  const dispatch = useAppDispatch();

  const renderEnabledHints = useCallback(() => {
    return enabledHints.map((enabledHintKey, index) => {
      return (
        <a
          href="#"
          key={enabledHintKey}
          onClick={() =>
            dispatch(selectHint(enabledHintKey as keyof typeof HintPassword))
          }
        >
          <HintBox
            label={index.toString()}
            hintKey={enabledHintKey as keyof typeof HintPassword}
          />
        </a>
      );
    });
  }, [dispatch, enabledHints]);

  const renderDisabledHints = useCallback(() => {
    {
      return Array.from({ length: disabledHintsSize }).map((_, i) => (
        <a href="#" key={i} onClick={() => dispatch(openHintPasswordModal())}>
          <HintBox label="+" blocked />
        </a>
      ));
    }
  }, [disabledHintsSize, dispatch]);

  return (
    <div className="flex flex-row justify-between items-center">
      {renderEnabledHints()}
      {renderDisabledHints()}
    </div>
  );
}
