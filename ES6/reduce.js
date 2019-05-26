var numbers = [10, 20, 30]
var sumValue = numbers.reduce((sum, number) => {
    return sum + number;
}, 0)
// console.log(sumValue)

var primaryColors = [{
        color: 'red'
    },
    {
        color: 'yellow'
    },
    {
        color: 'blue'
    }
]
var colors = primaryColors.reduce((previous, primaryColor) => {
    previous.push(primaryColor.color)
    return previous
}, [])
// console.log(colors)

function balanceParens(string) {
    return !string.split("").reduce((previous, char) => {
        if (previous < 0) {
            return previous
        }
        if (char == "(") {
            return ++previous
        }
        if (char == ")") {
            return --previous
        }
        return previous;
    }, 0)
}
console.log(balanceParens(")((()))"))
console.log(balanceParens("((()))"))