<template lang="pug">
div
.page.flex-container
    .Header 
      LensRow.flex-item.lensrow
      form(action="Japanese", method="get").page__container.flex-item.flex-container
        SearchBoxResult.flex-item
      nuxt-link.back-button(to='/')
        | Home
    .Contents
      .result
        div(v-for="r in result" :key="r.id")
            h3 {{ r.name }}
            div {{ r.detail }}
</template>

<script setup lang="ts">
const result = [
    {
        id: 1,
        name: 'ニュースタイトル',
        detail: '日本語でほにゃらら日本語でほにゃらら日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ'
    },
    {
        id: 2,
        name: 'ニュースタイトル',
        detail: '日本語でほにゃらら日本語でほにゃらら日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ'
    },
    {
        id: 3,
        name: '荒木達亘 死亡',
        detail: '日本語でほにゃらら日本語でほにゃらら日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ'
    },
    {
        id: 4,
        name: '荒木達亘 三日後に生き返る',
        detail: '日本語でほにゃらら日本語でほにゃらら日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ日本語でほにゃらら日本語ではにゃほれ'
    },
]
</script>

<style lang="scss">

body{
  margin: 20px; /* bodyの外側の余白を指定する */
  padding: 50px 10px 50px 10px; /* bodyの内側余白を指定する(上:右:下:左) */
  background-color: #fff;
}
.flex-item{
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

button.back-button {
  width: 100px;
  height: 40px;
  border-radius: 50px; /* 楕円形にするための設定 */
  background-color: #fff; /* 青色の背景 */
  color: #111; /* 文字色 */
  text-align: center; /* 文字を中央揃え */
  line-height: 40px; /* ボタンの高さと同じにする */
  cursor: pointer;
}

.result {
  width: 600px;
  margin-left: 130px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  /* 他のスタイルを追加 */
}
</style>