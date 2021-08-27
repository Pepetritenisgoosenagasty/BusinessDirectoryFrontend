import { Modal } from 'antd';
const ModalComponent = ({children, title, visible, onCancel, modalWidth}) => {
    return (
        <Modal title={title} visible={visible} onCancel={onCancel} footer={false} width={modalWidth}>
       {children}
      </Modal>
    )
}

export default ModalComponent
