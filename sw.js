/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/03/10/2025-3-10/index.html","53f133da182c8d6b6279ddf69981cb3d"],["/2025/03/15/2025-3-15/index.html","0b7237493b422d053c28ff0b7f39cf96"],["/2025/03/18/2025-3-18/index.html","198c6dcaec060174d8dc4622dc0e3441"],["/2025/03/30/2025-3-30/index.html","b76a74304ea4d636f97212787f41c1f9"],["/2025/06/12/2025-6-12/index.html","f5d9ea66918c5c9a8d816139cd16e446"],["/2025/06/27/2025-6-27/index.html","2bd2496c45d5795b01af32fccc49ba1e"],["/2025/07/28/2025-7-28/index.html","a3ef1d3379bbacb158176256663b4e73"],["/2025/08/05/2025-8-5/index.html","163a223a065646529ee26ba8b0016967"],["/2025/08/18/2025-8-18/index.html","0867a49a3c69f5d255123f6325489d3d"],["/2025/08/20/2025-8-20/index.html","2cfd5ea6056bf8c6ef437c9f80b30136"],["/2025/09/15/2025-9-15/index.html","0208b40b10e8a224235bf6ee82f8ff80"],["/2025/10/15/2025-10-15/index.html","ab0d1918f43948da82b89fcd1df18c8f"],["/2025/12/15/2025-12-15/index.html","2c0257e1f17696e58823d3f2a81c5744"],["/404.html","a54956b207ab40b2c76f39eef2883e9f"],["/about/index.html","d1b16fedcac0f093db7ccdb0fc2fdcd6"],["/archives/2025/03/index.html","19751525f2b2cdb0980ffa1a6fbb8c02"],["/archives/2025/06/index.html","1fcbafdee9fcb394a36f3d900157fac3"],["/archives/2025/07/index.html","34012a98f888885f44d1ed52be18d4f1"],["/archives/2025/08/index.html","81cc26b03eac81e6a2ee34c986678fee"],["/archives/2025/09/index.html","b22aa5945a5c75de04977b4239c6371c"],["/archives/2025/10/index.html","7e6c3630ba61a2d1d76cdbca8a300114"],["/archives/2025/12/index.html","d001b3876502b5d263ff32e9560b19a5"],["/archives/2025/index.html","da8c4fa5c296b8df1105119053815546"],["/archives/2025/page/2/index.html","2f648372d07dd4651d6d8a40d8e405e0"],["/archives/index.html","d28515ca30c8037a5708254ad784bf7a"],["/archives/page/2/index.html","3e6bbeedbeb2031851bfccceffb9e684"],["/categories/Java后端/index.html","a186a1b1b33248fc92fe1627dbbe942c"],["/categories/index.html","c631f9f0c3a179c094fb3079fc9d0beb"],["/categories/模型部署/index.html","fb6508be6f6f1f268b9b6b4fe37ba4ba"],["/categories/编程之外/index.html","f64b4ea7c7c2b2bc4cb230e40cfdd212"],["/categories/计算机网络/index.html","f80e355193f746af9ba254b821f8daaa"],["/categories/软件下载/index.html","70b4ffa88c68d2b50cb921585e7b5ba7"],["/categories/运维/index.html","d0d690fda24fc693f40ba133073a0fdf"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","b7f5ec796154d5eb0abc5e17e8fceab6"],["/css/style.css","2b3ab866eb4cd1bfe27fa24a5aebdb7f"],["/custom.js","4429227a8e4f51ea0b4e7faf147c1d57"],["/friends/index.html","d1a78d07c035e1c4001e27de4aeb12cc"],["/index.html","b74c04968911077730548212c4af389f"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/page/2/index.html","cac0afc72367efc6e2f00b5b007cbf4b"],["/picture/filing.png","1b78b4ec62395e9d017fdd0d4465ab18"],["/picture/ico.jpg","92b46f995a193b87b9a5ee3876f5d82b"],["/sw-register.js","65e2aaf62728f5ddddafd0be96c5c07f"],["/tags/Wireguard/index.html","cf133c07aa4309488bc340f8b113cec9"],["/tags/index.html","00c4a3b719c195654a713958ee9ff7e0"],["/tags/光猫/index.html","012d0fa04f03774a11b3f906dc656233"],["/tags/异地组网/index.html","aeba77977ed9aa337cd6563776dbc2fb"],["/tags/教程/index.html","da5ae780d6ba1dcbd42b6de7bf1f9e42"],["/tags/磁盘管理/index.html","69a37c9aa83da3fd6048c2ac6aa49dd2"],["/tags/踩坑日记/index.html","ce4481172a2d1f79785fa66db1943645"]];
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
