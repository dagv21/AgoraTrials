$(document).ready(function(){
        var WEBSOCKET_ROUTE = "/calibration.html/ws";

        if(window.location.protocol == "http:"){
            //localhost
            var ws = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
        }
        else if(window.location.protocol == "https:"){
            //Dataplicity
            var ws = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
        }

        ws.onopen = function(evt) {
            $("#ws-status").html("Connected");
            };

        ws.onmessage = function(evt) {
            $("#ws-status").html("Sending Message");
            };

        ws.onclose = function(evt) {
            $("#ws-status").html("Disconnected");
            };

        





      });
 
