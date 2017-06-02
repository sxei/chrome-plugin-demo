// 右键菜单演示
chrome.contextMenus.create({
	title: "测试右键菜单",
	onclick: function(){
		chrome.notifications.create(null, {
			type: 'basic',
			iconUrl: 'img/icon.png',
			title: '这是标题',
			message: '您刚才点击了自定义右键菜单！'
		});
	}
});
chrome.contextMenus.create({
	title: '使用度娘搜索：%s', // %s表示选中的文字
	contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
	onclick: function(params)
	{
		// 注意不能使用location.href，因为location是属于background的window对象
		chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
	}
});

// badge 演示
// chrome.browserAction.setBadgeText({text: 'new'});
// chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});

chrome.tabs.onCreated.addListener(function(activeInfo)
{
	//alert(activeInfo.tabId)
	console.log(activeInfo);
	chrome.pageAction.show(activeInfo.tabId);
});
