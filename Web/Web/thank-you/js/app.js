var app = new Vue({
	'el': '#thank-you',
	data:{
		isEdge:(navigator.userAgent.indexOf('Edg')!=-1)
	},
	created: function() {
		var me = this;
		console.log(me.isEdge);
		var utm = me.getUtm();
		if (utm) {
			$.ajax({
				url: 'https://items.extfans.com/distribute/uninstall',
				data: utm
			});
		}
	},
	methods: {
		getUtm: function() {
			var cookie = document.cookie;
			var cookiePairs = cookie.split('; ');

			var paramMap = {};

			try {
				var i, ii, cookiePair;
				for (i = 0, ii = cookiePairs.length; i < ii; i++) {
					cookiePair = cookiePairs[i].split('=');
					paramMap[
						decodeURIComponent(cookiePair[0])
					] = decodeURIComponent(cookiePair[1]);
				}
			} catch (e) {
				
			}

			var utm = paramMap['infinity_utm'];
			if (utm) {
				try {
					utm = JSON.parse(utm);
				} catch (e) {
					utm = undefined;
				}

				document.cookie = 'infinity_utm=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
			}

			return utm;
		},
		isZh: function() {
			return infinity.isZh()
		},
		toStore: function() {
			if(this.isEdge){
				window.open('https://microsoftedge.microsoft.com/addons/detail/hajlmbnnniemimmaehcefkamdadpjlfa', '_blank');
			}else{
				window.open('https://chrome.google.com/webstore/detail/infinity-new-tab-pro/nnnkddnnlpamobajfibfdgfnbcnkgngh', '_blank');
			}
		},
		feedback: function() {
			if (infinity.isZh()) {
				window.open('http://infinity.mikecrm.com/BJuznWx', '_blank')
			} else {
				window.open('http://sv.mikecrm.com/T8isVzf', '_blank')
			}
		},
		downloadCrx: function(e) {
			e.preventDefault()
			//window.open('https://infinity-permanent.infinitynewtab.com/crx/infinity-pro.crx?v'+new Date().getTime(),'_blank')
			var a = document.createElement('a')
			a.href = 'https://infinity-permanent.infinitynewtab.com/crx/infinity-pro.crx?v' + new Date().getTime()
			a.download = 'infinity-pro.crx'
			a.click()
		}
	}
})