# Webpack4 + babelの環境構築サンプル

## やりたいこと

- ES6をES5にトランスパイル
- ソースマップが欲しい

## 設定手順

```
yarn init -y
yarn add --dev webpack webpack-cli
```

```
  "scripts": {
    "help": "webpack-cli --help",
    "build": "webpack-cli --mode development",
    "build-production": "webpack-cli --mode production && rm -f dist/main.js.map",
    "watch": "webpack-cli --watch --mode development"
  },
```

- webpack4では設定ファイル `webpack.config.js` は無くても動作するようになった。
    - デフォルトでよしなに計らってくれる
    - エントリポイントは `./src/index.js`
    - 出力先は `./dist/main.js`
    - `--mode development` でビルドするとminifyしない
    - `--mode production` でビルドするとminifyする
