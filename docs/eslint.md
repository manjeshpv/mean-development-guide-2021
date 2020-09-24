

## add this items to package.json in devDependencies

```json
{
 "eslint": "^4.11.0",
"eslint-config-airbnb": "^16.1.0",
"eslint-plugin-import": "^2.8.0",
"eslint-plugin-jsx-a11y": "^6.2.1",
"eslint-plugin-react": "^7.13.0"
}
```


```shell script
npm i 

```

## nano .eslintrc
```json
{
  "parserOptions": {
    "ecmaVersion": 8
  },
  "extends": [
    "airbnb/base"
  ],
  "env": {
    "mocha": true
  },
  "globals": {
    "expect": true,
    "Promise": true
  },
  "rules": {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "max-len": ["error", 140]
  }
}

```


## add script

```json
{
 "lint": "eslint --fix --ext .js --ignore-path .gitignore server/**/*.js"
}

```

## run eslint

```shell script
npm run lint
```