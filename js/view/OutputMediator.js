/*
 PureMVC MultiCore Demo for JS - Sequential
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "view.OutputMediator",
    parent: puremvc.Mediator,
    
    constructor: function(viewComponent) {
        puremvc.Mediator.call(this, this.constructor.NAME, viewComponent);
    }
},
{
    onRegister: function() {
        this.sendNotification(ApplicationFacade.BEGIN_ASYNC_COMMANDS);
    },
    
    listNotificationInterests: function() {
        return [
            view.OutputMediator.LOG_OUTPUT
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case view.OutputMediator.LOG_OUTPUT:
                var logMessage = notification.getBody();
                this.viewComponent.log(logMessage);
                break;
        }
    }
},
{
    NAME: "OutputMediator",
    LOG_OUTPUT: "OutputMediator_LOG_OUTPUT"
}
);