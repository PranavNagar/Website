var infinity = {}
_default_lang_ = 'en'
infinity.i18n = function(name) {
	var text = ''
	var lang = navigator.language.replace('_', '-')
	try {
		if (__i18n__.hasOwnProperty(name)) {
			if (__i18n__[name].hasOwnProperty(lang)) {
				text = __i18n__[name][lang]
				return text
			} else {
				var lang2 = lang.split('-')[0]
				if (__i18n__[name].hasOwnProperty(lang2)) {
					text = __i18n__[name][lang2]
					return text
				} else {
					if (__i18n__[name].hasOwnProperty(_default_lang_)) {
						text = __i18n__[name][_default_lang_]
						return text
					} else {
						text = name
						return text
					}
				}
			}
		} else {
			text = name
			return text
		}
	} catch (e) {
		text = name
		return text
	}
	return text
}
infinity.isZh = function() {
	try {
		var lang = navigator.language.replace('_', '-')
		if (lang === 'zh-CN') {
			return true
		} else {
			return false
		}
	} catch (e) {
		return false
	}
}
Vue.prototype.vi18n = function(name) {
	return infinity.i18n(name)
};
Vue.directive('i18n', {
	//v-i18n="name"
	update: function(value) {
		name = this.expression
		this.el.innerHTML = infinity.i18n(name)
	}
})
Vue.directive('i18n-html', {
	//v-i18n-html="name"
	update: function(value) {
		name = this.expression
		this.el.innerHTML = infinity.i18n(name)
	}
})
Vue.directive('i18n-placeholder', {
	//v-i18n-placeholder="name"
	update: function() {
		var name = this.expression
		var value = infinity.i18n(name)
		this.el.setAttribute("placeholder", value)
	}
})
Vue.directive('i18n-data-text', {
	//v-i18n-data-text="name"
	update: function() {
		var name = this.expression
		var value = infinity.i18n(name)
		this.el.setAttribute("data-text", value)
	}
})
Vue.directive('i18n-title', {
	//v-i18n-title="name"
	update: function() {
		var name = this.expression
		var value = infinity.i18n(name)
		this.el.setAttribute("title", value)
	}
})
Vue.directive('i18n-value', {
	//v-i18n-value="name"
	update: function() {
		var name = this.expression
		var value = infinity.i18n(name)
		this.el.setAttribute("value", value)
	}
})