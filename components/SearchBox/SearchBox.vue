<template>
    <div class="SearchBox">
    <input id="q" class="q" type="search" enterkeyhint="search" name="q" placeholder="Search...">
    <button id="search" @click="executeSearch">
      <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :d="searchIconPath" fill="black" />
      </svg>
    </button>
  </div>
</template>
  
<script setup>
  import { defineEmits } from 'vue';
  
  const emits = defineEmits(['submit']);
  
  const searchIconPath = "M27.5712 24.9462H26.1887L25.6987 24.4737C27.4137 22.4787 28.4462 19.8887 28.4462 17.0712C28.4462 10.7887 23.3537 5.69624 17.0712 5.69624C10.7887 5.69624 5.69623 10.7887 5.69623 17.0712C5.69623 23.3537 10.7887 28.4462 17.0712 28.4462C19.8887 28.4462 22.4787 27.4137 24.4737 25.6987L24.9462 26.1887V27.5712L33.6962 36.3037L36.3037 33.6962L27.5712 24.9462ZM17.0712 24.9462C12.7137 24.9462 9.19623 21.4287 9.19623 17.0712C9.19623 12.7137 12.7137 9.19624 17.0712 9.19624C21.4287 9.19624 24.9462 12.7137 24.9462 17.0712C24.9462 21.4287 21.4287 24.9462 17.0712 24.9462Z";
  
  const executeSearch = () => {
    emits('submit'); // 検索実行のイベントを発火
  };
</script>
  
<style scoped>
  .SearchBox {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 500px; /* 幅を調整 */
    height: 40px; /* 高さを適切なサイズに調整 */
    border: 2px solid #000; /* 外枠の線を追加 */
    border-radius: 20px; /* 楕円形にするための適切な値を設定 */
    box-shadow: 2px 2px 4px gray;
  }

  .q {
    flex: 1;
    font-size: 1.5rem; /* 文字サイズを小さく調整 */
    padding: 0 1rem;
    padding-right: 40px; /* 検索アイコンのために右側に余白を設定 */
    border: none; /* 見た目上のボーダーを無効にする */
    outline: none; /* フォーカス時のアウトラインを無効にする（任意） */
  }

  #search {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
  }

</style>
  