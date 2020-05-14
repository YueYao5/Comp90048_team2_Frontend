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
                    '2011': [18203, 23489, 29034, 104970, 131744, 630230],
                    '2012': [19325, 23438, 31000, 121594, 134141, 681807]
                },
                focusType: 1,
                //定义组件，在上面用：is使用，不需要components注册
                currentView: barEcharts,
                categoryData: {
                    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
                },
                legendData: ['2011', '2012'],
                echarttitle: {
                    text: '世界人口总量',
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