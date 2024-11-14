import { Modal } from "../../common/components";
import { MoodForm } from "./components/MoodForm/MoodForm";
import { useFormContext } from "../../state/contexts/form.hook";

export const RegisterEntry = () => {
  const { closeModal, handleCloseModal } = useFormContext();

  return (
    <div className="relative min-h-screen">
      <button
        onClick={handleCloseModal}
        className="fixed w-10 h-10 bottom-16 right-5 bg-color-primary-hover text-white rounded-full shadow-lg hover:bg-blue-400 active:bg-blue-600"
      >
        +
      </button>

      <Modal
        title="Create a new entry"
        isOpen={closeModal}
        onClose={handleCloseModal}
      >
        <MoodForm />
      </Modal>
    </div>
  );
};
