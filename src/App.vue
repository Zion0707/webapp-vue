<template>
	<div id="app">
		<router-view></router-view>
		<van-button @click="getClientInfo">点击获取信息</van-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods:{
			// 获取用户信息
			getClientInfo(){
				if(!window.plus) return;
				
				console.log( plus.push.getClientInfo() );
			},
		},
		
		mounted() {
			if(!window.plus) return;
			
			/* 消息推送 */
			document.addEventListener('plusready', function() {
				plus.push.addEventListener("click", function(msg) {
					plus.ui.alert("click:" + JSON.stringify(msg));
					plus.ui.alert(JSON.stringify(msg.payload));
				}, false);
				
				// 监听在线消息事件    
				plus.push.addEventListener("receive", function(msg) {
					// plus.ui.alert(2);  
					plus.ui.alert("recevice:" + JSON.stringify(msg))
				}, false);
			});
			
		}
	}
</script>
