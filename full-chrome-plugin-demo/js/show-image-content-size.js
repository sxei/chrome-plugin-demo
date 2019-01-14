// 鉴于浏览器默认不会显示图片的体积大小，每次都需要保存到本地才能查看到大小
// 故通过插件的方式强行修改图片页的标题
fetch(location.href).then(resp => resp.blob()).then(blob => {
	var size = blob.size;
	size = (size / 1024).toFixed(2) + ' kb';
	document.title = '(' + size + ')' + document.title;
	console.log(size);
});
