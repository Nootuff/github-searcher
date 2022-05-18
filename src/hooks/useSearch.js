import React, { useState } from "react";
const axios = require('axios').default;

export default search => {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const [show, setShow] = useState(false); //Used to hide the result field until a search has completed.
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => { //Activates on form submission.

    setLoading(true); //Loading spinner activated

    setShow(false); //Prevents ResultField from being rendered with no data present.

    setSearchTerm(values.searchTerm) //The user's searchTerm will be used in the NoResult message if needed.

    if (values.searchTerm !== "") {

      return axios.get(`https://api.github.com/users/${values.searchTerm}`)
        .then(function (response) { //Response is the argument to hold the actual returned results from the axios.request.

          setUser(response.data); //The results of the axios user request is set to state.
         
          setLoading(false); //Loading spinner de-activated

          setShow(true); //ResultField can now be rendered.

          return axios.get(`https://api.github.com/users/${values.searchTerm}/repos?per_page=100`); //Second request made for users' repos, absolute maximum results that can be returned on a page for a search is 100.

        }).then(function (response) {

          setRepos(response.data); //Repos are set to state. 
          
        }).catch(function (error) { //If nothing found in search or some other error.

         // console.error(error);

          setUser(""); 

          setLoading(false);

          setShow(true);
        });
    }
  }

  return [user, repos, show, searchTerm, loading, handleSubmit];
}
