fetch("../Json/ville.json")
    .then(res=>res.json())
    .then(json=>console.log(json));