/*
 * 轮播图特效
 * 日期：2020.11.12
 */
(function () {
	/* 获取元素 */
	let recom_list = document.getElementById('recom-list');
	let recom_list_lis = recom_list.getElementsByTagName('li');
	let recom_left_btn = document.getElementById('recom-left_btn');
	let recom_right_btn = document.getElementById('recom-right_btn');

	let idx = 0;
	/* 节流锁 */
	let lock = true;

	/* 右按钮事件监听 */
	recom_right_btn.onclick = function () {
		if (!lock) {return;}
		lock = false;
		/* 获取li之间margin-right值 */
		let mar = parseInt(window.getComputedStyle(recom_list_lis[0], null).getPropertyValue("margin-right"));

		/* 获取li的width */
		let wid = recom_list_lis[0].offsetWidth;

		idx++;
		recom_list.style.transform = `translateX(${-(mar+wid)*idx}px)`;
		recom_list.style.transition = 'transform .5s ease 0s';
		if (idx >=7) {
			idx = 6;
			recom_list.style.transform = `translateX(${-(mar+wid)*idx}px)`;
		}
		setTimeout(function () {
			lock = true;
		},500);
	}

	/* 左按钮事件监听 */
	recom_left_btn.onclick = function () {
		if (!lock) {return;}
		lock = false;
		/* 获取li之间margin-right值 */
		let mar = parseInt(window.getComputedStyle(recom_list_lis[0], null).getPropertyValue("margin-right"));
		/* 获取li的width */
		let wid = recom_list_lis[0].offsetWidth;
		idx--;
		if (idx <= 0) {
			idx = 0;
			recom_list.style.transform = `none`;
		}
		recom_list.style.transform = `translateX(${-(mar+wid)*idx}px)`;
		recom_list.style.transition = 'transform .5s ease 0s';
		setTimeout(function () {
			lock = true;
		},500);
	}

})();