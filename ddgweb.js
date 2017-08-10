var ddg = {};

// Find app name for &t=appName required by DuckDuckGO
window.addEventListener("load", function() {
  ddg.appName = (function() {
    var q = document.querySelector("meta[name=application-name]");
    if(q)
      return q.getAttribute("content");
    else
      return document.title;
  })();  
});

ddg.rawAPI = function(query, skip_disambig) {
  if(skip_disambig === undefined) {
    skip_disambig = 1;
  }
  
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
    script.src = "http" + (ssl ? "s": "") + "://api.duckduckgo.com/?q=" + encodeURI(query) + "&format=json&pretty=0&skip_disambig=" + skip_disambig + "&callback=" + name +
      (ddg.appName ? "&t=" + encodeURI(ddg.appName) : "");
    document.getElementsByTagName("head")[0].appendChild(script);
  });
}

ddg.result = function(query) {
  return ddg.rawAPI(query, 1).then(function(json) {
    var newResult = {};
    if(json.AbstractText) {
      newResult.text = (json.AbstractText);
    } else if (json.RelatedTopics[0] && json.RelatedTopics[0].Text) {
      newResult.text = (json.RelatedTopics[0].Text);
    } else {
      newResult.text = null;
    }

    if(json.AbstractURL) {
      newResult.src = json.AbstractURL;
    } else {
      newResult.src = null;
    }
    
    // Find the icon
    newResult.icon = {};
    if(json.Image) {
      newResult.icon.src = json.Image;
      newResult.icon.height = json.ImageHeight | 0 || null;
      newResult.icon.width = json.ImageWidth | 0 || null;
    } else if(json.RelatedTopics[0] && json.RelatedTopics[0].Icon) {
      newResult.icon.src = json.RelatedTopics[0].Icon.URL;
      newResult.icon.height = json.RelatedTopics[0].Icon.Height | 0 || null;
      newResult.icon.width = json.RelatedTopics[0].Icon.Width | 0 || null;
    }
    
    // Name
    if(!json.Heading)
      return Promise.reject("No query found");
    newResult.name = json.Heading;
    
    return Promise.resolve(newResult);
  });
}
