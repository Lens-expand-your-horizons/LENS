<template lang="pug">
div
  .page.flex-container
  .Header 
    LensRow.flex-item
    form(action="Japanese", method="get").page__container.flex-item.flex-container
      SearchBoxResult.flex-item
    back-button(onclick="Homepage", method="get") Home
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
.flex-item{
  align-self: start;
  position: relative;
  color: #111;
  z-index: 1; /* LensRowをその他の要素よりも上に配置 */
}
form{
  position: relative;
  z-index: 1; /* LensRowをその他の要素よりも上に配置 */
}
.Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px; /* 高さを変更 */
  background-color: #A7C2EA;
  color: white;
  display: flex; /* 子要素を横並びにするために追加 */
  gap: 30px;
  padding: 25px; /* 内側の余白を設定 */
  z-index: 0; /* 必要に応じてz-indexを調整 */
}

back-button {
  width: 100px;
  height: 40px;
  border-radius: 50px; /* 楕円形にするための設定 */
  background-color: #fff; /* 青色の背景 */
  color: #111; /* 文字色 */
  text-align: center; /* 文字を中央揃え */
  line-height: 40px; /* ボタンの高さと同じにする */
  cursor: pointer; /* カーソルをポインターに変更 */
}

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

</style>