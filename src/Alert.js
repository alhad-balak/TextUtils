import React from 'react'

export default function Alert(props) {
    const capitalise = (word) => {
        let wrd = word.tolowerCase();
        return wrd[0].toupperCase + wrd.slice[1];
    }
    return (
        <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.alert.type}</strong>{capitalise(props.alert.msg)}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
