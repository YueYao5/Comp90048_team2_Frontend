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
    var result
    var probability=[]
    var threshold=[]
    var matricsName=[]
    export default {
        created:function () {
            //just a test data
            $.ajax({
                url:"http://localhost:8181/runalgo",
                type:"post",
                async:false,
                dataType:"json",
                data:{"userEmail":"saakd@qq.com"},
                success: function(data) {
                    result = data;
                },
                error:function(XMLHttpRequest, textStatus){
                    console.log(XMLHttpRequest);  //XMLHttpRequest.responseText    XMLHttpRequest.status   XMLHttpRequest.readyState
                    console.log(textStatus);
                }
            })
            console.log(result)
            for (var i in result["probabilityTable"]){
                probability.push(result["probabilityTable"][i]["similarity"]*100)
                matricsName.push(result["probabilityTable"][i]["metricsName"])
            }
            for (var i in result["thresholdTable"]){
                threshold.push(result["thresholdTable"][i]["threshold"]*100)
            }

        },
        name: 'HelloWork',
        data () {

            return {
                // 图表数据
                barData: {
                    'possible':probability,
                    'threshold':threshold
                },
                focusType: 1,
                //定义组件，在上面用：is使用，不需要components注册
                currentView: barEcharts,
                categoryData: {
                    data: matricsName
                },
                legendData: ['possible','threshold'],
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