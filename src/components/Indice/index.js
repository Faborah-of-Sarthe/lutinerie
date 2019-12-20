import React from 'react';
import { toastr } from 'react-redux-toastr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip';


const Indice = ({ point }) => {

    const displayIndice = () => {
        toastr.light('Indice !', point.indice, {
            icon: 'info',
            status: 'info',
            timeOut: 9000,
        })
        
    }

    return (
        <div>
            <div className="indice" data-tip="Cliquer ici pour voir un indice"><FontAwesomeIcon onClick={displayIndice} icon={ faInfoCircle } /></div>
            <ReactTooltip />
        </div>
    );
  }


export default Indice;