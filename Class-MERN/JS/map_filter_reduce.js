const users = [
    {
        firstName: "aaaa",
        lastName: "AAAA",
        age: 26
    },
    {
        firstName: "bbb",
        lastName: "BBBb",
        age: 75
    },
    {
        firstName: "cccc",
        lastName: "CCC",
        age: 50
    },
    {
        firstName: "dddd",
        lastName: "DDDD",
        age: 26
    },
]

const output1 = users.reduce((acc, cur) => {
    if (acc[cur.age]) {
        acc[cur.age] = ++acc[cur.age]
    } else {
        acc[cur.age] = 1;
    }

    return acc;
}, {})


console.log(output1)

const output2 = users.filter(x => x.age > 30).map((x) => x.firstName)
console.log(output2)

const output3 = users.reduce((acc, cur) => {
    if (cur.age> 30) {
        acc.push(cur.firstName)
    }

    return acc;
}, [])

console.log(output3)
