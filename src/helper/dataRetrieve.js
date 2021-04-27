
async function retrieveData() {
    let dataToWorkWith = [];

    await fetch('http://localhost:3000/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(consumableData) { 
        dataToWorkWith = consumableData
    });
    return dataToWorkWith
}

export default retrieveData;
