# duckduckgo-web
A DuckDuckGo API for the web in javascript

## Getting Started
Step 1: Include `ddgweb.js`
```html
<script src="https://cdn.rawgit.com/Allen-B1/duckduckgo-web/bf4e65a1/ddgweb.js"></script>
```

Step 2:
```js
ddg.result("DuckDuckGo").then(function(result) {
  alert(result.text);
});
```
### Next steps
Read the [API documentation](docs/API.md)
