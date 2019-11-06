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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "260c955fd25c1ac3d2c3a917d09572eb"
  },
  {
    "url": "assets/css/0.styles.7abad64f.css",
    "revision": "6f46d69c9b530225dab758c08b8bb4d4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.567590ac.js",
    "revision": "f92ab415f3b1b52b5919f91253a34eb2"
  },
  {
    "url": "assets/js/11.6cac71ec.js",
    "revision": "57b19feade519cc85b9f641d154cd2d6"
  },
  {
    "url": "assets/js/12.01dd2dee.js",
    "revision": "dd440ceaefab3c091d5c3c4a5a824cf3"
  },
  {
    "url": "assets/js/13.d3f3853c.js",
    "revision": "2700f09939734776b6ff710c7b3e3d75"
  },
  {
    "url": "assets/js/14.590a1728.js",
    "revision": "9263f50a0f6e66aa6e0621cf4891b477"
  },
  {
    "url": "assets/js/15.66234ad0.js",
    "revision": "bef290236a62e7f7ef3e7207f614a9bd"
  },
  {
    "url": "assets/js/16.05430583.js",
    "revision": "d2c559dc9ca4aad56ba8de6e5de1967a"
  },
  {
    "url": "assets/js/17.2c9cdcfb.js",
    "revision": "3dc5c3b43328fb2ad16c918056499862"
  },
  {
    "url": "assets/js/18.11ea747f.js",
    "revision": "3ba90557b441bdf3ad2fa341366543a3"
  },
  {
    "url": "assets/js/19.72d6af14.js",
    "revision": "f23b7ca196ea7c76dcadf52d3ef3ad33"
  },
  {
    "url": "assets/js/2.9d4046af.js",
    "revision": "27d035066564a24f76330c141bc1111d"
  },
  {
    "url": "assets/js/20.7457e0d3.js",
    "revision": "57ac2b7d4f15e6246f7fb1398a673687"
  },
  {
    "url": "assets/js/21.487edb8d.js",
    "revision": "86c14ac589aea7aa47986278db976c44"
  },
  {
    "url": "assets/js/22.2c699991.js",
    "revision": "028c5183e137f4a13e2c8aa7f1eae17b"
  },
  {
    "url": "assets/js/23.2b01bf45.js",
    "revision": "cda5377e9b4af80a74870b7f41bf48e0"
  },
  {
    "url": "assets/js/24.3fc303af.js",
    "revision": "9e5f14aae65d35b0482d6b56d886ca43"
  },
  {
    "url": "assets/js/25.2b84d362.js",
    "revision": "aa10b2b1267bf019b419ecf06d5e9e2b"
  },
  {
    "url": "assets/js/26.524cee97.js",
    "revision": "ecaccfa43040797dabb50dfb80692289"
  },
  {
    "url": "assets/js/27.028bde32.js",
    "revision": "cf3124383eb667c42c12a08699749e5f"
  },
  {
    "url": "assets/js/28.e02d2001.js",
    "revision": "f937828818d0a1856e8626b80fc0b182"
  },
  {
    "url": "assets/js/29.34c21560.js",
    "revision": "9c201bc50b09a64a049a8c25b052d935"
  },
  {
    "url": "assets/js/3.0b150b80.js",
    "revision": "32072a9a34896080f060d8dd1129389d"
  },
  {
    "url": "assets/js/30.5d525e5a.js",
    "revision": "e644c9086a4eb2f26a58e32a7961ee4e"
  },
  {
    "url": "assets/js/31.62252ce5.js",
    "revision": "1bf15dc70ad233889068392203929e90"
  },
  {
    "url": "assets/js/32.ab288c2a.js",
    "revision": "90ac2c91355efeb21bb24a9a6c8b9a51"
  },
  {
    "url": "assets/js/33.ee959a6b.js",
    "revision": "6ca74104f0af69f2ac09d4785cc1499d"
  },
  {
    "url": "assets/js/34.e40b14dd.js",
    "revision": "8955bfbb440b6cb26430a11b71f76ebc"
  },
  {
    "url": "assets/js/35.fddff743.js",
    "revision": "6f9ab674021e405244db443d213de908"
  },
  {
    "url": "assets/js/36.80c78c82.js",
    "revision": "690eeee8df9e7a140921544caddc46a6"
  },
  {
    "url": "assets/js/37.ef814cf1.js",
    "revision": "ae0812971def5fbd9bb378ba562babc1"
  },
  {
    "url": "assets/js/38.8becd15f.js",
    "revision": "a2871aa3f0534f23d71f97653861cc80"
  },
  {
    "url": "assets/js/39.e26a7162.js",
    "revision": "e95d469fd4fb2a89071ee45c354ce965"
  },
  {
    "url": "assets/js/4.c45ec80c.js",
    "revision": "6810fc4d93b6a03258e0736afff263d8"
  },
  {
    "url": "assets/js/40.8ef8eb8a.js",
    "revision": "f547b186883cdd01468d8caf1e23e018"
  },
  {
    "url": "assets/js/41.dafe1e58.js",
    "revision": "e4582f69aa13c4ed5530b76343882ebc"
  },
  {
    "url": "assets/js/42.2d32b325.js",
    "revision": "b87df823f0043dfc3e3c70f56b37a8a2"
  },
  {
    "url": "assets/js/5.201ae859.js",
    "revision": "91bef36cda4ee74da084e51fbe9ed450"
  },
  {
    "url": "assets/js/6.068c0c89.js",
    "revision": "27c993bac0ee076f4fae27a537e82cc4"
  },
  {
    "url": "assets/js/7.4bd43000.js",
    "revision": "2b49d8b5040159c429c45cd3d84872e6"
  },
  {
    "url": "assets/js/8.ccc8b919.js",
    "revision": "1ac6ec43ae8003eef9348037b9ef75aa"
  },
  {
    "url": "assets/js/9.21547dd0.js",
    "revision": "ff54694fd476122a8b2378ee9285bbd0"
  },
  {
    "url": "assets/js/app.536ddc6b.js",
    "revision": "2d396d7e617dbfa8d593607cac4c1f6f"
  },
  {
    "url": "common/cli.html",
    "revision": "e90d686c096c026178b5199a0715729e"
  },
  {
    "url": "common/code-review.html",
    "revision": "691c0193ba3132bf37e8c62c17f06f48"
  },
  {
    "url": "common/component.html",
    "revision": "a70312413ed3f2fbc69ca5f6afb60d76"
  },
  {
    "url": "common/directory.html",
    "revision": "240e01d86dcfcd8a3c434ea0dc52f8c7"
  },
  {
    "url": "common/env.html",
    "revision": "e37b22dae10ff173866ad95a032fc8f9"
  },
  {
    "url": "common/index.html",
    "revision": "fdc3ee831cc76c6a2c3b674e6729c399"
  },
  {
    "url": "common/locale.html",
    "revision": "7094b0205e3a7eefbb6422a671d4c2de"
  },
  {
    "url": "common/network.html",
    "revision": "2214d8d681a143effadeea5d318a00b7"
  },
  {
    "url": "common/optimize.html",
    "revision": "5542584b45b16db1911aae67a3816914"
  },
  {
    "url": "common/permission.html",
    "revision": "7b9fc21d198591275d6431262ff0d735"
  },
  {
    "url": "common/router.html",
    "revision": "409f55369b4d9123d4dca588acbb3b3a"
  },
  {
    "url": "common/skeleton.html",
    "revision": "e6222aa407502434e61a6c139b92c1e9"
  },
  {
    "url": "common/standard.html",
    "revision": "95c1ecf0d2a58b83ac180aa685e661b3"
  },
  {
    "url": "common/style.html",
    "revision": "2aff40315fed185d8d645d98830d7b5f"
  },
  {
    "url": "common/svg.html",
    "revision": "ff038b0d5af6bce5228e13035e8f8ccb"
  },
  {
    "url": "common/template.html",
    "revision": "3b9c2533dd1d4c32ad3b9dbaed42c8fb"
  },
  {
    "url": "common/tools.html",
    "revision": "decc084a23bbab6071a4662aa9766358"
  },
  {
    "url": "common/version.html",
    "revision": "a7472dcf2d400a2ef43df76b2ebf9e1c"
  },
  {
    "url": "component.png",
    "revision": "6538afe7e4e196585348a00cf1a74eab"
  },
  {
    "url": "debug.jpg",
    "revision": "541f2d40f82a09173ef2b9a84453f0c0"
  },
  {
    "url": "develop.png",
    "revision": "38aeaa4c1d45c80f3d3fade2ec63ee39"
  },
  {
    "url": "experience/hybrid.html",
    "revision": "e23dba8021b0687d3ee2b4702e980b15"
  },
  {
    "url": "experience/index.html",
    "revision": "251697b84232f1980667321f532e3443"
  },
  {
    "url": "experience/mobile.html",
    "revision": "4cc3f67a5bf9b0fee0e3e77b34775609"
  },
  {
    "url": "experience/pc.html",
    "revision": "2681a8591b1e27bba9983ab6b4b71fd9"
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
    "revision": "8fcf713235a6b40cdec5d7c4a88c6de6"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "loginLayout.png",
    "revision": "a00379641a0c0e4f54b2e72195eed145"
  },
  {
    "url": "mainLayout.png",
    "revision": "e7dc470ce9aacca7047a1bdc53cf6b62"
  },
  {
    "url": "mobile.png",
    "revision": "37157d634c8b9d99db1836150d575c4b"
  },
  {
    "url": "mobile/debug.html",
    "revision": "0c54e5b32449e39fa41decfe3a04b669"
  },
  {
    "url": "mobile/fit.html",
    "revision": "1ed65ff8d8324eea103c10ac74f2f824"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "4aa74c20b301f2fc13955eb5e2d06681"
  },
  {
    "url": "mobile/index.html",
    "revision": "bb8073371d3cd721a54949b87f02b41f"
  },
  {
    "url": "mobile/install.html",
    "revision": "24e2fbb92e5052e580bccbda89c83911"
  },
  {
    "url": "mobile/modules.html",
    "revision": "dfcb7949d2a67adbb5769eebc5dda6a1"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "bd12418995f32982184c6a2ec6817af6"
  },
  {
    "url": "PC/config.html",
    "revision": "de227cbe780a0ec3677d6717c9923e8e"
  },
  {
    "url": "PC/directives.html",
    "revision": "dfe225f6241e6f7fe0ea0c4e29886052"
  },
  {
    "url": "PC/index.html",
    "revision": "116244717d48245fe646127db01da3f7"
  },
  {
    "url": "PC/layout.html",
    "revision": "6e02d87af262b49f627cc522c0299455"
  },
  {
    "url": "PC/plugin.html",
    "revision": "9bb26c16ee9fd787bff421990c11bd84"
  },
  {
    "url": "PC/process.html",
    "revision": "144d1bedfc57ce48218e9a94730c39a7"
  },
  {
    "url": "siderbar.png",
    "revision": "c133c7c4699ec323464b58567261cc4f"
  },
  {
    "url": "simpleLayout.png",
    "revision": "94ecf32931a8d153073ee2bf166ab682"
  },
  {
    "url": "wisdom_app_pre.png",
    "revision": "d0125641a9ae9658fd6d49e94906b35e"
  },
  {
    "url": "wisdom_app.png",
    "revision": "f06e7111e94906b7c8c9c6afe8a72ce2"
  }
].concat(self.__precacheManifest || []);
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
