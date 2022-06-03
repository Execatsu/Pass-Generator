const caracs = {
    downcase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    simbols: ["@", "#", "$", "&", "!", "?", "%"]
}

function randomInt(max) {
    return parseInt(Math.random() * max);
}

function genPass(args, cont) {
    if (!args) return "You forgot to type the arguments";
    let pass = "";

    if (typeof args == "number") {
        if (args <= 0) return "Type a size greater than 1";
        else if (!cont) return randomPass(caracs.downcase, args);
        else if (Array.isArray(cont) && cont.length == 4) return randomPass(selCaracs(cont), args);
        else return "An error has occurred! Review the data so it doesn't happen again";
    }

    if (Array.isArray(args) && Array.isArray(cont)) {
        args.forEach(arg => {
            if (typeof arg != "string") { console.log("An error has occurred! Review the data so it doesn't happen again") }
            else if (arg.startsWith("-")) { pass += arg.slice(1) }
            else {
                for (i in arg) {
                    const char = arg[i];
                    switch(char) {
                        case "d": pass += randomPass(caracs.downcase); break;
                        case 'u': pass += randomPass(caracs.uppercase); break;
                        case 'n': pass += randomPass(caracs.numbers); break;
                        case 's': pass += randomPass(caracs.simbols); break;
                        case 'r': pass += randomPass(selCaracs([true, true, true, true])); break;
                        default: console.log("An error has occurred! Review the data so it doesn't happen again");
                    }
                }
            }
        });
    }

    return pass;
}

function randomPass(arr, size) {
    let pass = "";
    if (!size || size <= 0) size = 1;
    for (let i = 0; i < size; i++) {
        pass += arr[randomInt(arr.length)];
    }
    return pass;
}

function selCaracs(arr) {
    let caracteres = [];
    
    if (arr[0]) caracteres = caracteres.concat(caracs.downcase);
    if (arr[1]) caracteres = caracteres.concat(caracs.uppercase);
    if (arr[2]) caracteres = caracteres.concat(caracs.numbers);
    if (arr[3]) caracteres = caracteres.concat(caracs.simbols);

    return caracteres;
}

console.log(genPass(10));
console.log(genPass(20, [true, true, true, false]));
console.log(genPass(["uuuddd", "-@", "nnn"], [true, true, true, false]));