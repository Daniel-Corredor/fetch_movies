import { Modal, ModalProps } from 'antd'
interface ModalVideoProps extends ModalProps{
    videoKey: string;
    videoPlatform: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ModalVideo = ({open,setIsOpen}:ModalVideoProps ) => {
   

   
    
  return (
    <Modal
    
    
    open={open}
    centered
    onCancel={()=>setIsOpen(false)}
    footer={false}
    >

    </Modal>
  )
}

export default ModalVideo