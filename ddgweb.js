var ddg = {};
ddg.rawAPI = function(query) {
  var ssl = false;
  if(location.href.indexOf("https") == 0)
    ssl = true;
  return new Promise(function(resolve, reject) {
    var now = Date.now();
    var name = "ddg_rawApi_" + now + "" + Math.floor(Math.random() * 1000 + 1);
    window[name] = resolve;
    var script = document.createElement("script");
    script.src = "http" + (ssl ? "s": "") + "://api.duckduckgo.com/?q=" + encodeURI(query) + "&format=json&pretty=0&callback=" + name;
    document.getElementsByTagName("head")[0].appendChild(script);
  });
}
