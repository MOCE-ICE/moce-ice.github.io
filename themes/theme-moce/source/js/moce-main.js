function tabHide() {
	mdui.$('#tab').show();
	let foo = mdui.$('body').hasClass('mdui-appbar-with-tab');
	if (foo == true) {
		mdui.$('body').removeClass('mdui-appbar-with-tab');
		mdui.$('#tab').removeClass('tab-pinned');
		mdui.$('#tab').addClass('tab-unpinned');
	} else {
		mdui.$('body').addClass('mdui-appbar-with-tab');
		mdui.$('#tab').removeClass('tab-unpinned');
		mdui.$('#tab').addClass('tab-pinned');
	}
}
document.addEventListener('scroll', () => {
    let elem = document.getElementById('gototop');
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop === 0) {
        if (elem.className.indexOf('mdui-fab-hide') === -1) {
            elem.classList.add('mdui-fab-hide');
        }
    } else {
        if (elem.className.indexOf('mdui-fab-hide') !== -1) {
            elem.classList.remove('mdui-fab-hide');
        }
    }
})