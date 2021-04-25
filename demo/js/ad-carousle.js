/*
 * 轮播图特效
 * 日期：2020.11.12
 */
(function () {
	/* 获取元素 */
	let ad_menu = document.getElementById('ad-menu');
	let ad_menu_lis = ad_menu.getElementsByTagName('li');
	let right_btn = document.getElementById('right_btn');
	let left_btn = document.getElementById('left_btn');

	let idx = 0;
	/* 节流锁 */
	let lock = true;

	/* 右按钮事件监听 */
	right_btn.onclick = function () {
		if (!lock) {return;}
		lock = false;
		/* 获取li之间margin-right值 */
		let mar = parseInt(window.getComputedStyle(ad_menu_lis[0], null).getPropertyValue("margin-right"));

		/* 获取li的width */
		let wid = ad_menu_lis[0].offsetWidth;

		idx++;
		ad_menu.style.transform = `translateX(${-(mar+wid)*idx}px)`;
		ad_menu.style.transition = 'transform .5s ease 0s';
		if (idx >=6) {
			idx = 5;
			ad_menu.style.transform = `translateX(${-(mar+wid)*idx}px)`;
		}
		setTimeout(function () {
			lock = true;
		},500);
	}

	/* 左按钮事件监听 */
	left_btn.onclick = function () {
		if (!lock) {return;}
		lock = false;
		/* 获取li之间margin-right值 */
		let mar = parseInt(window.getComputedStyle(ad_menu_lis[0], null).getPropertyValue("margin-right"));
		/* 获取li的width */
		let wid = ad_menu_lis[0].offsetWidth;
		idx--;
		if (idx <= 0) {
			idx = 0;
			ad_menu.style.transform = `none`;
		}
		ad_menu.style.transform = `translateX(${-(mar+wid)*idx}px)`;
		ad_menu.style.transition = 'transform .5s ease 0s';
		setTimeout(function () {
			lock = true;
		},500);
	}

})();