function update2()
{
	$.ajax({
		url: "test/login",
		type: 'GET', //Type of HTTP request
	     crossDomain: true
	}).then(function(data)
			{		document.getElementById("startSessionBtn").innerHTML = "This button was clicked";
		document.getElementById("GetAllScansBtn").innerHTML = data;
			});
}

function update1()
{
	$.ajax({
        url: "test/login", //specified end point
        type: 'GET', //Type of HTTP request  
//        data: JSON.stringify(myJSON),
        contentType: 'application/json',
        crossDomain: true,
        
        success: function(data) { //Function to be performed when data is collected
        	document.getElementById("startSessionBtn").innerHTML = "This button was clicked";
        	document.getElementById("GetAllScansBtn").innerHTML = data;
        },
        error: function(xhr ,message, error) {
        	console.log("this is the message : " + message);
        	console.log("this is xhr :" + xhr.status);
        	console.log("this is xhr statusText : " + xhr.statusText);
        	console.log("this is error : " + error);
        	document.getElementById("startSessionBtn").innerHTML = "this failed";
        	document.getElementById("GetAllScansBtn").innerHTML = message;
        }
	});
}