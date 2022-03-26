import React from 'react'


export default function Alert(props) {
    const capitalize = (word) => {
        if (word != null) {
            const lower = String(word.toLowerCase());
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
    }
    return (
        props.alert.types && <div className={`alert alert-${props.alert.types} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.types)}!</strong> {props.alert.msg}
        </div>
    )
}
