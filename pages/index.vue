<script setup lang="ts">
import { fromOptions, toOptions } from '@/utils/consts';

useSeoMeta({
    title: 'LENS: expand your horizons',
    description:
        'Meta search engine that allows you to search the web in different languages and different countries.',
    ogTitle: 'LENS: expand your horizons',
    ogDescription:
        'Meta search engine that allows you to search the web in different languages and different countries.',
    ogUrl: 'https://lens-s.com',
});
</script>

<template lang="pug">
.page.flex-container
    TitleRow.flex-item.Title
    form(action="/search", method="get").page__container.flex-item.flex-container
        SearchBox.flex-item
        hr
        //p 英文のWebサイトを日本語で検索・閲覧できます
        .Select
            SelectRegion.flex-item.Countries(
                name="from"
                placeholder="入力した言語"
                :options="fromOptions"
            )
            SelectRegion.flex-item.Language(
                name="to"
                placeholder="検索したい言語"
                :options="toOptions"
            )
    img.fit(
        src="/Earth.jpg"
)
</template>

<style scoped lang="scss">
body {
    background-color: #fff;
}

/* フォームのスタイル */
.flex-container {
    justify-content: flex-start; // 要素を左寄せにする
    padding-left: 20px; // 左側の余白を追加
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.page {
    margin-top: 40px;
}

.Title {
    width: 30%;
}

form {
    justify-content: flex-start; // 要素を左寄せにする
    margin: 20px; // 他のスタイルを追加

    /* 他のスタイルを追加 */

    .Select {
        display: flex;
        margin-top: 30px;
        justify-content: center;
        gap: 30px;
    }

    .Countries.Language {
        margin: 30px;
    }
}

.fit {
    margin-top: 5px;
    width: 80%;
    opacity: 0.3;
}
</style>
