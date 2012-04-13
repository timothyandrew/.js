/*
	Hide the entered/left the room notifications, as well as their timestamps
*/

$(".enter_message").hide();
$(".kick_message").hide();
$(".leave_message").hide();
$(".advertisement_message").remove();

arr = $(".message");
arr.each(function(i){
	if(arr[i].className.match('timestamp_message') !== null){
		if(arr[i+1].className.match('text_message') == null){
			$("#" + arr[i].id).hide();		
		}
	}
});
