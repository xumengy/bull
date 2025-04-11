(function() {

    // if (document.cookie.includes("v_token=valid")) return;
    
    // 生成唯一验证ID（防止重复利用）
    const verifyId = Math.random().toString(36).substr(2, 8) + Date.now();

    // 异步发送验证信标（HEAD方法避免阻塞）
    navigator.sendBeacon && navigator.sendBeacon('/-verify-?id=' + verifyId);

    // 兼容旧浏览器的备选方案
    if (!navigator.sendBeacon) {
        fetch('/-verify-?id=' + verifyId, { method: 'HEAD', keepalive: true });
    }
})();