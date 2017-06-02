console.log('这是content script!');

document.addEventListener('DOMContentLoaded', function()
{
	// 给谷歌搜索结果的超链接增加 _target="blank"
	if(location.host == 'www.google.com.tw')
	{
		var objs = document.querySelectorAll('h3.r a');
		for(var i=0; i<objs.length; i++)
		{
			objs[i].setAttribute('_target', 'blank');
		}
		console.log('已处理谷歌超链接！');
	}
});

