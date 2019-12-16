import React from 'react';
import { toastr } from 'react-redux-toastr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


const Indice = ({ point }) => {

    const displayIndice = () => {
        toastr.light('Indice !', point.indice, {
            icon: 'info',
            status: 'info',
            timeOut: 9000,
        })
        
    }

    return (
        <div className="indice"><FontAwesomeIcon onClick={displayIndice} icon={ faInfoCircle } /></div>
    );
  }


export default Indice;