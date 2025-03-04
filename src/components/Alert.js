import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div className={`alert alert-dismissible fade show`} role="alert" style={{ backgroundColor: props.Mode === 'light' ? '#e4f4e0' : '#3a3a3a', color: props.Mode === 'dark' ? '#cccccc' : '#1b2b17' }}>
                <strong>{capitalize(props.alert.type)} : </strong>{props.alert.msg}
            </div>}
        </div>
    )
}