/* 
	Toggle the sidebar - useful for viewing comments when the width of the page is small.
	Defaults to off.
*/

var toggleSidebar = function(){
	if($('.side').attr('style')){if ($('.side').attr('style').match('none')){$('.side').css('display', 'block')}else{ $('.side').css('display', 'none')};}else{$('.side').css('display', 'none');}
}                           

var list = $('.tabmenu')[0];
var item = document.createElement('li');
item.innerHTML = '<a href="#">sidebar</a>';
item.onclick = toggleSidebar;
list.insertBefore(item, list.firstChild);

toggleSidebar();
