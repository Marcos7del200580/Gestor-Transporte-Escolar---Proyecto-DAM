import { Modal } from "antd";

interface BaseModalProps {
  title: string;
  contentModal: string;
  isOpen: boolean;
  onClose: () => void;
}

export const BaseModal = ({ title, contentModal, isOpen, onClose }: BaseModalProps) => {
  return (
    <Modal title={title} open={isOpen} onOk={onClose} onCancel={onClose}>
      <p>{contentModal}</p>
    </Modal>
  );
};
