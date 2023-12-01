<template lang="pug">
back-button.page__container.flex-item.flex-container(onclick="Homepage", method="get") Home
</template>

<style lang="scss">
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
</style>