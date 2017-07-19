# Documentation
## Functions
### `result`
```js
ddg.result(query)
```
This function looks up `query` and returns a `Promise` with one argument. If a result was found, the promise resolves with the object described below.

If no result was found, the function is rejected.

**Example**
```js
ddg.result("DuckDuckGo").then(function(res) {
  console.log(res.text);
}).catch(function() {
  console.error("There was an error.");
});
```
### `rawAPI`
```js
ddg.rawAPI(query)
```
This is the internal function used by the library. It sends a JSONP request and returns a `Promise` with the corresponding JSON data.

**Example**
```js
ddg.rawAPI(query).then(function(json) {
  console.log(json);
});
```

## Types
### The object resolved by `ddg.result`
This should give you a good idea of what the object looks like:
```js
({
  text: "In computing, internationalization and localization are means of adapting computer software to different languages, regional differences and technical requirements of a target market. Internationalization is the process of designing a software application so that it can potentially be adapted to various languages and regions without engineering changes. Localization is the process of adapting internationalized software for a specific region or language by adding locale-specific components and translating text. Localization uses the infrastructure or flexibility provided by internationalization.",
  src: "Wikipedia",
  icon: {
    src: "https://duckduckgo.com/i/6df33ee7.png",
    width: 266,
    height: 200
  }
})
```

`text` is guarenteed never to be `null`. Everything else can be `null`.
