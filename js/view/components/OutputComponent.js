/*
 PureMVC MultiCore Demo for JS - Sequential
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "view.components.OutputComponent",
    
    constructor: function() {
        this.output = document.getElementById("output");
    }
},
{
    output: null,
    logCount: 1,
    
    log: function(message) {
        output.innerHTML += this.logCount + ". " + message + "<br>";
        this.logCount++;
    }
},
{
}
);