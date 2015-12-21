# sanketa

## Description

sanketa inserts every three digits,

## Installation

```
npm i sanketa
```

## Usage

##### Use with node.js, browserify, webpack:

```js
var sanketa = require(sanketa);
```

**Default Sepalater:**

```js
sanketa(12345); // => '123,45'
sanketa('sushi'); // => 'sus,hi'
```

**Reverse:**

```js
sanketa(12345, {r: true}); // => '12,345'
sanketa('sushi', {r: true}); // => 'su,shi'
```

**Custom Sepalater:**
```js
sanketa('sushi', {s: '🍣'}); // => 'sus🍣hi'
sanketa('sushi', {r: true, s: '🍣'}); // => 'su🍣shi'
```

**Multi Sepalaters:**
```js
sanketa('sushi!sushi!', {s: ['🍣', '🍵']}); // => 'sus🍣hi!🍵sus🍣hi!🍵'
```
