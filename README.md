# ddgweb-api
A DuckDuckGo API for the web in JavaScript with no dependencies.

Please note that this is not an official api.

## Getting Started
Step 1: Include `ddgweb.js`
```html
<script src="https://cdn.rawgit.com/Allen-B1/ddgweb-api/master/ddgweb.min.js"></script>
```

Step 2:
```js
ddg.result("DuckDuckGo").then(function(result) {
  alert(result.text);
});
```
### Next steps
For the full documentation, read the [API documentation](docs/API.md)
