const React = require('react');
const files = require('./files');
const memoize = require('lodash.memoize');
const leven = require('leven');

const match = memoize((str, name) => leven(str.toLowerCase(), name.toLowerCase()));

function suggestName (name) {
  if (files[name]) {
    return name;
  }
  const nameRegExp = new RegExp(name, 'i');
  return Object.keys(files)
    .filter(k => nameRegExp.test(k))
    .sort((a, b) => match(a, name) - match(b, name))[0];
}

module.exports = function Logo (props) {
  const { name, type = '' } = props;
  const suggestedName = suggestName(name);
  const filesForName = files[suggestedName];
  if (!filesForName) {
    return null;
  }

  const file = filesForName.filter(f => f.match(type || ''))[0];
  if (!file) {
    return null;
  }

  return <img src={`https://cdn.svgporn.com/logos/${file}`} {...props} name={suggestedName}/>;
};
