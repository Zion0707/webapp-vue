// rem 尺寸设置
export const remSize = () => {
	var docEl = document.documentElement,
		Size = docEl.clientWidth / (750 / 40);
	docEl.style.fontSize = Size + 'px';
	if (Size >= 25) {
		Size = 20;
		docEl.style.fontSize = '20px';
	}
}

// 安卓返回键事件劫持
export const returnKeyEvent = (toast) => {
	document.addEventListener('plusready', function() {
		var webview = plus.webview.currentWebview();
		plus.key.addEventListener('backbutton', function() {
			webview.canBack(function(e) {
				if (e.canBack) {
					webview.back();
				} else {
					//webview.close(); //hide,quit
					//plus.runtime.quit();
					//首页返回键处理
					//处理逻辑：1秒内，连续两次按返回键，则退出应用；
					var first = null;
					plus.key.addEventListener('backbutton', function() {
						//首次按键，提示‘再按一次退出应用’
						if (!first) {
							toast('再按一次退出应用');
							first = new Date().getTime();
							setTimeout(function() {
								first = null;
							}, 1000);
						} else {
							if (new Date().getTime() - first < 1500) {
								plus.runtime.quit();
							}
						}
					}, false);
				}
			})
		});
	});
}
