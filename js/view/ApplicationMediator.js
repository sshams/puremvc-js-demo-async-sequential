/*
 PureMVC MultiCore Demo for JS - Sequential
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "view.ApplicationMediator",
    parent: puremvc.Mediator,
    
    constructor: function(viewComponent) {
        puremvc.Mediator.call(this, this.constructor.NAME, viewComponent);
    }
},
{
    onRegister: function() {
        var output = new view.components.OutputComponent();
        this.facade.registerMediator(new view.OutputMediator(output));
    }
},
{
    NAME: "ApplicationMediator"
}
);