var ddg = {};
ddg.rawApi = function(query, ssl) {
  return new Promise(function(resolve, reject) {
    var now = Date.now();
    var name = "ddg_rawApi_" + now + "" + Math.floor(Math.random() * 1000 + 1);
    window[name] = resolve;
    var script = document.createElement("script");
    script.src = "http" + (ssl ? "s": "") + "://api.duckduckgo.com/?q=" + encodeURI(query);
    document.getElementsByTagName("head")[0].appendChild(script);
  });
}
