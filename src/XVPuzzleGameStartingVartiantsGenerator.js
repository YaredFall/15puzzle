//Returns an integer random number between min (included) and max (included)
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GenerateSolvablePermutation(fieldSize) {
    const length = fieldSize * fieldSize;
    let randomPermutation = GeneratePermutation(length);

    while (!IsSolvable(randomPermutation) || IsSolved(randomPermutation)) {
        randomPermutation = GeneratePermutation(length);
    }

    return randomPermutation;
}

function GeneratePermutation(length) {
    const result = [];
    const availableElements = [...Array(length)].map((e,i) => (i));
    
    for (let i = 0; i < length; i++) {
        const randomID = randomInteger(0, availableElements.length - 1);
        
        result.push(availableElements[randomID]);
        availableElements.splice(randomID, 1);
    }

    return result;
}

function IsSolvable(permutation) {
    let count = 0;
    const n = permutation.length;
    
    const permutationWithoutEmptyCell = permutation.filter((e) => (e !== n-1));
    
    permutationWithoutEmptyCell.forEach((ei, i) => {
        permutationWithoutEmptyCell.filter((e, k) => (k > i)).forEach((ej) => {
            if (ei > ej)
                count = count + 1;
        })
    })
    
    const fieldSize = Math.sqrt(n);
    
    count += ~~(permutation.indexOf(n-1) / fieldSize) + 1;
    
    return count % 2 === 0;
}

export function IsSolved(permutation) {
    const solvedPermutation = [...Array(16)].map((e,i) => (i));
    
    return JSON.stringify(permutation) === JSON.stringify(solvedPermutation);
}