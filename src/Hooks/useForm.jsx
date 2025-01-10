import React from 'react'

const types = {
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Preencha um email válido'
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize apenas números'
    }
};

const useForm = (inputType) => {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);


    function validate(value) {
        if(inputType === false) {
            return true;
        } else if(value.length === 0) {
            setError('Preencha um valor.');
            return false;
        } else if(types[inputType] && !types[inputType].regex.test(value)) {
            setError(types[inputType].message);
            return false
        } else {
            setError(null);
            return true
        }
    }

    function onChange({ target }) {
        if(error) validate(target.value)
        setValue(target.value);
    }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm
