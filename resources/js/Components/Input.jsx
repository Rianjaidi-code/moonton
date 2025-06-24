import React, { useEffect, useRef} from "react";

export default function Input({ type = 'text', name, value, defaultValue, className = '', variant = 'primary', autoComplete, required, isFocused = false, handleChange, placeHolder, isError, ...props }) {

    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            ref={input}
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${className}`
            }
            autoComplete={autoComplete}
            required={required}
            onChange={handleChange}
            placeholder={placeHolder}
        />
    );

}
