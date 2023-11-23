<template lang="pug">
div
  .page.flex-container
  .Header 
    LensRow.flex-item
    form(action="Japanese", method="get").page__container.flex-item.flex-container
        SearchBoxResult.flex-item
  .back-button(onclick="window.location.href='/'") ホームに戻る
  .Contents
    .result
      .column(v-for="c in columns" :key="c.searchEngine")
        h2 {{c.searchEngine}}
        div
          div(v-for="row in c.result" :key="row.id")
            h3 {{ row.name }}
            div {{ row.detail }}
</template>

<script setup lang="ts">
const columns = [
    {
        searchEngine: 'Google',
        result: [
            {
                id: 1,
                name: 'result1',
                detail: '日本語でほにゃらら　日本語でほにゃらら'
            },
            {
                id: 2,
                name: 'result2',
                detail: '日本語ではにゃほれ　日本語ではにゃほれ'
            },
        ]
    },
    {
        searchEngine: 'Bing',
        result: [
            {
                id: 1,
                name: 'result1',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
            },
            {
                id: 2,
                name: 'result2',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
            },
        ]
    }
]
</script>

<style lang="scss">

body{
  margin: 20px; /* bodyの外側の余白を指定する */
  padding: 50px 10px 50px 10px; /* bodyの内側余白を指定する(上:右:下:左) */
  background-color: #fff;
}
.flex-item {
  position: relative;
  z-index: 1; /* LensRowをその他の要素よりも上に配置 */
}
.page__container.flex-item.flex-container{
  position: relative;
  z-index: 1; /* LensRowをその他の要素よりも上に配置 */
}
.Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px; /* 高さを変更 */
  background-color: #A7C2EA;
  color: white;
  display: flex; /* 子要素を横並びにするために追加 */
  align-items: center; /* 子要素を中央揃えにするために追加 */
  justify-content: space-between; /* 子要素を均等に配置するために追加 */
  padding: 0 20px; /* 内側の余白を設定 */
  z-index: 0; /* 必要に応じてz-indexを調整 */
}

.back-button {
  margin: 40px;
  width: 100px;
  height: 40px;
  border-radius: 50px; /* 楕円形にするための設定 */
  background-color: blue; /* 青色の背景 */
  color: white; /* 文字色 */
  text-align: center; /* 文字を中央揃え */
  line-height: 40px; /* ボタンの高さと同じにする */
  cursor: pointer; /* カーソルをポインターに変更 */
}

/* 検索窓のスタイル */

/* ボタンのスタイル（非表示のためのスタイルも含む） */
input[type="submit"] {
  display: none;
  /* ボタンを非表示にする */
}

label {
  display: block;
  /* 他のスタイルを追加 */
}

/* フォームのスタイル */
form {
  margin-bottom: 20px;
  /* 他のスタイルを追加 */
}

/* 検索結果のスタイル */
.result {
  display: flex;
  flex-direction: column;
  /* 他のスタイルを追加 */
}

/* 検索結果の各列のスタイル */
.column {
  margin-bottom: 20px;
  /* 他のスタイルを追加 */
}

/* その他、必要なスタイルを追加 */
/* ... */
</style>