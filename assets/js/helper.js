
// counts number of blogs
// oh!! seriously?
// the function name suggested me that it destroys the universe! 
function countBlogs(callback){	
	$.post("/blog.txt", function(data){
		var array = JSON.parse(data)["blogs"]		
		callback(array.length-1)
	});		
}

function getBlogData(id, callback){
	$.post('/blog.txt', function(data){
		var array = JSON.parse(data)['blogs'][id]
		callback(array)
	})
}
