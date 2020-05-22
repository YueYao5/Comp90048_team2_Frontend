<template>
    <div>

        <component :is="currentView"
                   :data="barData"
                   :title="echarttitle"
                   width="1000"
                   height="400"
                   :category="categoryData"
                   :legend="legendData"
                   seriesType="bar">
        </component>
        <p>{{explanation}}</p>
    </div>

</template>

<script>
    import barEcharts from './EChartStyle' //导入组件
    var probability=[]
    var threshold=[]
    var matricsName=[]
    var explanation
    export default {
        name: "ResultPage",
        data(){
            //console.log(this.$route.query.data)
            return {
                data:this.$route.query.data,

                // 算法查询值返回
                resultData: {
                    fileName:"fileName.txt",
                    possibility:"0.8",
                    submissionTime:"012-03-24 01:23:34.0"
                },
                // 图表数据
                barData: {
                    'possibility':probability,
                    'threshold':threshold
                },
                focusType: 1,
                //定义组件，在上面用：is使用，不需要components注册
                currentView: barEcharts,
                categoryData: {
                    data: matricsName
                },
                legendData: ['possibility','threshold'],
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
            console.log(this.resultData)
        },
        methods:{

        },
        created() {

            this.resultData=this.$route.query.data;
            console.log(this.resultData);
            for (var i in this.resultData["probabilityTable"]){
                probability.push(this.resultData["probabilityTable"][i]["similarity"]*100)
                matricsName.push(this.resultData["probabilityTable"][i]["metricsName"])
            }
            for (var i in this.resultData["thresholdTable"]){
                threshold.push(this.resultData["thresholdTable"][i]["threshold"]*100)
            }
            explanation=this.resultData["explanation"]
        }

    }
</script>

<style>
    body {
        margin: 0;
    }
</style>