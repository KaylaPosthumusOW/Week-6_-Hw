displayPizza = () => {
    let monthPizza = document.getElementById('pizzaOut');

    for (let i = 0; i < pizzaData.length; i++){

            let name = pizzaData[i].pizzaName;
            let size = pizzaData[i].pizzaSize;
            let base = pizzaData[i].pizzaBase;
            let toppings = pizzaData[i].pizzaToppings;
            let price = pizzaData[i].pizzaPrice; 

            monthPizza.innerHTML += `
                    <div class="card">
                        <div class="card-body">
                            <div class="box">Image here?</div>
                            <h4 class="card-title">${name}</h4>
                            <p class="card-text"><strong>Base:</strong> ${base}</p>
                            <p class="card-text"><strong>Size:</strong> ${size}</p>
                            <p class="card-text"><strong>Toppings:</strong> ${toppings.join('. ')}</p>
                            <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
                        </div>
                    </div>`

    }
}