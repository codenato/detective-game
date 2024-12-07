
interface ModalProps {
  title: string;
  children: JSX.Element;
  onClose: () => void;
}

export function Modal({ title, children, onClose }: ModalProps) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-blue rounded-lg p-6">
          <div className="flex justify-center items-center mb-4 w-full text-center">
            <h2 className="text-3xl font-bold text-white">{title}</h2>
          </div>
          <div className="modal-content min-w-[512px]">{children}</div>
        </div>
      </div>
    </>
  );
}
