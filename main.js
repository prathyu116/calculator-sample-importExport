const add= require("./add")
const substract=require("./subtract")
const divide=require("./divide")
const multiply=require("./multiply")


function main(x,y){
    console.log(`${x}+${y}=`,add(x,y))
    console.log(`${x}-${y}=`,substract(x,y))
    console.log(`${x}/${y}=`,divide(x,y))
    console.log(`${x}*${y}=`,multiply(x,y))
}
main(10,5)