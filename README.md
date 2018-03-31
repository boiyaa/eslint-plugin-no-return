# eslint-plugin-no-return


[![npm](https://img.shields.io/npm/v/eslint-plugin-no-return.svg)](https://www.npmjs.com/package/eslint-plugin-no-return)
[![Build Status](https://travis-ci.org/boiyaa/eslint-plugin-no-return.svg?branch=master)](https://travis-ci.org/boiyaa/eslint-plugin-no-return)

ESLint plugin to disable return statement

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-return`:

```
$ npm install eslint-plugin-no-return --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-return` globally.

## Usage

Add `no-return` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-return"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-return/no-return": 2
    }
}
```

## Supported Rule

* `no-return` - disallow `return` statements
