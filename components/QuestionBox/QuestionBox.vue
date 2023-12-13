<template lang="pug">
a.questionnaire-button(
        href="https://forms.gle/XvRS2BkAWCGhTaor9"
        data-show-count="false"
    ) 
        .button 
            img(
                src="/Question.svg"
            ) 
</template>

<style lang="scss">
.questionnaire-button {
    width: 2rem;
    border: 2px solid #f9c936; /* 外枠を追加 */
    padding: 4px; /* 内側の余白を設定 */
    border-radius: 50px;
    display: block;
    align-items: center;
}
.button {
    width: 2rem;
}
</style>
