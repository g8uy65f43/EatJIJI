# EatJIJI
## 使い方
Live serverなどの拡張機能で開いてください。
## 詳細
  ## 開発の経緯・ストーリー
  JAVA発足したばかりの友達と一緒に作った鶏肉専門通販サイトです。
  彼はまだあまりSSRについて詳しくないため、CSRにしました。
  ## 実現した機能
  １、商品の展示  
  ２、会員登録とログイン  
  ３、会員ページ  
  ４、localStorageで選んだ商品のデータをキープ  
  ## 使用した技術
  ### フロント・クライアント技術
   -JavaScript,HTML,CSS,Bootstrap
  ### サポート  
  Python  
もし商品ページが開けない場合は、JSファイルのallgoods.jsに書いてある  
window.location.assign(`http://127.0.0.1:5501/goods_page/${i}.html`)  
を自分のポートに変更してください  
## 使用した技術の選定理由
Python以外は友達のニーズに合わせるために選びました。  
Pythonを使う理由はウェブスクレイピングで肉屋のウェブサイトの商品図やタイトルなどをを抽出するとTemplateで商品ページを作成するためです。
