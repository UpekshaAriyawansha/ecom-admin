import React from "react";
import { Modal } from 'antd';

const CustomModel = (props) => {

    const {title, open, hideModal, performAction} = props;


    return(
        <>
            <Modal
                title="Comfirmation"
                open={open}
                onOk={performAction}
                onCancel={hideModal}
                okText="Ok"
                cancelText="Cancel"
            >
                <p>{title}</p>
            </Modal>       

        </>
    )
};

export default CustomModel;