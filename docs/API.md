# Documentation
## Functions
### `result`
```js
ddg.result(query)
```
This function looks up `query` and returns a `Promise` with one argument. If a result was found, the promise resolves with a `ResultResolveType`

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
None of these are actually types, they just represent what functions return.

### `ResultResolveType`

```js
({
  text: "In computing, internationalization and localization are means of adapting computer software to different languages, regional differences and technical requirements of a target market. Internationalization is the process of designing a software application so that it can potentially be adapted to various languages and regions without engineering changes. Localization is the process of adapting internationalized software for a specific region or language by adding locale-specific components and translating text. Localization uses the infrastructure or flexibility provided by internationalization.",
  src: "http://www.wikipedia.org/...",
  name: "Internationalisation and localisation",
  icon: {
    src: "https://duckduckgo.com/i/6df33ee7.png",
    width: 266,
    height: 200
  }
})
```

#### Fields

| Name | Description | Type |
|------|---------|------|
| `name` | What the query was | `String` |
| `text` | A description of `name` | `String` |
| `src` | The source of the informati on | `String` |
| `icon` | The icon | `Object` |

where `icon` contains the following fields: 

| Name | Description | Type |
|------|---------|------|
| `src` | The source of the image | `String` |
| `width` | The width of the image | `Number` |
| `height` | The height of the image | `Number` |
