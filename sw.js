/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/03/10/2025-3-10/index.html","8cc74dae7508d3d78a1364f55e78ccf7"],["/2025/03/15/2025-3-15/index.html","2ff861ccd0fc2b81726b06444d9af766"],["/2025/03/18/2025-3-18/index.html","3eabeca8ae6bbe475f207948305663b2"],["/2025/03/30/2025-3-30/index.html","ea891f4ed2380dc5a3fe11176972548e"],["/2025/06/12/2025-6-12/index.html","c6564b7636e0d3a200061b53df99bf0c"],["/2025/06/27/2025-6-27/index.html","fd51d82c6febb4d489e9bb8fc44195bb"],["/2025/07/28/2025-7-28/index.html","c76d601d4816bc8126809b5d78a42585"],["/2025/08/05/2025-8-5/index.html","da1bd5aa81ea79c54d0478ecad92cab9"],["/2025/08/18/2025-8-18/index.html","edd68233ef39605213731d99195c7026"],["/2025/08/20/2025-8-20/index.html","68e2b43093b1b63d9d361927f6ac59c0"],["/2025/09/15/2025-9-15/index.html","ee75e6a581c3bcdeda59a2724b08aa37"],["/2025/10/15/2025-10-15/index.html","acda7439c8882a626629a0612d0e64d6"],["/2025/12/15/2025-12-15/index.html","e1a39dc2e489ecfe4bb4bd543eacad07"],["/404.html","d9c1b7e300f5abb5bd42877172216964"],["/about/index.html","8be79c690402c49d494314fa3282e975"],["/archives/2025/03/index.html","4d0bd0afc63e052c7b4d491364919973"],["/archives/2025/06/index.html","280f62e467ef4e67129dc9fe6ec6ec3e"],["/archives/2025/07/index.html","7f06b18e6aa7c18d24b7b73f06ead664"],["/archives/2025/08/index.html","9cfbd8dcde706e6538e1aa3f28c7b296"],["/archives/2025/09/index.html","3f2376ca309bc63e3e3f3d08afaeb826"],["/archives/2025/10/index.html","a8b20cc6e809bb9a49b1a91d66c8462e"],["/archives/2025/12/index.html","b07a92b448126ae2f5cb93d27643bab9"],["/archives/2025/index.html","8e73e2ebc0d5a4e6038447738ab80a7c"],["/archives/2025/page/2/index.html","ab25da3eb47323ac5f7afc46db92ecb1"],["/archives/index.html","117b95f827fe1e0ea47a7d4dafaf07fa"],["/archives/page/2/index.html","7137c3513d53847cf6a02f27b3312393"],["/categories/Java后端/index.html","fdfbfb45d5ae10aed728fdf91a68ee91"],["/categories/index.html","9ce29b644546ba76444bd8b71363fba0"],["/categories/模型部署/index.html","10ee9ab0d240965d33b1766fc1d6347e"],["/categories/编程之外/index.html","1ab1d106fb31dc202820e78f60ffe090"],["/categories/计算机网络/index.html","eb31d988112900d372f0b132a53c417e"],["/categories/软件下载/index.html","c165102310596d436bc1997f096a0537"],["/categories/运维/index.html","2fcddb205ee4295294855a9ee20541d0"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","b7f5ec796154d5eb0abc5e17e8fceab6"],["/css/style.css","2b3ab866eb4cd1bfe27fa24a5aebdb7f"],["/custom.js","4429227a8e4f51ea0b4e7faf147c1d57"],["/friends/index.html","52d7d4a50d62ee1cff78ba2a4cbb6613"],["/index.html","2d0632bbb3515ce1a4e4df0be2f01c57"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/page/2/index.html","a8fa7fadc719842a81d234ad5cf7504e"],["/picture/filing.png","1b78b4ec62395e9d017fdd0d4465ab18"],["/picture/ico.jpg","92b46f995a193b87b9a5ee3876f5d82b"],["/sw-register.js","0f830a86bdf3778870d5a5c9d18a0b5b"],["/tags/Wireguard/index.html","3d7dd1107f870450801bfc9cc0eca7f4"],["/tags/index.html","fe9c51419aa22d8b521e470e8f51ff8b"],["/tags/光猫/index.html","a91bd7b1fcb90ec9d0f4f78243eb07a7"],["/tags/异地组网/index.html","cc68e61a363fdc7f5466f8381467c652"],["/tags/教程/index.html","4ef8896f6f8136645685ece1dacf0b5d"],["/tags/磁盘管理/index.html","cd774fa8f871af93138a52d020daecc0"],["/tags/踩坑日记/index.html","d36f7d040a86c932b8ef8347c76863b0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
