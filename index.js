const dropdownHead = document.getElementById('dropdown-head')
const dropdownHead2 = document.getElementById('dropdown-head2')
const dropdownList = document.getElementById('dropdown-list')
const dropdownList2 = document.getElementById('dropdown-list2')
const tempInput = document.getElementById('temp-input')



document.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown-head')) {
        showList(e.target.closest('.dropdown-head').id)
    } else if (e.target.id == "convert-btn") {
        convertTemp()
    }
    else if (e) {
        showButton()
    }
})


const itemArr = Object.values(dropdownList.children)
const itemArr2 = Object.values(dropdownList2.children)
itemArr.forEach(item => item.addEventListener('click', selectItem))
itemArr2.forEach(item => item.addEventListener('click', selectItem))


function selectItem(e) {
    if (e.target.parentElement.id == 'dropdown-list2') {
        dropdownHead2.innerHTML = `<p>${this.innerText}</p>
                                    <p>⌄</p>`
        removeIcon(dropdownList2)
    } else {

        dropdownHead.innerHTML = `<p>${this.innerText}</p>
                                        <p>⌄</p>`
        removeIcon(dropdownList)
    }

    showList(e.target.parentElement.id)
    // removeIcon()
    this.children[0].classList.add('show-icon')
}


function showList(id) {
    if (id == 'dropdown-head2' || id == 'dropdown-list2') {
        dropdownList2.classList.toggle('show-list')

    }
    else {
        dropdownList.classList.toggle('show-list')
    }
}

function removeIcon(element) {
    for (item of element.children) {
        item.firstElementChild.classList.remove('show-icon')
    }
}


function showButton() {
    if (dropdownHead.firstElementChild.textContent != "From Unit" &&
        dropdownHead2.firstElementChild.textContent != "To Unit" && tempInput.value) {
        document.getElementById('convert-btn-div').classList.add('show-btn')

    }
}

//need to get values of dropdownHead, 2 and 
//value of tempInput and then resultText and change text content of resultText

function convertTemp() {
    const fromUnit = dropdownHead.firstElementChild.textContent
    const toUnit = dropdownHead2.firstElementChild.textContent
    const value = tempInput.value

    let result;

    // Conversion logic
    if (fromUnit === "Celsius") {
        if (toUnit === "Fahrenheit") {
            result = (value * 9/5) + 32; 
        } else if (toUnit === "Kelvin") {
            result = value + 273.15; 
        }
    } else if (fromUnit === "Fahrenheit") {
        if (toUnit === "Celsius") {
            console.log('hee')
            result = (value - 32) * 5/9; 
        } else if (toUnit === "Kelvin") {
            result = (value - 32) * 5/9 + 273.15; 
        }
    } else if (fromUnit === "Kelvin") {
        if (toUnit === "Celsius") {
            result = value - 273.15; 
        } else if (toUnit === "Fahrenheit") {
            result = (value - 273.15) * 9/5 + 32; 
        }
    }
    document.getElementById('result').classList.add('show')
     document.getElementById('result-text').textContent = `${value} ${fromUnit} is ${result} ${toUnit}`
    console.log(result)
    console.log(fromUnit,toUnit,value)
}