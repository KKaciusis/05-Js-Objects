"use strict";

document.getElementById("generate").addEventListener("click", () => {
const array = [];
const object = {};
for (let i=0; i<100; i++) {
    object[i+1] = {
    id: i+1,
    name: "name"+[i+1]}                    
    array[i] = object[i+1];

    console.log(array[i])}})