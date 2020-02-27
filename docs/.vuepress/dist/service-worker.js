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
    "revision": "749b53bebbc5792005b8e911cf659a1b"
  },
  {
    "url": "assets/css/0.styles.5a6887f8.css",
    "revision": "1658cf52813b7f8dec071b7d78d0b67e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6fa87c0a.js",
    "revision": "7f7c892bdbc8753c251271d9fb6a2d5e"
  },
  {
    "url": "assets/js/11.1004bc60.js",
    "revision": "44ab362a90126f9ec6310503cad9dddc"
  },
  {
    "url": "assets/js/12.3145c28b.js",
    "revision": "c520261c54f506b29aa39d83d1f74a15"
  },
  {
    "url": "assets/js/13.814bfa24.js",
    "revision": "ffa74438da10b11636baaf0790a42871"
  },
  {
    "url": "assets/js/14.7de4c79d.js",
    "revision": "7aea84e9b73eb22b808932c8b96c2824"
  },
  {
    "url": "assets/js/15.275bb740.js",
    "revision": "859c7c11d7518339e3487b6c3fa2804e"
  },
  {
    "url": "assets/js/16.f7c7c066.js",
    "revision": "7174abbb5f39f19430488f730fc91f1b"
  },
  {
    "url": "assets/js/17.f668513e.js",
    "revision": "0a564ccea7a2baa3cddacb0efd6262ac"
  },
  {
    "url": "assets/js/18.7dd7d760.js",
    "revision": "5c131e301f68104a4d9dc45f6534ea92"
  },
  {
    "url": "assets/js/19.e5803aa0.js",
    "revision": "0288d916387ff2aac469f845435b902c"
  },
  {
    "url": "assets/js/2.2018ae8e.js",
    "revision": "3db1cdec6ac4c909964081dd9d1c0bd5"
  },
  {
    "url": "assets/js/20.06e1fc3e.js",
    "revision": "c6c1412ae9353539e87c0019f9422715"
  },
  {
    "url": "assets/js/21.f87605d0.js",
    "revision": "4918be4d6819ec76dd87b454a19b9e5c"
  },
  {
    "url": "assets/js/22.1234fc29.js",
    "revision": "2ecf3a82c34590d1a20253bd0ac4f0dc"
  },
  {
    "url": "assets/js/23.bd8a728d.js",
    "revision": "314bb716c1a9cb37381c1688cb30c4a7"
  },
  {
    "url": "assets/js/24.10129d4c.js",
    "revision": "c77467a46dc131f72d6e630111a891b4"
  },
  {
    "url": "assets/js/25.a5bbc8c2.js",
    "revision": "131cfbb594cb240103094fc4de6a31e8"
  },
  {
    "url": "assets/js/26.d06a6a3d.js",
    "revision": "ee4d35540e25b008f0157a82a1d75338"
  },
  {
    "url": "assets/js/27.d142a253.js",
    "revision": "0fef9357913ff885f517b2177ae90a15"
  },
  {
    "url": "assets/js/28.bc81c5c1.js",
    "revision": "2589482576efafe625a70a70fd39b44b"
  },
  {
    "url": "assets/js/29.8d872580.js",
    "revision": "b83699f2986da6ec5ba1ae1c8af4ca6a"
  },
  {
    "url": "assets/js/3.95f96109.js",
    "revision": "8b241398864b96c3bb536cf366101993"
  },
  {
    "url": "assets/js/30.ef642bbb.js",
    "revision": "87503fbd44e0c60d2735108818be6ad2"
  },
  {
    "url": "assets/js/31.ca54dfbd.js",
    "revision": "17f72d26b8bc1072c846f100f29fb12d"
  },
  {
    "url": "assets/js/32.9f76abe6.js",
    "revision": "d7289eefaf12b1b32a9190017f57a019"
  },
  {
    "url": "assets/js/33.a8325430.js",
    "revision": "a2ac55af1b1366332ee400268c4de88b"
  },
  {
    "url": "assets/js/34.7e07877b.js",
    "revision": "dfd4c181c64af93873f530f4de17d762"
  },
  {
    "url": "assets/js/35.523ece51.js",
    "revision": "42c8accccbbde31850ccf02471b3a927"
  },
  {
    "url": "assets/js/36.7784bc48.js",
    "revision": "f836f3a80cd8564bff6e5640c68c62d5"
  },
  {
    "url": "assets/js/37.6b219bca.js",
    "revision": "944947fe59dfad7109457f45d750c460"
  },
  {
    "url": "assets/js/38.f961a4ac.js",
    "revision": "8c5e56f3ca655935a8118abcd09b88ac"
  },
  {
    "url": "assets/js/39.f4d36493.js",
    "revision": "f7b9050df652c8352ff5d4174beb80cf"
  },
  {
    "url": "assets/js/4.03a4bf0c.js",
    "revision": "5c93b9ba8ac1eaa586dc7c75de6ae572"
  },
  {
    "url": "assets/js/40.0131b389.js",
    "revision": "a80d19c47b058ac87cc70cd21c570ff3"
  },
  {
    "url": "assets/js/41.2ca98767.js",
    "revision": "208a7d1402da5c3427bf3fe0cca0c28d"
  },
  {
    "url": "assets/js/42.cd7be2e8.js",
    "revision": "49da5386db68779b7b170db8aa187cbd"
  },
  {
    "url": "assets/js/43.4cfc4eaa.js",
    "revision": "3b9122df347517c3b6d19bb488877f37"
  },
  {
    "url": "assets/js/44.21ce413d.js",
    "revision": "6e2853852d29984399818850b9b5dfd5"
  },
  {
    "url": "assets/js/45.cd8de480.js",
    "revision": "e08ef14829bee6974b2b6956bf49cb05"
  },
  {
    "url": "assets/js/46.165480cb.js",
    "revision": "73e4c1b461596af52e29b721632646d8"
  },
  {
    "url": "assets/js/5.fb29c173.js",
    "revision": "6457caa00d39f3db79849222cbd438f0"
  },
  {
    "url": "assets/js/6.c07a3363.js",
    "revision": "57cec3fcbbdac4b2e3b3887af3c98fa9"
  },
  {
    "url": "assets/js/7.6f88ce79.js",
    "revision": "9a642e466f756da3eff3d3c5ec5bd090"
  },
  {
    "url": "assets/js/8.e0f24749.js",
    "revision": "69bc8cddca2272bd7c3e76c1b46f407f"
  },
  {
    "url": "assets/js/9.92d901e6.js",
    "revision": "5eaad40e1a94eeb7dbf52e2df6224afa"
  },
  {
    "url": "assets/js/app.52b04506.js",
    "revision": "713492fe34a014a9e568af0f902c4e29"
  },
  {
    "url": "common/cli.html",
    "revision": "c8fc51f7cc76c8e767a227b6c8331fad"
  },
  {
    "url": "common/code-review.html",
    "revision": "7e343ddf1ecf614f4b078746a9d60b1c"
  },
  {
    "url": "common/component.html",
    "revision": "b0dc9a43eb382440b14334332e23d3b4"
  },
  {
    "url": "common/directory.html",
    "revision": "d7aced7d5a083256d9c614b630c059d3"
  },
  {
    "url": "common/env.html",
    "revision": "127a26f5fee8891382544b429b4abd7b"
  },
  {
    "url": "common/index.html",
    "revision": "254b92a80925c7f12918011adfa8432e"
  },
  {
    "url": "common/locale.html",
    "revision": "9fc751739589235bc30331dbdebb542d"
  },
  {
    "url": "common/network.html",
    "revision": "0f48fb6019fe8d9917333eb5401d068c"
  },
  {
    "url": "common/optimize.html",
    "revision": "d76b150bd28cd0af64555b4269ea1a94"
  },
  {
    "url": "common/permission.html",
    "revision": "88b56ed643b55df6946c4cabb2445fe5"
  },
  {
    "url": "common/router.html",
    "revision": "87e16b5119b5ed3f9a003b2d5adccf5c"
  },
  {
    "url": "common/skeleton.html",
    "revision": "b883ef2076bf024994c23cfb7ade0607"
  },
  {
    "url": "common/standard.html",
    "revision": "72e5b3bbcdf226a059fb42a19cd91196"
  },
  {
    "url": "common/style.html",
    "revision": "da55c660035885fc1eae974c2aa2ee07"
  },
  {
    "url": "common/svg.html",
    "revision": "fd9f1a8052b631660933668eb39f7903"
  },
  {
    "url": "common/template.html",
    "revision": "79074a7ce6fca53d6238069789cd4991"
  },
  {
    "url": "common/themeReplace.html",
    "revision": "6c5c19c3e974513a04c477daa09546d5"
  },
  {
    "url": "common/tools.html",
    "revision": "66d3a47302b039fe9286240aea55c025"
  },
  {
    "url": "common/version.html",
    "revision": "a1540b1438c107ddb31e4c9a68ae17ae"
  },
  {
    "url": "common/vue-plugin.html",
    "revision": "c0595f3da76c0674c251d5346d825aa3"
  },
  {
    "url": "component.png",
    "revision": "6538afe7e4e196585348a00cf1a74eab"
  },
  {
    "url": "debug.png",
    "revision": "c19d5559d9dc3c1e93a81f546939bffb"
  },
  {
    "url": "emanage_dev.png",
    "revision": "800a3d5ebc0559de2187db9af4c08de2"
  },
  {
    "url": "emanage_en.png",
    "revision": "5ac89f26d237e8e858cca4cb0956f336"
  },
  {
    "url": "emanage_pre.png",
    "revision": "a319d3daa2e3c47c9a6e1648d72c95b0"
  },
  {
    "url": "experience/hybrid.html",
    "revision": "f351240cd70a6ff91f09fe28d56cddbd"
  },
  {
    "url": "experience/index.html",
    "revision": "11d53a3fb9ff4a23f0d23f8414d798b1"
  },
  {
    "url": "experience/mobile.html",
    "revision": "8f917c8c428ea07ec6a8738152817e01"
  },
  {
    "url": "experience/pc.html",
    "revision": "d18c137c82fd63a15563a1771494704c"
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
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "4ccad5701be1a661a3bc017882561a89"
  },
  {
    "url": "jiagou.png",
    "revision": "6a99d257ea6a3fbe40e5f192f0bb119a"
  },
  {
    "url": "lifemanage.png",
    "revision": "f467dc2a67326e848f026d6430973426"
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
    "url": "miniprogrammer/index.html",
    "revision": "939b2fc8e089d92a5139c24508b2e25d"
  },
  {
    "url": "mobile.png",
    "revision": "37157d634c8b9d99db1836150d575c4b"
  },
  {
    "url": "mobile/debug.html",
    "revision": "e434a63c984b12db16ff3c0e1275f652"
  },
  {
    "url": "mobile/fit.html",
    "revision": "4925a427486bfbb3312d60204e6540b5"
  },
  {
    "url": "mobile/hybrid.html",
    "revision": "037cc5cb0174f15db1c9fd6c1800008d"
  },
  {
    "url": "mobile/index.html",
    "revision": "f46c71f4765331b8b838ad1dd560af42"
  },
  {
    "url": "mobile/install.html",
    "revision": "b8f48cda7a5f465012e4914fb10367f6"
  },
  {
    "url": "mobile/modules.html",
    "revision": "54c9777042a8ffb1f75983629251935d"
  },
  {
    "url": "mobile/prepare.html",
    "revision": "b182d49d9abe70fbdcae07c0fe4a9b7b"
  },
  {
    "url": "mobile/route-cache.html",
    "revision": "b4dd4fd1ca13ec6e2f8efdbc2aa7c691"
  },
  {
    "url": "PC/config.html",
    "revision": "9a8ea43a7afe2e1965c5592c8560b0b1"
  },
  {
    "url": "PC/directives.html",
    "revision": "6ba872cdf2a56dc11340c7a25c12fbab"
  },
  {
    "url": "PC/index.html",
    "revision": "2b773c8962a934eadc762bd8f6f99611"
  },
  {
    "url": "PC/layout.html",
    "revision": "692b0f0cbdb84d579d19cf7eca0cd07e"
  },
  {
    "url": "PC/plugin.html",
    "revision": "db510f7d242ee1a5259f0caf5b9fbf89"
  },
  {
    "url": "PC/process.html",
    "revision": "62dc30d57be18dc3c536662750157265"
  },
  {
    "url": "serviceapp_dev.png",
    "revision": "a4f88c724d0176c405392e5b29780b07"
  },
  {
    "url": "serviceapp_pre.png",
    "revision": "7238ef4477d08fab53eb6dd43f8587c4"
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
    "revision": "b2f9ac3c7ba8830853123affb2368e33"
  },
  {
    "url": "wisdom_app.png",
    "revision": "e0cc33607c1f1c285ee878c9b66382a1"
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
