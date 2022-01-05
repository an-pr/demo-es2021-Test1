let array1 = ['Teresa', 'Andrey', 'Katya', 'Basya', 'Ryjyk']
let array2 = [20, 5, 112, 72, 1, 13, 94]
let array = ['b', 'g', 'h', 'a', 'd', 'z', 'l']


/*mySort(array)

function mySort(array) {
    
    var warray = []
    array.map((e, i) =>  {
      warray[i] = e
    })
    
    var farray = []
    array.forEach((e, i) => {
      var g = warray.indexOf(Math.min.apply(null, warray)) 
      var s = warray.splice(g, 1) 
      farray[i] = s 
    })
  
    console.log(farray)
  }

*/


mySort(array)


function mySort(array) {
    var warray = []
    var parray = []



    array.map((e, i) => {

        warray[i] = e
        parray[i] = warray[i].charCodeAt()
    })

    var farray = []
    array.forEach((e, i) => {

        var g = parray.indexOf(Math.min.apply(null, parray))
        parray.splice(g, 1)
        var s = warray.splice(g, 1)
        farray[i] = s
    })

    console.log(farray)
}   



