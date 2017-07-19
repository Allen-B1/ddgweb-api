var ddg = {};
ddg.appName = (function() {
  var q = document.querySelector("meta[name=application-name]");
  if(q)
    return q.getAttribute("content");
  else
    return document.title;
})();
ddg.rawAPI = function(query, appName) {
  // Http or Https?
  var ssl = false;
  if(location.href.indexOf("https") == 0)
    ssl = true;

  // Return a Promise
  return new Promise(function(resolve, reject) {
    // JSONP stuff
    var now = Date.now();
    var name = "ddg_rawApi_" + now + "" + Math.floor(Math.random() * 1000 + 1);
    window[name] = resolve;
    var script = document.createElement("script");
    script.src = "http" + (ssl ? "s": "") + "://api.duckduckgo.com/?q=" + encodeURI(query) + "&format=json&pretty=0&callback=" + name +
      (appName ? "&t=" + appName : "");
    document.getElementsByTagName("head")[0].appendChild(script);
  });
}

ddg.result = function(query, appName) {
  return new Promise(function(resolve, reject) {
    ddg.rawAPI(query, appName).then(function(json) {
      var newResult = {};
      if(json.AbstractText) {
        newResult.text = (json.AbstractText);
      } else if (json.RelatedTopics[0].Text) {
        newResult.text = (json.RelatedTopics[0].Text);
      } else {
        reject();
      }
      
      if(json.AbstractSource) {
        newResult.src = json.AbstractSource;
      } else {
        newResult.src = null;
      }
      resolve(newResult);
    });
  });
}
