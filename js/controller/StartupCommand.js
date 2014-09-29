/*
 PureMVC MultiCore Demo for JS - Sequential
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "controller.StartupCommand",
    parent: puremvc.SimpleCommand
},
{
    execute: function(notification) {
        var app = notification.getBody();
        
        this.facade.registerProxy(new model.FirstAsyncProxy());
        this.facade.registerProxy(new model.SecondAsyncProxy());
        this.facade.registerProxy(new model.ThirdAsyncProxy());
        
        this.facade.registerMediator(new view.ApplicationMediator(app));
    }
},
{
}
);