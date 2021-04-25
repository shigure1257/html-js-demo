/*
 * 轮播图特效
 * 日期：2020.11.12
 */

 (function () {
 	/* 获取元素 */
 	let banner_lis = document.getElementById('carousel_list');
 	let dots_ol = document.getElementById('dots');
 	let dots_lis = dots_ol.getElementsByTagName('li');
 	let banner = document.getElementById('banner');

 	let idx = 0;

 	/* 设置圆点随图片的变化而变化。 */
 	function setdots () {
 		for (let i = 0;i < dots_lis.length; i++) {
 			dots_lis[i].className = '';
 			if (i == idx) {
 				dots_lis[i].className = 'current';
 			}
 		}
 	}

 	/* 点击圆点转到相应的banner图 */
 	dots_ol.onclick = function (e) {
 		let tar = e.target;
 		if (tar.tagName.toLowerCase() == 'li') {
 			idx = Number(tar.getAttribute('data-n'));
 			banner_lis.style.transform = `translateX(${idx * -33.33}%)`;
 			setdots();
 		}
 	}

 	/* 自动轮播 */
 	function autorun () {
 		idx ++;
 		if (idx > 2) {
 			idx = 0;
 			banner_lis.style.transform = 'none';
 		}
 		else {
 			banner_lis.style.transform = `translateX(${idx * -33.33}%)`;
 		}
 		setdots();
 	}

 	let timer = setInterval(autorun,2000);

 	/* 鼠标碰到banner停止轮播,离开继续轮播 */

 	banner.onmouseenter = function () {
 		clearInterval(timer);
 	};

 	banner.onmouseleave = function () {
 		clearInterval(timer);
		timer = setInterval(autorun, 2000);
 	}
 })();