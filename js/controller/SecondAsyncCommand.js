/*
 PureMVC MultiCore Demo for JS - Sequential
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "controller.SecondAsyncCommand",
    parent: puremvc.asynccommand.AsyncCommand
},
{
    execute: function(notification) {
        var logMessage = "STARTING SECOND ASYNC COMMAND...";
        this.facade.sendNotification(view.OutputMediator.LOG_OUTPUT, logMessage);
        
        var self = this;
        var secondAsyncProxy = this.facade.retrieveProxy(model.SecondAsyncProxy.NAME);
        
        secondAsyncProxy.asyncAction(function(data){self.success(data)}, function(info){self.fail(info)});
    },
    
    success: function(data) {
        this.facade.sendNotification(view.OutputMediator.LOG_OUTPUT, data);
        var logMessage = "SECOND ASYNC COMMAND COMPLETE";
        this.facade.sendNotification(view.OutputMediator.LOG_OUTPUT, logMessage);
        this.commandComplete();
    },
    
    fail: function(info) {
        console.log('fail', info);   
    }
},
{
}
);