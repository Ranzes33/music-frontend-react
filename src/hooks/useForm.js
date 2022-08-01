import { useState, useEffect } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    
    //para que cada vez que presiono un boton en NoteView
    //cambie el formulario
    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}