<script setup>
// you don't need this: only for testing purposes
const date = useAppConfig().buildDate

const { $pwa } = useNuxtApp()
</script>

<template lang="pug">
main
    slot
    footer Built Date: {{ date }}
    ClientOnly
        .pwa-toast(
            v-if="$pwa?.offlineReady || $pwa?.needRefresh"
            role="alert"
        )
            .message
                span(v-if="$pwa.offlineReady")
                    | App ready to work offline
                span(v-else)
                    | New content available, click on reload button to update.
            button(
                v-if="$pwa.needRefresh"
                @click="$pwa.updateServiceWorker()"
            ) Reload
            button(@click="$pwa.cancelPrompt()")
                | Close
        .pwa-toast(
            v-if="$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh"
            role="alert"
        )
            .message
                span Install PWA
            button(@click="$pwa.install()")
                | Install
            button(@click="$pwa.cancelInstall()")
                | Cancel
</template>

<style lang="scss">
$bg: #fff;

*, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.pwa-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 100px;
    padding: 12px;
    border: 1px solid #8885;
    border-radius: 4px;
    z-index: 1;
    text-align: left;
    box-shadow: 3px 4px 5px 0 #8885;

    .message {
        margin-bottom: 8px;
    }

    button {
        border: 1px solid #8885;
        outline: none;
        margin-right: 5px;
        border-radius: 2px;
        padding: 3px 10px;
    }
}
</style>