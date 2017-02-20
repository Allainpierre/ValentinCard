var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

var app = angular.module('app', []);

app.controller("contentCtrl", function($scope, $http) {
	$http.get('content.json').then(function(data) {
		$scope.data = data.data;
		$("#form").submit(function() {
			$.ajax({
				url : 'random.php',
				type : 'POST', 
				data : 'subtitle=' + $("#subtitle").text() + "&describ_title=" + $("#describ_title").text() + "&title=" + $("#title").text() + "&subtitle_title=" + $("#subtitle_title").text() + "&img1=" + $("#file1").val().split("\\")[2] + "&img2=" + $("#file2").val().split("\\")[2],
				dataType : 'json'
			});
		});
		$("#subtitle").bind('input propertyChange',function() {
			$.ajax({
				url : 'random.php',
				type : 'POST', 
				data : 'subtitle=' + $("#subtitle").text() + "&describ_title=" + $("#describ_title").text() + "&title=" + $("#title").text() + "&subtitle_title=" + $("#subtitle_title").text() + "&img1=" + data.data.img1 + "&img2=" + data.data.img2,
				dataType : 'json'
			});
		});
		$("#describ_title").bind('input propertyChange',function() {
			$.ajax({
				url : 'random.php',
				type : 'POST', 
				data : 'subtitle=' + $("#subtitle").text() + "&describ_title=" + $("#describ_title").text() + "&title=" + $("#title").text() + "&subtitle_title=" + $("#subtitle_title").text() + "&img1=" + data.data.img1 + "&img2=" + data.data.img2,
				dataType : 'json'
			});
		});
		$("#title").bind('input propertyChange',function() {
			$.ajax({
				url : 'random.php',
				type : 'POST', 
				data : 'subtitle=' + $("#subtitle").text() + "&describ_title=" + $("#describ_title").text() + "&title=" + $("#title").text() + "&subtitle_title=" + $("#subtitle_title").text() + "&img1=" + data.data.img1 + "&img2=" + data.data.img2,
				dataType : 'json'
			});
		});
		$("#subtitle_title").bind('input propertyChange',function() {
			$.ajax({
				url : 'random.php',
				type : 'POST', 
				data : 'subtitle=' + $("#subtitle").text() + "&describ_title=" + $("#describ_title").text() + "&title=" + $("#title").text() + "&subtitle_title=" + $("#subtitle_title").text() + "&img1=" + data.data.img1 + "&img2=" + data.data.img2,
				dataType : 'json'
			});
		});
	});
});