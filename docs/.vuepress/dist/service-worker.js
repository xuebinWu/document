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
    "revision": "d67dfa6cfcd28663b7b2e359d48b6a97"
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
    "url": "assets/js/10.07a3da0b.js",
    "revision": "277404168df2b9d1cf610da786149380"
  },
  {
    "url": "assets/js/11.ba01cf6b.js",
    "revision": "ac6ba3df31fc728cd0ac534cf5faa420"
  },
  {
    "url": "assets/js/12.ca04f1ca.js",
    "revision": "c0d81a8286790b2a1379509eb4046afa"
  },
  {
    "url": "assets/js/13.012f9045.js",
    "revision": "595c4546eb0e14f2266564df185d0113"
  },
  {
    "url": "assets/js/14.2844c8e9.js",
    "revision": "dcd16ba5db9c669517ff6d9ec72024c1"
  },
  {
    "url": "assets/js/15.c42a56dd.js",
    "revision": "7415a084a658be92aedb2d0282c8e30c"
  },
  {
    "url": "assets/js/16.5b66f880.js",
    "revision": "defb1a87b98522949d72c4f2bcabb71d"
  },
  {
    "url": "assets/js/17.0823ed70.js",
    "revision": "bf916a8a60586331fb667c44e8d16d62"
  },
  {
    "url": "assets/js/18.e26a0590.js",
    "revision": "b27a7cb9b06aa263bbda2eaa7c6c620e"
  },
  {
    "url": "assets/js/19.7d5ddcd5.js",
    "revision": "bbe561d606fe2f64e631c73012a60027"
  },
  {
    "url": "assets/js/2.63b8ab38.js",
    "revision": "34ac9de6e9b30637a2c680c61afe798f"
  },
  {
    "url": "assets/js/20.32b4bfac.js",
    "revision": "8d8e9efc2a9fd7146fd051878161e13f"
  },
  {
    "url": "assets/js/21.04f7c5d2.js",
    "revision": "2c877447d1425d5ca1d4610bf20119a8"
  },
  {
    "url": "assets/js/22.7d734b29.js",
    "revision": "a11ebead97a56af6c67e599572752c8a"
  },
  {
    "url": "assets/js/23.00f329af.js",
    "revision": "a834b653b069f185747ba95fb399919b"
  },
  {
    "url": "assets/js/24.76df0449.js",
    "revision": "1e92f2a048c6cecfd565c4d96e70423d"
  },
  {
    "url": "assets/js/25.295fa212.js",
    "revision": "d5d3bc2f97416169d1ea1c727a5b5838"
  },
  {
    "url": "assets/js/26.ffcfc4f9.js",
    "revision": "f0b991a406df84bd3009201c98102e78"
  },
  {
    "url": "assets/js/27.65a3e2c2.js",
    "revision": "acd3c81b797dbb06ad00ac6d314aa3d3"
  },
  {
    "url": "assets/js/28.9b4fe1cd.js",
    "revision": "71adda501510c7a203de073e48b57c91"
  },
  {
    "url": "assets/js/29.cdf7ce3c.js",
    "revision": "bb47ecffe89cc07f6eb4af256799d587"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.70710bf5.js",
    "revision": "8845c38b0abc7412cee03e2d7de11a46"
  },
  {
    "url": "assets/js/31.460b1f1a.js",
    "revision": "6352dbb1dc3fc57dab9abe84929c92b8"
  },
  {
    "url": "assets/js/32.5d1d1de7.js",
    "revision": "fff10717a97afa5ae192bad11c0b4bf0"
  },
  {
    "url": "assets/js/33.1488553f.js",
    "revision": "4ff7cb5f910009a023fd086548f7e2ff"
  },
  {
    "url": "assets/js/34.b942733f.js",
    "revision": "84d39673c6375130247892c028adb077"
  },
  {
    "url": "assets/js/35.4568a978.js",
    "revision": "1e7d63680d1ba8ae0452751a5b3098b9"
  },
  {
    "url": "assets/js/4.6fb07404.js",
    "revision": "cdacccb2ce97835ae4cc80036c4c679a"
  },
  {
    "url": "assets/js/5.fb29c173.js",
    "revision": "6457caa00d39f3db79849222cbd438f0"
  },
  {
    "url": "assets/js/6.98cc65f3.js",
    "revision": "af01b5235586608572443a2e92a194cc"
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
    "url": "assets/js/9.673c16c2.js",
    "revision": "07732a0b162507d08bc29bea61773ab2"
  },
  {
    "url": "assets/js/app.9c77a99a.js",
    "revision": "0a5d29848f22b85495b0ef29fa1b455c"
  },
  {
    "url": "common/cli.html",
    "revision": "4c6f744448b73c4df6402827b6806b61"
  },
  {
    "url": "common/code-review.html",
    "revision": "f52d9cacb7573b924cb1574e342cb4a2"
  },
  {
    "url": "common/component.html",
    "revision": "fbf5bc0e9261607d64174650e20345b8"
  },
  {
    "url": "common/directory.html",
    "revision": "f9ac0a3863a73a44573b224d8ece577c"
  },
  {
    "url": "common/env.html",
    "revision": "dcc2ba641f1481350aae8de334fc06c9"
  },
  {
    "url": "common/index.html",
    "revision": "be311a702a191d233c456adb247c7be6"
  },
  {
    "url": "common/locale.html",
    "revision": "1b9300f5d8ef13d7ceeddf119c1927a9"
  },
  {
    "url": "common/network.html",
    "revision": "0520d0f192aa18bb74c99545b53a1bb9"
  },
  {
    "url": "common/optimize.html",
    "revision": "7515215087d4137f5e47553579fc937c"
  },
  {
    "url": "common/permission.html",
    "revision": "7a7ffb93f1de29cd4dec77267080befb"
  },
  {
    "url": "common/router.html",
    "revision": "c361091fa81ecfc593631be3b7ee0f6c"
  },
  {
    "url": "common/skeleton.html",
    "revision": "c4a800481158b23b5528d55b6de246c4"
  },
  {
    "url": "common/standard.html",
    "revision": "cc2f517de961af08f2352979739b5815"
  },
  {
    "url": "common/style.html",
    "revision": "b35ed3abfa48f65f84e5c7113adbebb1"
  },
  {
    "url": "common/svg.html",
    "revision": "6ba150ed635cb0fd724022bbeb11a160"
  },
  {
    "url": "common/template.html",
    "revision": "19aae22d4acda34e58fa24a705e0ff9f"
  },
  {
    "url": "common/tools.html",
    "revision": "1f96683d08796fc6de847d144cf5af3b"
  },
  {
    "url": "common/version.html",
    "revision": "b17636e2ac1d3a14795969f4cf263951"
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
    "revision": "af63e8833b2fcf9f249cb0356b1ebfea"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "mobile/fit.html",
    "revision": "90e7ca688e7ab03077ab578d4f5e62f9"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "d580cdae7e9c4c135de0a59ffa7b9ae7"
  },
  {
    "url": "mobile/index.html",
    "revision": "d4a0f7a5b8ee5edfb4a6e53d26633e76"
  },
  {
    "url": "mobile/install.html",
    "revision": "8215519a208bd65ef7853f2645c3552d"
  },
  {
    "url": "mobile/modules.html",
    "revision": "fe6413f6e06919c77bd924e592d153ec"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "4eac8846bd159abe8395b07c0239c49c"
  },
  {
    "url": "PC/config.html",
    "revision": "985427d3d51b8d0c27d72ce430ba811b"
  },
  {
    "url": "PC/index.html",
    "revision": "d279f0ff5f80823add85974046538ee8"
  },
  {
    "url": "PC/plugin.html",
    "revision": "b3b172939ca426b609e05d60f5bc7026"
  },
  {
    "url": "PC/process.html",
    "revision": "0db9ebf1f3e3b39c7e3223de1ac3e928"
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
