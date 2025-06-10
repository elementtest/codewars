function animalSound(animal) {
    switch (animal) {
        case 'dog':
            console.log('Woof!'); // Sound of a dog
        case 'cat':
            console.log('Meow!'); // Sound of a cat
        case 'cow':
            console.log('Moo!');  // Sound of a cow
        case 'duck':
            console.log('Quack!'); // Sound of a duck
        case 'lion':
            console.log('Roar!');  // Sound of a lion
        default:
            console.log('Unknown animal sound'); // If the animal is not recognized
    }
}

console.log(animalSound('duck'));
