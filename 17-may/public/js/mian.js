function test(params) {
   console.log('Test') 
}


function testAjax() {
   $.get("/test", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
   });
}