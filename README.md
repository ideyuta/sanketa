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

Default inserts is from behind.

```js
sanketa(12345); // => '12,345'
sanketa('sushi'); // => 'su,shi'
```

**Reverse:**

```js
sanketa(12345, {r: true}); // => '123,45'
sanketa('sushi', {r: true}); // => 'sus,hi'
```

**Custom Sepalater:**
```js
sanketa('sushi', {s: '🍣'}); // => 'su🍣shi'
sanketa('sushi', {r: true, s: '🍣'}); // => 'sus🍣hi'
```

**Multi Sepalaters:**
```js
sanketa('sushi!sushi!', {s: ['🍣', '🍵']}); // => 'sus🍣hi!🍵sus🍣hi!'
```
