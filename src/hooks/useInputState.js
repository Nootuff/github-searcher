import React, { useState } from "react";

const initialSearchTerms = {
    searchTerm: "",
};

export default input => {
    const [values, setValues] = useState(initialSearchTerms);

    const handleChange = (event) => {
        const { name, value } = event.target; //Destructured const
        setValues({
            ...values,
            [name]: value,
        });
    };

    return [values, handleChange];
}