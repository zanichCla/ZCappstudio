/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function cordovaDevice() {
   var isbn_in=document.getElementById("input_isbn").value;
   //alert(isbn_in);
   
   console.log('Received Event: deviceready');
		var request = new XMLHttpRequest();
		request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+isbn_in, true);

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
			// Success!
			var resp = request.responseText;
			console.log(resp);
		  } else {
			// We reached our target server, but it returned an error
            console.log('error 1');  
		  }
		};

		request.onerror = function() {
		   console.log('error 2'); 
		  // There was a connection error of some sort
		};

		request.send();
}
 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		debugger;
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.getElementById("cordovaDevice").addEventListener("click", cordovaDevice);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    
	
	
	onDeviceReady: function() {
        app.receivedEvent();
		//OttieniDatiIsbn();
		
    },
    // Update DOM on a Received Event
    receivedEvent: function() {
        
		
    }
};

app.initialize();