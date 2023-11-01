const url = "https://65427df9ad8044116ed37765.mockapi.io/users/";
const searchButton = document.getElementById("btnGet1");
const addButton = document.getElementById("btnPost");
const putButton = document.getElementById("btnPut");
const deleteButton = document.getElementById("btnDelete");
const results = document.getElementById("results");
const inputGet = document.getElementById("inputGet1Id");

/*   
fetch(url)
.then(response => response.json)
.then(data())
.catch(error => console.error("error cargando datos:", error));
*/

//function showRegister (number){
searchButton.addEventListener("click", (event) => {
const valor = inputGet.value;

  if (valor !== "") {
     showData(valor);  //probar asi
  } else {
    results.innerHTML += listAllUsers();
  }
});
 
//

function showData(numero) {
    let type = {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };
      fetchJSONData(`${url}${numero}`, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
          let users = resultObj.data;
          console.log(users);
          results.innerHTML(users); //probar asi
        }
      });
}

function listAllUsers() {
  let type = {
    method: "GET",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };
  fetchJSONData(url, type).then(function (resultObj) {
    if (resultObj.status === "ok") {
      let users = resultObj.data;
      console.log(users);
    }
  });
}



//codigo profe
let fetchJSONData = function (url, type) {
  let result = {};
  return fetch(url, type)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = "ok";
      result.data = response;
      return result;
    })
    .catch(function (error) {
      result.status = "error";
      result.data = error;
      return result;
    });
};
