$(document).ready(function(){
	// Get blog data
	$.get('/blog.txt', function(data){				
		var array = JSON.parse(data)["blogs"];
		var html = ""
		var len = array.length
		// console.log(array.length)		
		for(x in array){			
			x = parseInt(len-x-1)
			// console.log(x)
			html+="<div class='page-header'><a href='/post.html?"+x+"'>"+array[x]['title']+"</a><br>Added on: "+array[x]['date']+"</div>";
		}
		$("#blog_list").html(html)
	}).error(function(){
		console.log("dher")
	});	
});