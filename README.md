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
sanketa(12345, {reverse: true}); // => '123,45'
sanketa('sushi', {reverse: true}); // => 'sus,hi'
```

**Custom Sepalater:**
```js
sanketa('sushi', {sepalater: '🍣'}); // => 'su🍣shi'
sanketa('sushi', {reverse: true, sepalater: '🍣'}); // => 'sus🍣hi'
```

**Multi Sepalaters:**
```js
sanketa('sushi!sushi!', {sepalater: ['🍣', '🍵']}); // => 'sus🍣hi!🍵sus🍣hi!'
```

**Sign of number:**
```js
sanketa(12345); // => '12,345'
sanketa(-12345); // => '-12,345'
sanketa(12345, {signOfNumber: true}); // => '+12,345'
sanketa(-12345, {signOfNumber: true}); // => '-12,345'
```
