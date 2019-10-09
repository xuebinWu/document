/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "48ac0df10dc705f64c123379af8060fd"
  },
  {
    "url": "assets/css/0.styles.2be7ae2e.css",
    "revision": "1658cf52813b7f8dec071b7d78d0b67e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a8276c23.js",
    "revision": "cf30ea7fdba5aef0d94f47c0f24fc364"
  },
  {
    "url": "assets/js/11.3f6da504.js",
    "revision": "42236f185bc78828aaad4fc605de5da1"
  },
  {
    "url": "assets/js/12.05c5d53d.js",
    "revision": "95bac701419656bf25864bd090d71acd"
  },
  {
    "url": "assets/js/13.49bd9819.js",
    "revision": "f3817680bee97bf36fc50cb59dc7e49f"
  },
  {
    "url": "assets/js/14.62a45e5f.js",
    "revision": "e8f12d35007cfd49a21e964d5b48f41e"
  },
  {
    "url": "assets/js/15.2ac37c3d.js",
    "revision": "3860ca13d84385d533a5228446c0c81d"
  },
  {
    "url": "assets/js/16.2f49b0bb.js",
    "revision": "8853c02fbe82c0a742cb8d598f60b1be"
  },
  {
    "url": "assets/js/17.b216634c.js",
    "revision": "877934231594d7034e176157e54f106c"
  },
  {
    "url": "assets/js/18.53ff386f.js",
    "revision": "54a464c3ade30d3bd0ba76fcfd3e97c9"
  },
  {
    "url": "assets/js/19.3384837b.js",
    "revision": "a078fbb9a5ffee08eb90755ae217e174"
  },
  {
    "url": "assets/js/2.2018ae8e.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.7e5db5e4.js",
    "revision": "57499d62a1b5e7af82be82aff34d8e9f"
  },
  {
    "url": "assets/js/21.38a6306e.js",
    "revision": "4bb4226343917a0af182c888d0687f8c"
  },
  {
    "url": "assets/js/22.8f58bc15.js",
    "revision": "b9aadf84dd760e3f79c905caf83e2c46"
  },
  {
    "url": "assets/js/23.5ddb58b7.js",
    "revision": "d3629a644e44d3a8b2dcd89cc4bf904b"
  },
  {
    "url": "assets/js/24.779ba7e1.js",
    "revision": "9a2bd374e737164c0ace84544ff42879"
  },
  {
    "url": "assets/js/25.6920b472.js",
    "revision": "ba5993a5ff044c28f7a8656f366b3c2d"
  },
  {
    "url": "assets/js/26.88e73f2e.js",
    "revision": "073d15ba91664c528860275d99a00baf"
  },
  {
    "url": "assets/js/27.6452d7a2.js",
    "revision": "7b6a9593385e5b7185ba8f86b58af94e"
  },
  {
    "url": "assets/js/28.2258e548.js",
    "revision": "9709e2b7a0c6c158fb0313c6a271ee9c"
  },
  {
    "url": "assets/js/29.cf70c8b9.js",
    "revision": "60a0ca234bead915c05824c9b3fb8425"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.88adeec9.js",
    "revision": "05af8ce388c45a675280e617ba2fe9b1"
  },
  {
    "url": "assets/js/31.305cd14d.js",
    "revision": "501d8af924f9f13a957b6feba56eb043"
  },
  {
    "url": "assets/js/32.1722e241.js",
    "revision": "a14fe61d11c3fdb0d81c00af777baa01"
  },
  {
    "url": "assets/js/33.8b8dad2b.js",
    "revision": "93bbdd1d7cbe33444d91ddc0b1743016"
  },
  {
    "url": "assets/js/4.224869dc.js",
    "revision": "4be9025e883ee94f23ae4f980aa36763"
  },
  {
    "url": "assets/js/5.fb29c173.js",
    "revision": "6457caa00d39f3db79849222cbd438f0"
  },
  {
    "url": "assets/js/6.9fadd0d6.js",
    "revision": "5faab22bd86b55d89f6b82b69075ce96"
  },
  {
    "url": "assets/js/7.648e9669.js",
    "revision": "ca6a1705e204611ee0ac991e5a05ccbc"
  },
  {
    "url": "assets/js/8.0aa1ad59.js",
    "revision": "68d40c30162fb9935bf6314f31a4c744"
  },
  {
    "url": "assets/js/9.01b9a673.js",
    "revision": "161515a715b7e6df307a1f248062d174"
  },
  {
    "url": "assets/js/app.5a683cf8.js",
    "revision": "f14f698e6cc93049c6afac51f65a2c62"
  },
  {
    "url": "common/cli.html",
    "revision": "25f1a0b82c6c451d40dd05755ebca718"
  },
  {
    "url": "common/code-review.html",
    "revision": "b9743044bd952582e60867cf874f1246"
  },
  {
    "url": "common/component.html",
    "revision": "def1c1bfaf12eb74fca127b1ad58943d"
  },
  {
    "url": "common/directory.html",
    "revision": "3cfbd020ee3ae87db224af9d52b70358"
  },
  {
    "url": "common/env.html",
    "revision": "189137f4c71bbdba11351bcfb8a01288"
  },
  {
    "url": "common/index.html",
    "revision": "bc6979087af15ecd517043e59eafbba0"
  },
  {
    "url": "common/network.html",
    "revision": "aed3b881d0831050038c5360528d3e99"
  },
  {
    "url": "common/optimize.html",
    "revision": "c063458b682ef39eca246d2ae5e71f52"
  },
  {
    "url": "common/permission.html",
    "revision": "031a7544637bb5c9396db169f4a0fdfe"
  },
  {
    "url": "common/router.html",
    "revision": "103ceb11e80659d0165dd812ef8e53b6"
  },
  {
    "url": "common/skeleton.html",
    "revision": "9f7f7b3dce30d81ae74d4e29bd82d952"
  },
  {
    "url": "common/standard.html",
    "revision": "79aedd578f2e49f3fa881db7ebc9093a"
  },
  {
    "url": "common/style.html",
    "revision": "43e626e281e9f8861a1e78a11da02f1a"
  },
  {
    "url": "common/svg.html",
    "revision": "0d5cc30ac45a276c5a4fd7200291486a"
  },
  {
    "url": "common/template.html",
    "revision": "52cd270ad8787586ed9930a96881f77d"
  },
  {
    "url": "common/version.html",
    "revision": "adad16dd1138e351405ea514f4c101e4"
  },
  {
    "url": "component.png",
    "revision": "6538afe7e4e196585348a00cf1a74eab"
  },
  {
    "url": "develop.png",
    "revision": "38aeaa4c1d45c80f3d3fade2ec63ee39"
  },
  {
    "url": "flow.png",
    "revision": "8cd93c71cb0bed8bc99aa2cc1d32f892"
  },
  {
    "url": "fram_test.png",
    "revision": "6023cc67c2acab78dcbec7dba4fa6170"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "8e3e7323f1c35da2e1cb4af5ff802995"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "8b52cf302b9138359197fcf964d70b2a"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "65544ecd412dc969be0b03ac4e694159"
  },
  {
    "url": "mobile/index.html",
    "revision": "d10a05b9e351df529dacaee6153ad12c"
  },
  {
    "url": "mobile/install.html",
    "revision": "cfed3bddb1f177c91c746b70f45cf113"
  },
  {
    "url": "mobile/modules.html",
    "revision": "20394779430e87adee76115cad2dd26c"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "a2934903247285d62faff8542f0cec26"
  },
  {
    "url": "PC/config.html",
    "revision": "98206f23251345fa0f2dff2e47b06175"
  },
  {
    "url": "PC/index.html",
    "revision": "5cabc80c637d71913a1898ef33a3dbe0"
  },
  {
    "url": "PC/plugin.html",
    "revision": "93d09a0fafa284fefe76ba990cd3102e"
  },
  {
    "url": "PC/process.html",
    "revision": "877bb3e7ceb918e60dc27e325ac7939e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
