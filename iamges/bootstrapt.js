document.getElementById("parseButton").addEventListener("click", function () {
  const interfaceSelect = document.getElementById("interfaceSelect");
  const videoUrl = document.getElementById("videoUrl").value;
  const selectedInterface = interfaceSelect.options[interfaceSelect.selectedIndex].value;
  const toastLiveExample = document.getElementById("liveToast");

  if (videoUrl) {
    let iframeSrc;
    switch (selectedInterface) {
      case "route1":
        iframeSrc = "https://jx.xmflv.cc/?url=" + videoUrl;
        break;
      case "route2":
        iframeSrc = "https://jx.xmflv.com/?url=" + videoUrl;
        break;
      case "route3":
        iframeSrc = "https://www.8090g.cn/?url=" + videoUrl;
        break;
      case "route4":
        iframeSrc = "http://www.jzmhtt.com/zdy/vip/?url=" + videoUrl;
        break;
      case "route5":
        iframeSrc = "https://www.yemu.xyz/?url=" + videoUrl;
        break;
      case "route6":
        iframeSrc = "https://jx.m3u8.tv/jiexi/?url=" + videoUrl;
        break;
      case "route7":
        iframeSrc = " https://www.playm3u8.cn/jiexi.php?url=" + videoUrl;
        break;
      case "route8":
        iframeSrc = "https://jx.xymp4.cc/?url=" + videoUrl;
        break;
      case "route9":
        iframeSrc = " https://www.ckplayer.vip/jiexi/?url=" + videoUrl;
        break;
      case "route10":
        iframeSrc = "https://www.pangujiexi.com/jiexi/?url=" + videoUrl;
        break;
      case "route11":
        iframeSrc = "https://www.pangujiexi.com/jiexi/?url=" + videoUrl;
        break;
    }
    document.getElementById("videoPlayer").src = iframeSrc;
  } else {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  }
});
