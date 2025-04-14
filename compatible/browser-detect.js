/**
 * 浏览器和设备检测工具
 * 用于判断是否需要重定向到极简版页面
 */
;(function () {
  // 检测是否需要使用极简版
  function shouldUseLiteVersion() {
    // 如果用户之前选择了极简版，继续使用极简版
    if (getCookie('useLiteVersion') === 'true') {
      return true
    }

    // 检测是否为移动设备
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )

    // 检测老旧浏览器
    var isOldBrowser = checkOldBrowser()

    // 检测低性能设备
    var isLowPerformance = checkLowPerformance()

    // 如果是老旧浏览器或低性能设备，使用极简版
    return isOldBrowser || isLowPerformance
  }

  // 检测旧浏览器
  function checkOldBrowser() {
    var ua = navigator.userAgent

    // 检测旧版IE (IE 10及以下)
    if (/MSIE/.test(ua) || /Trident\/[1-6]\./.test(ua)) {
      return true
    }

    // 检测旧版Android浏览器
    if (/Android/.test(ua) && /Version\/[1-4]\./.test(ua) && !/Chrome/.test(ua)) {
      return true
    }

    // 检测旧版Opera
    if (
      /Opera/.test(ua) &&
      !/OPR/.test(ua) &&
      parseInt(ua.match(/Opera[\/\s](\d+)/) && ua.match(/Opera[\/\s](\d+)/)[1]) < 15
    ) {
      return true
    }

    // 检测旧版UC浏览器
    if (
      /UCBrowser/.test(ua) &&
      parseInt(ua.match(/UCBrowser[\/\s](\d+)/) && ua.match(/UCBrowser[\/\s](\d+)/)[1]) < 11
    ) {
      return true
    }

    // 检测旧版Opera Mini
    if (/Opera Mini/.test(ua)) {
      return true
    }

    return false
  }

  // 检测低性能设备
  function checkLowPerformance() {
    // 屏幕尺寸小于320px视为低性能设备
    if (screen.width < 320 || screen.height < 480) {
      return true
    }

    // 尝试检测设备内存（如果浏览器支持）
    if (navigator.deviceMemory && navigator.deviceMemory < 2) {
      return true
    }

    // 尝试检测设备核心数（如果浏览器支持）
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 2) {
      return true
    }

    return false
  }

  // 读取Cookie
  function getCookie(name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }

  // 设置Cookie
  function setCookie(name, value, days) {
    var expires = ''
    if (days) {
      var date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/'
  }

  // 检查是否应该重定向
  function checkRedirect() {
    // 当前页面URL
    var currentPath = window.location.pathname

    // 如果当前已经在极简版页面，不需要重定向
    if (currentPath.indexOf('downloads-lite.html') !== -1) {
      setCookie('useLiteVersion', 'true', 30) // 记住用户正在使用极简版
      return
    }

    // 如果当前在标准页面，但需要极简版
    if (currentPath.indexOf('downloads.html') !== -1 && shouldUseLiteVersion()) {
      // 重定向到极简版
      window.location.href = 'downloads-lite.html'
    }
  }

  // 在页面加载后执行检查
  if (window.addEventListener) {
    window.addEventListener('load', checkRedirect)
  } else if (window.attachEvent) {
    window.attachEvent('onload', checkRedirect)
  } else {
    var oldOnload = window.onload
    window.onload = function () {
      if (oldOnload) oldOnload()
      checkRedirect()
    }
  }
})()
