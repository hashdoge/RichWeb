
function main(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            splitData(JSON.parse(xhttp.responseText));
        }
    };
    xhttp.open("GET", "http://jsonplaceholder.typicode.com/users", true);
    xhttp.send();
}


function splitData(data){
    var userName = [];
    var geoObject = [];
    var userArray =[];
    var address = [];
    var id = [];
    for(i = 0;i<data.length;i++){
        userName.push(data[i].username);
        geoObject.push(data[i].address.geo);
        userArray.push(new Array(data[i].name,data[i].id,data[i].company.name,data[i].address.zipcode));
        if(data[i].address.zipcode.charAt(0) === '5'){
            address.push(data[i].address.street);

        }
        id.push(data[i].id);
        id[i-1] += id[i];
    }

    console.log(userName);
    console.log(geoObject);
    console.log(userArray);
    console.log(address);
    console.log(id);
}