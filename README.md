## [PureMVC](http://puremvc.github.com/) [JavaScript](https://github.com/PureMVC/puremvc-js-multicore-framework/wiki) Demo - Asynchronous Sequential
This demo illustrates the use of both AsyncCommand and AsyncProxy utility to execute a series of commands and async data operations, all asynchronous operations (WebSQL, AJAX etc.) must complete before the next command can be executed. 

The pseudo-classes are written in PureMVC's optional built-in style.

* [Discussion](http://forums.puremvc.org/index.php?board=66.0)

## Screenshot
![PureMVC JavaScript Demo: Async Sequential](https://github.com/sshams/puremvc-js-demo-async-sequential/blob/master/images/screenshot.png)

## Status
Production - [Version 1.0](https://github.com/sshams/puremvc-js-demo-async-sequential/blob/master/VERSION)

## Platforms / Technologies
* [JavaScript](http://en.wikipedia.org/wiki/JavaScript)

## Features 
Demonstrated are how to...
* Use AsyncCommand and AsyncProxy utility with PureMVC Framework
* Registers the StartupCommand to prepare the View and ExampleAsyncMacroCommand to register several Asynchronous Commands and Proxies
* ApplicationMediator upon registration with Facade sends a notification for the MacroCommand to execute.
* MacroCommands waits for the Asynchronous Command to complete before proceeding with the next command via a callback. Each Command also waits for the Asynchronous Proxy to complete before it proceeds with the next.
* Internet Explorer is not supported by this demo. In order to bring you a demo that shows only PureMVC and the DOM with no other interference or abstractions, we decided to support only on W3C compliant browsers.

## License
* PureMVC Javascript Demo - Asynchronous Sequential - Copyright © 2014 Saad Shams
* PureMVC - Copyright © 2006-2012 Futurescale, Inc.
* All rights reserved.

* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  * Neither the name of Futurescale, Inc., PureMVC.org, nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.