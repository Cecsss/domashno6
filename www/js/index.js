function testAction() {    
	document.querySelector('#largeBtn').setAttribute('modifier', 'cta');
  };
document.addEventListener('init', function(event) {

ons.ready(function() {
  // JS код и използване на Cordova API  
  document.getElementById("deviceInfo").innerHTML="Version "+ device.version + ". Platform " + device.platform;

  window.addEventListener('batterystatus', example, false);

function example(status){
	document.getElementById("batteryRange").value=status.level;
	if (status.level<30)
		ons.notification.toast('Battery low: ' + status.level + '%', { timeout: 2000});
}
});

});
