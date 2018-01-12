# react-svgporn

[![Build Status](http://img.shields.io/travis/fand/react-svgporn.svg?style=flat-square)](https://travis-ci.org/fand/react-svgporn)
[![NPM Version](https://img.shields.io/npm/v/react-svgporn.svg?style=flat-square)](https://www.npmjs.com/package/react-svgporn)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://fand.mit-license.org/)
[![Coverage Status](https://img.shields.io/coveralls/fand/react-svgporn.svg?style=flat-square)](https://coveralls.io/github/fand/react-svgporn?branch=master)

A React Wrapper for Svgporn.

## Install
`npm i react-svgporn`

## Usage
```javascript
import Logo from 'react-svgporn';

ReactDOM.render(
  <Logo name="React" width={320}/>,
  document.getElementById('logo')
);
```

yields

```
<img src="https://cdn.svgporn.com/logos/react.svg" width="320">
```

<img src="https://cdn.svgporn.com/logos/react.svg" width="320">


If there are multiple logos you can use `type` to filter them.

```js
<Logo name="Github"/>
<Logo name="Github" type="octocat"/>
```

`name` is case-ignorant and matched by levenstein distance.

```js
// These 3 logos renders the same image!
<Logo name="MongoDB"/>
<Logo name="mongodb"/>
<Logo name="mongo"/>
```

### LICENSE
MIT
