// 修改函数以接受m3u8 URL作为参数
function initCustomHLSPlayer(m3u8Url) {
    var video = document.getElementById('video');
    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(m3u8Url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = m3u8Url;
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    }
}

// 你可以选择移除自动执行的代码，改为让用户手动调用函数并传递URL
