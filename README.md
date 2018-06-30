# Webpack4 + babelの環境構築サンプル

- ES6をES5にトランスパイル


```
yarn init -y
yarn add --dev webpack webpack-cli
```

```
  "scripts": {
    "help": "webpack-cli --help",
    "build": "webpack-cli --mode development",
    "build-production": "webpack-cli --mode production",
    "watch": "webpack-cli --watch --mode development"
  },
```

- webpack4では設定ファイル `webpack.config.js` は無くても動作するようになった。
    - デフォルトでよしなに計らってくれる
    - エントリポイントは `./src/index.js`
    - 出力先は `./dist/main.js`
    - `--mode development` でビルドするとminifyしない
    - `--mode production` でビルドするとminifyする
