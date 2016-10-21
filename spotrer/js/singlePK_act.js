/**
 * Created by zhengyunzhi on 16/06/20.
 */


require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

require(
    [
        'echarts',
        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载

    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('singlePK_graph'));

        var option = {
            tooltip : {
                trigger: 'axis'
            },
            toolbox: {
                show : false,
            },
            calculable : true,
            legend: {
                data:['Tom','Jerry']
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['06/01','06/02','06/03','06/04','06/05','06/06','06/07','06/08','06/09','06/06','06/11','06/12','06/13','06/14',
                        '06/15','06/16','06/17','06/18','06/19','06/20','06/21','06/22']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : 'steps',
                    axisLabel : {
                        formatter: '{value} steps'
                    }
                }
            ],
            series : [

                {
                    name:'Tom',
                    type:'bar',
                    data:[6200, 5490, 7703, 3211, 5236, 6427, 3026, 9602, 8326, 6520, 6644, 7453,1242,5323, 3142,4322,3423,6423,1234,2123,2321,4121],
                    itemStyle:{
                        normal: {
                            color:
                            "#FFCE54"
                        }
                    }
                },

                {
                    name:'Jerry',
                    type:'bar',
                    data:[1242,6200, 5490, 7703, 3211, 5236, 6427, 3026, 9602, 8326, 6520, 6644, 7453,1242,5323, 3142,4322,3423,6423,1234,2123,2321],
                    itemStyle:{
                        normal: {
                            color:
                                "#48CFAD"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    }
);