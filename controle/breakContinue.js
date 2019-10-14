const nums = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]
// break = age no for, while e swicth
// continue = age no for e while
for (x in nums) {
    if (x == 5) {
        break 
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) {
        continue // interrompe essa repeticao e passa pra proxima
    }
    console.log(`${y} = ${nums[y]}`)
}
externo: // rotulo
for (a in nums) {
    for (b in nums) { // Nao use
        if( a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}