import React from "react";
import { Modal } from "../../common/components";
import { MoodForm } from "./components/MoodForm/MoodForm";
import { FormProvider } from "../../state/contexts/form.context";

export const RegisterEntry = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const handleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="relative min-h-screen">
      <button
        onClick={handleModal}
        className="fixed w-10 h-10 bottom-16 right-5 bg-color-primary-hover text-white rounded-full shadow-lg hover:bg-blue-400 active:bg-blue-600"
      >
        +
      </button>

      <Modal
        title="Create a new entry"
        isOpen={isModalOpen}
        onClose={handleModal}
      >
        <FormProvider>
          <MoodForm />
        </FormProvider>
      </Modal>
    </div>
  );
};
