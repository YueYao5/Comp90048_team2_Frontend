<template>
    <div>
        <component :is="currentView"
                   :data="barData"
                   :title="echarttitle"
                   width="1000"
                   height="400"
                   :category="categoryData"
                   :legend="legendData"
                   seriesType="bar"></component>
    </div>
</template>

<script>
    import barEcharts from './EChartStyle' //导入组件
    export default {
        name: 'HelloWork',
        data () {
            return {
                // 图表数据
                barData: {
                    'possible':[18, 30, 60, 50, 70, 90],
                    'treshold':[18, 30, 20, 50, 70, 10]
                },
                focusType: 1,
                //定义组件，在上面用：is使用，不需要components注册
                currentView: barEcharts,
                categoryData: {
                    data: ['algo1', 'algo2', 'algo3', 'algo4', 'algo5', 'algo6']
                },
                legendData: ['possible','treshold'],
                echarttitle: {
                    text: 'Result(%)',
                    left: 'right',
                    textStyle: {
                        color: '#FF0000',
                        // 字体风格,'normal','italic','oblique'
                        fontStyle: 'normal',
                        // 字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                        fontWeight: 'bold',
                        // 字体系列
                        fontFamily: 'sans-serif',
                        // 字体大小
                        fontSize: 18
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>