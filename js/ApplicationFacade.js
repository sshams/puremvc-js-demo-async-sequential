/*
 PureMVC MultiCore Demo for JS - Sequential
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: 'ApplicationFacade',
    parent: puremvc.Facade,
    
    constructor: function(multitonKey) {
        puremvc.Facade.call(this, multitonKey);
    }
},
{ 
    initializeController: function() {
        puremvc.Facade.prototype.initializeController.call(this);
        this.registerCommand(ApplicationFacade.STARTUP, controller.StartupCommand);
        this.registerCommand(ApplicationFacade.BEGIN_ASYNC_COMMANDS, controller.ExampleAsyncMacroCommand);
    },
    
    startup: function() {
        this.sendNotification(ApplicationFacade.STARTUP);
    }
},
{   
    getInstance: function(multitonKey) {        
        if(puremvc.Facade.instanceMap[multitonKey] == null) {
            puremvc.Facade.instanceMap[multitonKey] = new ApplicationFacade(multitonKey);
        }
        return puremvc.Facade.instanceMap[multitonKey];
    },
    
    STARTUP: "startup",
    LOG_OUTPUT: "logOutput",
    BEGIN_ASYNC_COMMANDS: "beginAsync"
}
);