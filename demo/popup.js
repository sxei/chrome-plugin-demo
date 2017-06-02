var bg = chrome.extension.getBackgroundPage();
function add(name,url)
{
  var path=bg.localStorage.path||'[]';
  path=JSON.parse(path);
  path.push([name,url]);
  bg.localStorage.path=JSON.stringify(path);
  return path;
}
function init()
{
  var path=JSON.parse(bg.localStorage.path||'[]');
  var html='';
  for(var i=0;i<path.length;i++)
    html+='<tr><td>'+path[i][0]+'</td><td>'+path[i][1]+'</td></tr>';
  $('#table').append(html);
}
$(function()
{
    init();
    $('#add').click(function()
    {
        var name=$('#name').val(),url=$('#url').val();
        add(name,url);
        $('#table').append('<tr><td>'+name+'</td><td>'+url+'</td></tr>');
    });
});

