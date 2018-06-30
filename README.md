# Webpack4 + babelの環境構築サンプル

## できるようにしたこと

- ES6をES5にトランスパイル
- ソースマップが欲しい
    - productionでも生成されてしまうので、デプロイ時には除外するようにする
- 開発用サーバを起動してライブリロード

## 設定手順

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
- webpack-dev-server
    - 参考: http://nogson2.hatenablog.com/entry/2018/02/01/005525
