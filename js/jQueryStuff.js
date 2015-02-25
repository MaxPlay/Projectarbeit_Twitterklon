/** Code is poetry **/

$(document).ready(function() {
	$(".menu").mouseenter(function(){
		$(".menuVolume").fadeIn("fast");
	});
	$(".menu").mouseleave(function(){
		$(".menuVolume").fadeOut("fast");
	});
	
	
	$(".login").click(function(){
		$(".loginVolume").fadeIn("fast");
	});
	$(document).mouseup(function(e){
		/** Thanks to Mark Amery from StackOverflow **/
		var container = $(".login");
		if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
		{
			$(".loginVolume").fadeOut("fast");
		}
	});
	
	$(".deleteAccount").click(function() {
		if($(this).height() == '120')
		{
		$(this).animate({
			height:'20px'
		});
		$(".deleteInner").fadeOut();
		return;
		}
		
		if($(this).height() == '20')
		{
		$(".deleteInner").fadeIn();
		$(this).animate({
			height:'120px'
		});
		}
	});
	
	//This code is for posting stuff to the timeline
	$('#postForm').on('submit',function(e) {

		$.ajax({
		url:'createPost.php',
		data: { 'Post': document.getElementById("postTextAreaSide").innerHTML},
		type:'POST',
		success:function(data){
			console.log(data);
			document.getElementById("postTextAreaSide").innerHTML = "";
			document.getElementById("postLengthValueSide").innerHTML = "1000";
			},
		error:function(data){
			$("#SentError").fadeIn("fast").delay(2000).fadeOut();
			}
		});
	e.preventDefault(); //=== To Avoid Page Refresh and Fire the Event "Click"===
	});
	
	$(function getInformation() {
	$.ajax({url: "getUserStuff.php?v=0&User=2", success: function(result){
        $(".FollowedCount").html(result);
    }});
	$.ajax({url: "getUserStuff.php?v=1&User=2", success: function(result){
        $(".FollowerCount").html(result);
    }});
	$.ajax({url: "getUserStuff.php?v=2&User=2", success: function(result){
        $(".PostCount").html(result);
    }});
    setTimeout(arguments.callee, 200);
	});
	
});