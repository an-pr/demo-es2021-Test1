/* recursiy */
/* a-b */
const a = 2
const b = 2
let c = 0

for (let i = 0; i <= b - a; i++) {
    c += a + i
}
a >= b ? console.log(undefined) :
    console.log(c)


/* a^b */
const a1 = 0
const b1 = -2
let d = 1
if (b1 === 0) {
    console.log(d);
} else {
    for (let i = 0; i < Math.abs(b1); i++) {
        d *= a1
    }

    if (b1 > 0) {
        console.log(d)
    } else {
        console.log(1 / d)
    }
}


/* f! */
const f = 5
let n = 1
for (let i = f; i > 0; i--) {
    n *= i
}
console.log(n)


/* fib */
const x = 2
let z1 = 0
let z2 = 1
switch (x) {
    case 0:
        console.log(0)
        break
    case 1:
        console.log(1)
        break
    default:
        for (let i = 1; i < x; i++) {
            y = z1 + z2
            z1 = z2
            z2 = y
        }
        console.log(y)
    }
