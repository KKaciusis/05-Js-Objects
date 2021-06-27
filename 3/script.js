"use strict";

document.getElementById("calc").addEventListener("click", function() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let squere = {
        start: function(one, two){
        this.a = one;
        this.b = two;

        },
        perimeterPlot: function(){
            let plot = this.a * this.b;
            let perimeter = 2 * this.a + 2* this.b;
            return [plot, perimeter];

        },
        istrizaine: function(){
            let ist;
            ist = Math.sqrt(this.a * this.a + this.b * this.b);
            return ist;            
        },
    }
    squere.start(a, b);
document.getElementById("plotas").innerText = "Kvadrato plotas = " + squere.perimeterPlot()[0];
document.getElementById("perimetras").innerText = "Kvadrato perimetras = " + squere.perimeterPlot()[1];
document.getElementById("isstrizaine").innerText = "Kvadrato isstrizaine = " + squere.istrizaine();
})
