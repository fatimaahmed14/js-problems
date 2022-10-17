function kilometresToMiles (number) {
    const milesNotRounded = number * 0.625
    let milesRounded = 0;

    if (milesNotRounded % 1 === 0) {
        milesRounded = milesNotRounded
    } else if (milesNotRounded % 1 > 0.5) {
        milesRounded = Math.floor(milesNotRounded) + 1
    } else if (milesNotRounded % 1 < 0.5) {
        milesRounded = Math.floor(milesNotRounded)
    }

    return milesRounded
}

console.log(kilometresToMiles(10))