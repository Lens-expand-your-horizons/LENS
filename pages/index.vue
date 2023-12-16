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

const query = ref('');
const from = ref('');
const to = ref('');
const translator = 'google';

const submit = (e: Event) => {
    e.preventDefault();
    const q = document.getElementById('q');
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    if (!q || !to || !from) {
        return;
    }
    if (!from.value) {
        from.value = 'auto';
    }
    navigateTo({
        path: '/search',
        query: {
            q: q.value,
            from: from.value,
            to: to.value,
            translator,
        },
    });
};
</script>

<template lang="pug">
.page.flex-container
    //.Header 
    //  TwitterBox.head-item
    //  QuestionBox.head-item
    form(@submit="submit").form.flex-item.flex-container
        TitleRow.flex-item.Title
        SearchBox.flex-item(v-model="query")
        //p 英文のWebサイトを日本語で検索・閲覧できます
        .Select.flex-item.flex-container
            SelectRegion.flex-item(
                name="from"
                placeholder="入力した言語"
                :options="fromOptions"
            )
            SelectRegion.flex-item(
                name="to"
                placeholder="検索する言語"
                :options="toOptions"
            )
    img.fit(src="/images/Earth.svg" alt="Earth illust")
</template>

<style scoped lang="scss">
body {
    background-color: #fff;
    width: 100%;
    overflow-x: hidden;
}

/* フォームのスタイル */
.flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem
}

.head-item {
    width: 2rem;
}

.page {
    width: 90%;
    margin: 0 auto 0;
    height: 100vh;
    gap: 5%;

    @media screen and (min-width: 40rem) {
        width: 80%;
    }
}

.Title {
    width: 60%;
}

.form {
    width: 100%;
    max-width: 35rem;

    .Select {
        justify-content: space-between;
        width: 100%;
        gap: 1rem;

        @media screen and (min-width: 40rem) {
            flex-direction: row;
            gap: 2rem;
        }
    }
}

.fit {
    width: 100%;
    opacity: 0.3;
}
</style>
