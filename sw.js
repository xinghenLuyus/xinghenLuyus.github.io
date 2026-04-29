/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/03/10/2025-3-10/index.html","2122308176590c6c06bb5598b648465e"],["/2025/03/15/2025-3-15/index.html","7841d432f591bd2f180d1d82a4f437d4"],["/2025/03/18/2025-3-18/index.html","b4e836e814fb56438415ee028d26c19b"],["/2025/03/30/2025-3-30/index.html","f590fd3c4f35e61551c361343e19cb48"],["/2025/06/12/2025-6-12/index.html","6c2393a2bbcbeee6a369a0b62929f0bd"],["/2025/06/27/2025-6-27/index.html","acb7d7194133887356db8535fd2edb5b"],["/2025/07/28/2025-7-28/index.html","2ea2aa3323507c3941358879e3a5c434"],["/2025/08/05/2025-8-5/index.html","748c9cb5b6ce52947e8be8f172a4522e"],["/2025/08/18/2025-8-18/index.html","20adc244ef03b03bf1aca5daa2dff6ea"],["/2025/08/20/2025-8-20/index.html","22ef59ff6eca1f0aab96ce9aebe1e83d"],["/2025/09/15/2025-9-15/index.html","8771241137313074f493b9dc073f32e1"],["/2025/10/15/2025-10-15/index.html","1e2d40cc8513e312f1885b4e92e4f6d6"],["/2025/12/15/2025-12-15/index.html","17aa683a9f67ced8b2900cfa6910d445"],["/2026/04/29/2026-4-29-2/index.html","2a3f5ed88b721e73efde01c2166f2d6b"],["/2026/04/29/2026-4-29/index.html","d5c5330a89069eaaa98b679fd03b1122"],["/404.html","f51888fa7f6f7ebfcc1d93bb3eaa7048"],["/about/index.html","6a007920da92b06cbcb019971dd9fb21"],["/archives/2025/03/index.html","b645567a3ab53e5f53a7eff3378f9736"],["/archives/2025/06/index.html","624733e4e3e9350a3f74364ab3baadcd"],["/archives/2025/07/index.html","33c1048b677c1f63eeea14f29d6371b4"],["/archives/2025/08/index.html","13d89f503f00defb95ddc82e5f0e1f27"],["/archives/2025/09/index.html","69a306e60d5ab914f810c628222810da"],["/archives/2025/10/index.html","983a887cbdb11d99419b728e65e64295"],["/archives/2025/12/index.html","1a4b00ba24d45e2883e930850fa2e209"],["/archives/2025/index.html","879ba5e6887235914c982267f302c515"],["/archives/2025/page/2/index.html","77f82e521ef34ded38505f8b0702649d"],["/archives/2026/04/index.html","27100f80ae0443cbec8c8912f397a84d"],["/archives/2026/index.html","ceeb45f9e34d6701401acc06a16f9645"],["/archives/index.html","66c1b9907f08b6d8fbf27412fc8fa486"],["/archives/page/2/index.html","84f6d883275c0d320107093c225a36f7"],["/categories/Java后端/index.html","660b8550d5fce4ca737dcd0d95bd825a"],["/categories/index.html","83772d4522607fec4ccbf0f206b038c6"],["/categories/模型部署/index.html","3f3a2cbd98d161242e1a965074b947c2"],["/categories/编程之外/index.html","e48989e8bc376be93cd820f2757def6b"],["/categories/计算机网络/index.html","82d20b1c09e599e0091a93a2888da716"],["/categories/软件下载/index.html","7c5ea3edd087f07e5f5dffe03ec687c0"],["/categories/运维/index.html","70d2d52a32042ed913c504550d602fd4"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","b7f5ec796154d5eb0abc5e17e8fceab6"],["/css/style.css","2b3ab866eb4cd1bfe27fa24a5aebdb7f"],["/custom.js","4429227a8e4f51ea0b4e7faf147c1d57"],["/friends/index.html","a23abe71dd450ca15d811d63c38bd66c"],["/index.html","a34ba70d6963896dd347734847c9ccd6"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/page/2/index.html","258c640cbf033c0ce9e6b706045c7834"],["/picture/filing.png","1b78b4ec62395e9d017fdd0d4465ab18"],["/picture/ico.jpg","92b46f995a193b87b9a5ee3876f5d82b"],["/sw-register.js","d98a5efc286c28950689117a399bc558"],["/tags/Clash/index.html","6d9db478bb286bba19a295e68990f1f2"],["/tags/OpenClaw/index.html","fa27283a30f64388d45dd37fe251f5cf"],["/tags/Wireguard/index.html","60c4dd94acca2df90d7440c6772bbef0"],["/tags/index.html","9cf8a4b98cd92a479127c7beb018830c"],["/tags/光猫/index.html","7a29a3a587d384519861cdda9118e789"],["/tags/异地组网/index.html","5d6de71b927fcd87cefe33df4ecd5f3e"],["/tags/教程/index.html","a9e7f91fc1cd5a47b0a0d22a37991b45"],["/tags/磁盘管理/index.html","7ea73a27cdd78b57cb2f6a88fd4e5655"],["/tags/踩坑日记/index.html","d2f30d3bb3b27767136ea5fade9950f9"]];
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
