import React, { useState } from "react";

const initialSearchTerms = {
    searchTerm: "",
};

export default input => {
    const [values, setValues] = useState(initialSearchTerms);

   
    //const searchTermHolder = values.searchTerm.replace(/\s\s+/g, '%20').toLowerCase(); //The search term is modified to fit the API call requirements.
  

    const handleChange = (event) => {
        const { name, value } = event.target; //Destructured const
        setValues({
            ...values,
            [name]: value,
        });
    };

    return [values, /* searchTermHolder, */handleChange];
}