'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "37911e5067cf4cd74246f1786c72dbc4",
"index.html": "a1300f83b4279aabd7979e2e3587ea31",
"/": "a1300f83b4279aabd7979e2e3587ea31",
"main.dart.js": "89fa27621db81a50954de97cd50eff3b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb9cb13b48b0acec7c1791a2336a8def",
".git/config": "6e3fecbf6f197a8f05adfd97a06306f1",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/9b/4d1fa6c7d600757a25347d68ba8482de8465b2": "4e68c01e7c4bb9abbe46f7bea6ad79ea",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/56/50ba558088bbe3b70b7158d072eacde9ac8aae": "7cba9b4c4edcd542ed34bad3df346c13",
".git/objects/67/cb1f340ebfc3899cc97879f31623a8ffae54d3": "a8e8146d67aeb6b437320178fb786002",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/94/4ed5d9b991ec9bbbdadfaf236a166cdea835ee": "06629eb70f1a5f65d0008e47b17f37e7",
".git/objects/60/d22867ad7e6714fd075a0d2f683d69d8ba479a": "cbb36c1fa4955dd1cc6f056f9c253eb7",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/d9/084ee9f2b6df0c6753d73b731709de369157cd": "380d0c903e8b5f468eb670d9e513545b",
".git/objects/d9/ecfec4c904a0e5d1e704dfea806813312d4fc1": "bdcd879a7d4148bcc1c0f7ab36bc86ad",
".git/objects/bb/9a37cd72e4123f9554e1f45eabde6771238577": "0490911c3b583fb5aa063288ee7d729a",
".git/objects/ae/8cd91a0f702f6b05b901a2fe3b3bf6c4face15": "95b41ee9859d1819c9b61c22665f266f",
".git/objects/ab/48f00dda37bafed0c62f1b558d06ebdf0e344c": "b843c1b3cf1e03af495e7c31a13f207c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/7ff946967e7564bb885e2066359989655844d3": "bac7f44ab98551f235bd6788fa42390c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/4e/dab12ea6bfc20c83394e33fcab85647416886d": "1b85c4f37b8538db0888570a983d030a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7c/fa79e78da00787729517b093943ce30eb5bb8e": "fb1d48e3f394aca107ef5ed92c31766e",
".git/objects/89/a1855bad8893d3af71eb49452827d40241e3bd": "b800d8c65eff15f514952b2bd3e0f4d4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/72/adbbf3fee21adeda1306441175c34941c783e6": "3c64855ec18e7c4c4b40569e2523894b",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/5d/fc1fababf20f72e20de937f2ffe9811b988abb": "f33d7cfe790bc0dd8205f960c825ec81",
".git/objects/31/e59b5b3ca274eba64b12297a247085455a6bc3": "b7be2d3ab65eb1cd3b728f7d94999571",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/96/33fb38860f430d5dbc028c352e8e8c4bd7d0b5": "81241483826699f66253b22a53dd8a2f",
".git/objects/54/ece7eed3240045c552ec187aca15212b2a3976": "dde312e163214bd2c7ac6a447ccd38fc",
".git/objects/30/cdf879366713b8a0a83c6e2f0ffde5eaff6cda": "e2be9ec9f8a46f2feba42b5f81801e62",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/d8fab65992ea2ef4372a55af7abe9159cdaf08": "a27dc4715cc847f48682b9536e41db45",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/928c0e3e855be6c599a408f9f2b95e09d87e82": "8106ee4780ebf9b8323821c16c98a4c5",
".git/objects/e1/b7f2670d6f0828594801c180600cbb43765cc8": "bb2121a4fa98283148b12a583fb5de74",
".git/objects/c5/1577b47be820f71ea51f7bb10d60094c5a4d49": "610989733a2209dda6e241cde74cd9de",
".git/objects/f1/aee4f5c2a30c6d859719be706d6daa622dbd96": "e0a9860d08d3fca760dbc559ace358ec",
".git/objects/e7/1b62549d9d3e413e6177afef450e0dfdb3b284": "b023caba29e003dd74555abafe11f3b1",
".git/objects/ce/ac75d75e6bcaf56823bacd051bd9f135af6f4a": "339275ef60385a218d05801d845443c2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/43f3619238f7aaa6f64786eed029ace6cf32d7": "f160e6fc3d76582104f3ec383e4ad2e7",
".git/objects/48/3b00296d3bf781004c4a35e2a040167cf9bd8e": "8408435d5d36241c559a7ce2156d5974",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/12/a82b81c87353d38fbeb3b337aaa4cab797fe1d": "350149764361afb43c08ed2b336eb99e",
".git/objects/85/2c7135a38ad9cd9d08e3cb3ae14781447dec06": "3519aeb0c1d2010018feef3065f49652",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/7f/059f2fc13de99f8ec074b9f952fc654cd1d03d": "27fd9f99ca1ad5a1cfccb5c671d6beea",
".git/objects/25/260a961605c082ab44ef349de632866adfd537": "3badcfabe8f928a54ea4989440a49de3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "e55875dc6dd5e98a79f5c022c2b45595",
".git/logs/refs/heads/master": "e55875dc6dd5e98a79f5c022c2b45595",
".git/logs/refs/remotes/origin/master": "d51d5dd5563d5ee55914fa2e5d91c91f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "8566f9762d011cb3cde02012d03b46b4",
".git/refs/remotes/origin/master": "8566f9762d011cb3cde02012d03b46b4",
".git/index": "b537cf85522b9412304041b26ee04b7a",
".git/COMMIT_EDITMSG": "a07cdde61b9cf0d069858f4cda84e3f4",
".git/FETCH_HEAD": "de63dc579844a63b442edcddf115cda3",
"assets/AssetManifest.json": "2d1a143668c4598f110a104782cda62a",
"assets/NOTICES": "880862c74aa07f8e8b24479600c858da",
"assets/FontManifest.json": "cbd20421c4d4cf9f02a72e3d44c4c1da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "ca9ce9ff0676a9b04ef0f8a3ad17dd08",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/logo.png": "4daac4268af72a57ce53d73850061477"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
