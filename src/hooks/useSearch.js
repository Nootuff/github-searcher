import React, { useState } from "react";
const axios = require('axios').default;

const initialSearchTags = {
  searchedTerm: "",
  searchedBy: ""
};

export default search => {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const [searched, setSearched] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [show, setShow] = useState(false);
  //const [loading, setLoading] = useState(false);


  const handleSubmit = (values) => { //Activates on form submission.



    /* const options = {
         method: 'GET',
         url: `https://api.github.com/users/${values.searchTerm}`,
     }; */

    //Could have a second search using string template above to search `https://api.github.com/users/${values.searchTerm}/repos` send the dataset under something else?

    console.log(values.searchTerm)



    setSearched(true)
    setSearchTerm(values.searchTerm)

    if (values.searchTerm !== "") {

      // return axios.request(options).then(function (response) {  
      return axios.get(`https://api.github.com/users/${values.searchTerm}`)
        .then(function (response) { //Response is the argument to hold the actual returned results from the axios.request.
          setUser(response.data); //The results of the axios reqeust is set to state.
          //console.log(response.data)
          return axios.get(`https://api.github.com/users/${values.searchTerm}/repos?per_page=100`);
        }).then(function (response) {
          setRepos(response.data);
         // console.log("this is repos " + repos)
          //console.log( response.data)
        }).catch(function (error) {
          console.error(error);
          setUser("");
          //alert("error occurred")
        });

    }

    /*
            if (valuesParam.searchTerm !== ""){ //valuesParam holds "values" passed from useInputState through the searchForm.
                return axios.request(options).then(function (response) { //Response is the argument to hold the actual returned results from the axios.request.
                    setResult(response.data); //The results of the axios reqeust is set to state.
                    setSearchTags({ searchedTerm: valuesParam.searchTerm, searchedBy: valuesParam.searchBy }); //The search term and search by are saved to the searchTags to be used in the result message. 
                    setLoading(false); //Deactivate the loading animation.
                }).catch(function (error){
                    setResult([]); //Sets result to an empty array so this can be detected in the results list & used to determine whether const message should be rendered. 
                    setSearchTags({ searchedTerm: valuesParam.searchTerm, searchedBy: valuesParam.searchBy });
                    console.error(error);
                    setLoading(false);
                });
            } else {
                setResult("");
            }
            */
  }

  return [user, repos, searched, searchTerm, handleSubmit];
}
