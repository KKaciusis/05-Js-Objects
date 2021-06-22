"use strict";

document.getElementById("calculate").addEventListener("click", () => {
    let number1 = parseFloat(document.getElementById("number1").value) , number2 = parseFloat(document.getElementById("number2").value);

    const calculator = {
        starup : function(a,b) {
            this.number1 = a;
            this.number2 = b;
        },
        summed : function(){
            let summ;
            summ = this.number1 + this.number2;
            return summ;
        },
        subtracted : function(){
            let subtr;
            subtr = this.number1 - this.number2;
            return subtr;
        },
        multiplied : function(){
            let mult;
            mult = this.number1 * this.number2;
            return mult;
        },
        divided : function(){
            let divide;
            divide = this.number1 / this.number2;
            return divide;
        },
        root : function(){
            let rot;
            rot = this.number1 ** (1 / this.number2)
            return rot;
        },
        remainder : function(){
            let rem;
            rem = this.number1 % this.number2;
            return rem;
        },
        resArray : function(){
            let array = [ this.summed(), this.subtracted(), this.multiplied(), this.divided(), this.root(), this.remainder()];
            return array;
        },
        resArrayMed : function(){
            let med;
            med = (this.summed() + this.subtracted() + this.multiplied() + this.divided() + this.root() + this.remainder()) / 6;
            return med;
        },
        result : function(){
            document.getElementById("summed").innerHTML = "Summed: " + this.summed();
            document.getElementById("subtracted").innerHTML = "Subtracted: " + this.subtracted();
            document.getElementById("multiplied").innerHTML = "Multiplied: " + this.multiplied();
            document.getElementById("divided").innerHTML = "Divided: " + this.divided();
            document.getElementById("root").innerHTML = "Root: " + this.root();
            document.getElementById("remainder").innerHTML = "Remeinder: " + this.remainder();
            document.getElementById("resArray").innerHTML = "Array of results: " + this.resArray();
            document.getElementById("resArrayMed").innerHTML = "Median of result array: " + this.resArrayMed();
        }
    };
calculator.starup(number1,number2);
calculator.result();
    })
