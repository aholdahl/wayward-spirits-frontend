import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    return (
        <>
        <label htmlFor={props.name}>{props.title}</label>
        <input type={props.type} 
        className={props.className}
        id={props.name}
        ref={ref}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        value={props.value}
        />
        <div>{props.errorMsg}</div>
        </>
    )
})

export default Input;