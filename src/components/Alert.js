import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    
    <div style={{height:'50px'}}>
      {props.alert && props.alert.msg && (
        <div className={`alert alert-${props.alert.type} fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}: </strong>
          <span className="float-end" aria-label="Close" data-bs-dismiss="alert">
            <span aria-hidden="true">&times;</span>
          </span>
          {props.alert.msg}
        </div>
      )}
    </div>
  )
}