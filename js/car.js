(function () {
    
let garage = document.getElementById('garage');

for (let i = 0; i < 100; i++) {  
    let div =  document.createElement('div');
    let id = 'car' + i;
    div.id = id;
    garage.appendChild(div);
    startCarProcess(id);
}


function startAllCarsListener() {
    alert('should start all cars')
}

let startAllCars = document.getElementById('start-all-cars');
startAllCars.addEventListener('click', startAllCarsListener);

})();


