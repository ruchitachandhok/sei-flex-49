let secretVariable = 7;
function doStuff() {
    console.log("doing stuff")
}

// anything listed here
//   is accesible by importers
module.exports = {
    secretVariable: secretVariable,
    doStuff: doStuff,
}