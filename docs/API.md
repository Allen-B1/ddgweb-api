# Documentation
## `ddg.result`
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

## The `res` object
The `res` object contains the following members:
 - `res.text`
 - `res.src`
