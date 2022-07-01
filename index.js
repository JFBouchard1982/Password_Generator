const randomBtnOne = document.getElementById("random-btn1") 
const randomBtnTwo = document.getElementById("random-btn2")
const GeneratePW = document.getElementById("generate-btn")

function copy(that){
let inp =document.createElement('input');
document.body.appendChild(inp)
inp.value =that.textContent
inp.select();
document.execCommand('copy',false);
inp.remove();
}

function makeid(length) {
    let result           = '';
    let characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|:;<>,.?'"
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
// console.log(makeid(15))

GeneratePW.addEventListener ("click", function()  {
            randomBtnTwo.textContent = makeid(15)
            randomBtnOne.textContent = makeid(15)
})
