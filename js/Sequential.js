/*
 PureMVC MultiCore Demo for JS - Sequential
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "Sequential",
    
    constructor: function() {
        this.init();
    }
},
{
    init: function() {
        ApplicationFacade.getInstance(Sequential.NAME).startup(); 
    }
},
{
    NAME: "Sequential"
}
);