import React from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class Modal extends React.PureComponent {
    @observable isOpen = false;
    @action open = (e) => {
        if(e) {
            e.preventDefault();
            this.isOpen = true;
        }
    }
    @action close = (e) => {
        if(e) {
            e.preventDefault();
            this.isOpen = false;
        }
    }
    render () {
        return(
            <div id="modal">

            </div>
        )
    }
}
export default Modal;