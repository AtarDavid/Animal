console.log("Hello groundhog!")

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

const calculateAge = (animal, age) => {
    const aniYears = duplicateBy(animal) * age;
    return (aniYears > 0 ? console.log(`Your ${animal} is ${aniYears} years old in human years (${age} ${animal} years)!`) : console.log("Oops! I don't recognize this animal. Try again!"))
}

calculateAge("cow", 3)
calculateAge("dog", 12)
calculateAge("horse", 2)