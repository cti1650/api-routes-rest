# api-routes-rest

## 目的

このリポジトリは、Next.js で API を作成する方法を個人的に勉強するために作っているものです。
仕様技術は基本的に axios を使用しています！
利用する WebAPI は極力無料で外部公開されているものを中心で使用しています！

最適な方法を知りたいという方には何の参考にもならないと思われますので、
こういうやりかたもあるんだ～程度に留めておいてください^^;

## 参考にしたサイト

### Next.js 関連

- [【next.js】相対パスで指定するのは、もう古い！？たった数行の追加で絶対パスが使える方法とは？](https://qiita.com/syu_ikeda/items/06fe4514f5d518a213b8)

### axios 関連

- [cors に悩まされるな。axios で cors を攻略する](https://qiita.com/inatatsu_csg/items/15f63be00096ec21535e)
- [axios の使い方 - header の付与とか色々](https://kawauso-lab.hatenablog.jp/entry/2020/01/18/223711)

### HTTP 関連

- [HTTP レスポンスステータスコード](https://developer.mozilla.org/ja/docs/Web/HTTP/Status)
- [【PHP】header()関数](https://deep-blog.jp/engineer/12665/)
- [よくある MIME タイプ](https://developer.mozilla.org/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

### WebAPI 関連

- [Google 翻訳 API を無料で作る方法](https://qiita.com/satto_sann/items/be4177360a0bc3691fdf)
- [日本の全エンジニアに捧ぐ！現在公開されている API 一覧【2013 年版】](https://www.find-job.net/startup/api-2013)
- [Rakuten Rapid API](https://api.rakuten.net/)
- [URL Shortener Service](https://api.rakuten.net/BigLobster/api/url-shortener-service)
- [Next.js + Vercel で OGP の画像を動的に生成する](https://zenn.dev/tiwu_dev/articles/68d58d4ab710af)
- [Node.js 公式ドキュメント API 関連](https://nodejs.org/api/http.html)
- [Next.js 公式ドキュメント API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Node.js Redirect URL](https://stackoverflow.com/questions/6234380/nodejs-redirect-url)

### エラー対応

- [Git で大文字と小文字両方のフォルダができてしまったときにどちらか片方を消す方法](https://qiita.com/inductor/items/6d58afd9f6b741208439)

## 使用ツール

### VSCode

github との連携や動作確認などソースコードの管理になくてはならない存在です！  
とは言いつつウェブで完結する統合開発環境「gitpod」「CodePen」「CodeSandBox」や「github desctop」など誘惑多しです！

### Vim

覚えて慣れるまでは大変そうですが、ソースをコピペするだけなどの用途だとコマンドのみで push まで完結してしまうので、  
慣れるとめちゃくちゃ効率良さそうなのでゆっくり学習していきます！

- [Vim モード入門](https://qiita.com/gorilla0513/items/e8ccb15bfc87e7ed8d5b)
- [Vim チートシートを作りました（超初心者用）](https://qiita.com/hattys2/items/56d973ad4f197b751501)

## 使い方

### mkfile

- [テキストファイル表示](https://api-routes-rest-cti1650.vercel.app/api/mkfile?type=text)

```
https://api-routes-rest-cti1650.vercel.app/api/mkfile?type=text
```

- [CSV ファイルをダウンロード](https://api-routes-rest-cti1650.vercel.app/api/mkfile?type=csv)

```
https://api-routes-rest-cti1650.vercel.app/api/mkfile?type=csv
```

- [PDF ファイルをダウンロード](https://api-routes-rest-cti1650.vercel.app/api/mkfile?type=pdf)

```
https://api-routes-rest-cti1650.vercel.app/api/mkfile?type=pdf
```

- [指定 URL にリダイレクト](https://api-routes-rest-cti1650.vercel.app/api/mkfile?type=link)

```
https://api-routes-rest-cti1650.vercel.app/api/mkfile?type=link
```
