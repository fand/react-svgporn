const test = require('ava');
const Logo = require('../src');
const React = require('react');
const render = require('enzyme').render;

test('<Logo/> renders <img> element', t => {
  const wrapper = render(<Logo name="React" width="100" alt="alt" title="title"/>);
  t.is(wrapper.html(), '<img src="https://s3-us-west-2.amazonaws.com/svgporn.com/logos/react.svg" name="React" width="100" alt="alt" title="title">');
});

test('type can be used to filter multiple images', t => {
  const wrapper = render(<Logo name="Github" type="octocat"/>);
  t.is(wrapper.html(), '<img src="https://s3-us-west-2.amazonaws.com/svgporn.com/logos/github-octocat.svg" name="Github" type="octocat">');
});

test('name is case-ignorant', t => {
  t.is(render(<Logo name="react"/>).html(), render(<Logo name="React"/>).html());
});

test('name matches by levenstein distance', t => {
  t.is(render(<Logo name="mongodb"/>).html(), render(<Logo name="MongoDB"/>).html());
  t.is(render(<Logo name="mongo"/>).html(), render(<Logo name="MongoDB"/>).html());
});

test('<Logo/> renders empty string if the name is not valid', t => {
  const wrapper = render(<Logo name="__INVALID_NAME__"/>);
  t.is(wrapper.html(), '');
});

test('<Logo/> renders empty string if the type is not valid', t => {
  const wrapper = render(<Logo name="React" type="__INVALID_TYPE__"/>);
  t.is(wrapper.html(), '');
});
