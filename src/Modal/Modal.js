import React from 'react';
import Modal from 'react-modal';

class ModalModel extends React.Component {
   constructor(){
       super();
       this.state = {
           isActive: true
       }
   }
   toggleModal = () => {
       this.setState({
           isActive:!this.state.isActive
       })
   }
   componentWillMount () {
       Modal.setAppElement('body');
   }
    render () {
        console.log(this.props.place)
        return(
            <div>
                <Modal isOpen={this.state.isActive}>
                    Hello From Modal
                </Modal>
            </div>
        )
    }
}
export default ModalModel;