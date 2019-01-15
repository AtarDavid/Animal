console.log("Hello groundhog!")

// Outputs result to selected div
const printOut = (outputText, outputField = "result") => { document.getElementById(outputField).innerHTML = `${outputText}` }

// Returns conversion rate for given animal
const duplicateBy = (species) => {
    switch (species) {
        case 'dog': return 7;
            break;
        case 'cow': return 14;
            break;
        case 'chinchilla': return 25;
            break;
        default: 0;
    }
}

// Returns user provided age
const getAge = () => { return parseInt(document.getElementById("howOld").value) }

// Calculates animal age and prints out a string with said information
const calculateAge = (animal) => {
    let age = getAge()
    console.log(age)
    console.log(animal)
    const aniYears = duplicateBy(animal) * age;
    return (aniYears > 0 ? printOut(`Your ${animal} is ${aniYears} years old in human years (${age} ${animal} years)!`) : printOut("Oops! You must provide a valid number."))
}

const cow = () => {
    calculateAge("cow")
}

const dog = () => {
    calculateAge("dog")
}

const chinchilla = () => {
    calculateAge("chinchilla")
}

document.querySelector('#cow').addEventListener('click', cow);
document.querySelector('#dog').addEventListener('click', dog);
document.querySelector('#chinchilla').addEventListener('click', chinchilla);
