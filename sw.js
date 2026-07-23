/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/03/09/2025-3-10/index.html","eefaed920d27b0af69acf68aca14cb80"],["/2025/03/14/2025-3-15/index.html","b08019db16768645f0503fe1521d6c52"],["/2025/03/17/2025-3-18/index.html","fcec458f8f39dee7fce4058ae83fe715"],["/2025/03/29/2025-3-30/index.html","fc9a965f35892bacf4b473daac8a394b"],["/2025/06/11/2025-6-12/index.html","f6ef7e84086bc777ee76bafb26fcde1d"],["/2025/06/26/2025-6-27/index.html","40f39d6a32a7705794bc1f8f3ffa0df4"],["/2025/07/27/2025-7-28/index.html","a6249d4b7915f4a44b7f058c06137a34"],["/2025/08/04/2025-8-5/index.html","1a11bc9087462cd7fecc525ac260e068"],["/2025/08/17/2025-8-18/index.html","e2140fb9430b0283549c486439444bcf"],["/2025/08/19/2025-8-20/index.html","2d2102a4b53dd5d1ac94b0fcd574193b"],["/2025/09/14/2025-9-15/index.html","c70242664e997284c615d50ba3027cf4"],["/2025/10/14/2025-10-15/index.html","a1f150e4e6511504d0f7bfff88e8d429"],["/2025/12/14/2025-12-15/index.html","57715488c2ce4b7140b44f13cdd16bb0"],["/2026/04/28/2026-4-29-2/index.html","ad7a7e069e83191f58c29b7188dd7b13"],["/2026/04/28/2026-4-29/index.html","fdf1efb293ee769c87daba11df611ae2"],["/2026/07/22/2026-7-23/index.html","5e0fc3169d7e050d97d887b41b5244cf"],["/404.html","e58af3507dd0004fdce93f8ae7f5a6fc"],["/about/index.html","9598c8c6ec00a809eaecc42aa103c348"],["/archives/2025/03/index.html","8290106ad4f6ec3caff440d60d3d6f8b"],["/archives/2025/06/index.html","71d4c89b18679ce1bae2b25a2da1c96d"],["/archives/2025/07/index.html","9afda564fe3bd928eea14761ebb54883"],["/archives/2025/08/index.html","6a2d72ef8a3c75c31967c5f5da3c991b"],["/archives/2025/09/index.html","64935b97975665f7e45e307b5ae8fae7"],["/archives/2025/10/index.html","a114e2199f51a09f8b8c2313eb2e2d4c"],["/archives/2025/12/index.html","6c2faffe9148dc5ece6044b43f0218a8"],["/archives/2025/index.html","c4dfa84122ee884777e350f167106bb0"],["/archives/2025/page/2/index.html","690bdf08c33e78bfe72279b0b5fb90f0"],["/archives/2026/04/index.html","62046cddfce380bc8954006345b2da92"],["/archives/2026/07/index.html","2f24ad144018d156ff8ea28ee9e5ad9f"],["/archives/2026/index.html","50c46703575f8733658df57b8d91147b"],["/archives/index.html","b4a5ab2220ed30ff9221479583ab654a"],["/archives/page/2/index.html","c2292e49f0aa078b93f99dbe0d0532d5"],["/categories/Java后端/index.html","452793314322e6722ca779c5aa9a2bb0"],["/categories/index.html","0862fc9894fece41ccf1de052f54e13e"],["/categories/模型部署/index.html","4f412dab857b7b03a59c65104bcbf054"],["/categories/编程之外/index.html","c163f23aab9fa3bd25ed84c5882a0703"],["/categories/计算机网络/index.html","a48d69d265501f4385416324d342082b"],["/categories/软件下载/index.html","e4a051a3c3b9d0bc707821ac531fe84e"],["/categories/运维/index.html","df588ee465703c912220ceb303b71073"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","b7f5ec796154d5eb0abc5e17e8fceab6"],["/css/style.css","2b3ab866eb4cd1bfe27fa24a5aebdb7f"],["/custom.js","4429227a8e4f51ea0b4e7faf147c1d57"],["/friends/index.html","cda3b20ff69917bec23e559a4c833a59"],["/index.html","15dc14a5846f62fc45a8934d8af0c935"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/page/2/index.html","5c788f448bc7ca809638d8b48e9eee57"],["/picture/filing.png","1b78b4ec62395e9d017fdd0d4465ab18"],["/picture/ico.jpg","92b46f995a193b87b9a5ee3876f5d82b"],["/sw-register.js","a74437fbbf88f95eb6c5bc5b00e29d35"],["/tags/Clash/index.html","b0f8c858585b9812cb6ab669ec437dca"],["/tags/OpenClaw/index.html","5db9ffe22773260af7753b9f2404c591"],["/tags/Wireguard/index.html","d6f74bfc253157cb06dbc1699e7e1852"],["/tags/index.html","922580fccd3041ef7cda3e4ae3b41b2b"],["/tags/光猫/index.html","01d5010cfb5c943c2cd5423c3d34a6fc"],["/tags/异地组网/index.html","010c3da974be7187a087af5503a0c04d"],["/tags/教程/index.html","e8b193e29a3eae57e24391077e0f80ea"],["/tags/磁盘管理/index.html","1a5699a5d805cb748f0376b57b90dadd"],["/tags/踩坑日记/index.html","94ce7237eeae22da17e2a1741f1736af"]];
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
