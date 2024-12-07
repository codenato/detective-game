import { useDispatch } from "react-redux";
import {
  closeAnswersModal,
  closeHintPasswordModal,
  closeResultModal,
} from "./data/slice";
import { useAppSelector } from "./data/store";
import { Answers } from "./ui/answers";
import { BotttomBar } from "./ui/bottom";
import { Modal } from "./ui/modal";
import { Navbar } from "./ui/navbar";
import { TeamContainer } from "./ui/team-container";
import Teams from "./ui/teams";
import { HintPasswordModal } from "./ui/hint-password-modal";
import { getColor } from "./helpers";
import { ResultModal } from "./ui/result-modal";

function App() {
  const dispatch = useDispatch();

  const isResultModalOpen = useAppSelector(
    (state) => state.root.resultModalOpened
  );
  const isAnswersModalOpen = useAppSelector(
    (state) => state.root.answersModalOpened
  );
  const isHintPasswordModalOpen = useAppSelector(
    (state) => state.root.hintPasswordModal
  );

  const currentTeam = useAppSelector((state) => state.root.currentTeam);
  const isFinalAnswers = useAppSelector((state) => state.root.isFinalAnswers);

  return (
    <div
      className={`h-screen text-center flex flex-col bg-red ${
        currentTeam ? getColor(currentTeam) : "bg-blue"
      } items-center`}
    >
      <Navbar />
      {currentTeam ? <TeamContainer /> : <Teams />}
      <BotttomBar />
      {isResultModalOpen && (
        <Modal title="RESULTADO" onClose={() => dispatch(closeResultModal())}>
          <ResultModal />
        </Modal>
      )}
      {isAnswersModalOpen && (
        <Modal
          title={`${isFinalAnswers ? "PALPITE FINAL!!!" : "PALPITE"}`}
          onClose={() => dispatch(closeAnswersModal())}
        >
          <Answers />
        </Modal>
      )}
      {isHintPasswordModalOpen && (
        <Modal
          title="DESBLOQUEAR DICA"
          onClose={() => dispatch(closeHintPasswordModal())}
        >
          <HintPasswordModal />
        </Modal>
      )}
    </div>
  );
}

export default App;
