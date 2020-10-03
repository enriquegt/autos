const cars = [
    {
        id: 1,
        brand: 'Ram',
        model: '1500',
        color: 'Gray',
        age: 2018,
        price: 1089000
    },
    {
        id: 2,
        brand: 'Volkswagen',
        model: 'Virtus',
        color: 'Red',
        age: 2020,
        price: 240900
    },
    {
        id: 3,
        brand: 'Chevrolet',
        model: 'Aveo',
        color: 'White',
        age: 2004,
        price: 149000
    },
    {
        id: 4,
        brand: 'Toyota',
        model: 'Avanza',
        color: 'White',
        age: 2019,
        price: 213000
    },{
        id: 5,
        brand: 'BMW',
        model: 'Serie 4',
        color: 'Gray',
        age: 2010,
        price: 439000
    },      
];

//export default cars;
let editingCar = false;

function printCars() {

    const tableBody = document.getElementById('cars-table-body');
    tableBody.innerHTML = '';
    cars.forEach((car) => {
        const td = `<tr>
                        <td>
                            ${car.brand}
                        </td>
                        <td>
                            ${car.model}
                        </td>
                        <td>
                            ${car.color}
                        </td>
                        <td>
                            ${car.age}
                        </td>
                        <td>
                            ${car.price}
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="removeCar(${car.id})">
                                Eliminar
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-warning" onclick="editCarButton(${car.id})">
                                Editar
                            </button>
                        </td>
                    </tr>`
        tableBody.innerHTML += td;
    })
}


function submitCar() {
    if(editingCar) {
        editCar();
    } else {
        addCar();
    }
}
function editCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const age = document.getElementById('age').value;
    const price = document.getElementById('price').value;
    
    editingCar.brand = brand;
    editingCar.model = model;
    editingCar.color = color;
    editingCar.age = age;
    editingCar.price = price;
    printCars();
    editingCar = false;
    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('color').value = '';
    document.getElementById('age').value = '';
    document.getElementById('price').value = '';
}
function editCarButton(id) {
    const car = cars.find((car) => car.id === id);
    document.getElementById('brand').value = car.brand;
    document.getElementById('model').value = car.model;
    document.getElementById('color').value = car.color;
    document.getElementById('age').value = car.age;
    document.getElementById('price').value = car.price;
    editingCar = car;
}

function addCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const age = document.getElementById('age').value;
    const price = document.getElementById('price').value;
    // Creo un nuevo objeto carro
    const newCar = {
        id: cars.length + 1,
        brand: brand, model, color, age, price
    }
    // Agrego el nuevo carro
    cars.push(newCar);
    // imprimo todos los usuarios
    printCars();

}
function removeCar(id) {

    const position = cars.findIndex((car) => car.id === id);
    cars.splice(position, 1);
    printCars();
}


//  carga la función con la página
printCars();