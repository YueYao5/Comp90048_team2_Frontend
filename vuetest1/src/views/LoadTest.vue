<template>
    <div>
        <el-button type="primary" @click="openFullScreen2">Loading</el-button>
    </div>
</template>

<script>
    import { Loading } from 'element-ui';
    export default {
        name: "LoadTest",
        data() {
            return {
                fullscreenLoading: false
            }
        },
        methods: {
            openFullScreen2() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.8)'
                });
                setTimeout(() => {
                    loading.close();
                }, 2000);
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>