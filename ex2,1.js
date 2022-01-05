let array1 = ['Teresa', 'Andrey', 'Katya', 'Basya', 'Ryjyk']
let array = [20, 5, 112, 72, 1, 13, 94]
let array2 = ['b', 'g', 'h', 'a', 'd', 'z', 'l']


switch (typeof array[0]) {       // если массив однотипный по условию, то проверяем только одно значение
    case 'number':
        array.sort((a, b) => a - b
        )
        console.log(array)
        break

    case 'string':
        array.sort()
        console.log(array)
        break

    default: console.log('Сортировка не возможна')
        break
}

