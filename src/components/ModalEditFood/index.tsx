import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { IFoodPlate } from "../../interfaces/FoodPlate";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FormHandles } from "@unform/core";

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: Omit<IFoodPlate, "id" | "available">) => void;
  editingFood: IFoodPlate;
}

function ModalEditFood({
  handleUpdateFood,
  setIsOpen,
  editingFood,
  isOpen,
}: ModalEditFoodProps): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = (data: Omit<IFoodPlate, "id" | "available">) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />
        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />
        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;
