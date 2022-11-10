import axios from "axios";

//use this to post later
const postSomething = () => {

    axios({
        url: "https://635a2a5538725a1746bf2903.mockapi.io/product",
        method: "POST",
        headers: {},
        // data: {descriptionContent, categoriesContent, uploads},
    })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        });
}

//https://635a2a5538725a1746bf2903.mockapi.io/category