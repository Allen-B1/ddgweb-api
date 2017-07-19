# Documentation
## Functions
### `result`
```js
ddg.result(query)
```
This function looks up `query` and returns a `Promise` with one argument. The argument is described below, as the `res` object. If no result was found, the function is rejected.

**Example**
```js
ddg.result("DuckDuckGo").then(function(res) {
  console.log(res.text);
}).error(function() {
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
### The `res` object
The `res` object contains the following members:
 - `res.text`
 - `res.src`
