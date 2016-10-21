
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

require(
    [
        'echarts',
        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
        'echarts/chart/line'

    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('daily_speed_records'));

        var option = {
            tooltip : {
                trigger: 'axis'
            },
            toolbox: {
                show : false,
            },
            calculable : true,
            legend: {
                data:['steps','average-speed']
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['10/01','10/02','10/03','10/04','10/05','10/06','10/07','10/08','10/09','10/10','10/11','10/12','10/13','10/14',
                        '10/15','10/16','10/17','10/18','10/19','10/20','10/21','10/22']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : 'steps',
                    axisLabel : {
                        formatter: '{value} steps'
                    }
                },
                {
                    type : 'value',
                    name : 'speed',
                    axisLabel : {
                        formatter: '{value} km/h'
                    }
                }
            ],
            series : [

                {
                    name:'steps',
                    type:'bar',
                    data:[62000, 54900, 77023, 43211, 55236, 64327, 35026, 96202, 88326, 66520, 66544, 74533,12342,54323, 23142,43223,23423,65423,12343,42123,12321,43121],
                    itemStyle:{
                        normal: {
                            // color:
                            // "#FFCE54,#EC87C0,#4FC1E9"
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                          "#C1232B","#B5C334","#FCCE10","#E87C25","#27727B",
                                "#FE8463","#9BCA63","#FAD860","#F3A43B",
                                    "#FFCE54","#EC87C0","#4FC1E9","#C1232B","#B5C334","#FCCE10","#E87C25","#27727B",
                                    "#FE8463","#9BCA63", "#C1232B","#B5C334","#FCCE10"
                                ];
                                return colorList[params.dataIndex]
                            }
                        }
                    }
                },
                // {
                //     name:'speed',
                //     type:'line',
                //     data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                // },
                {
                    name:'average-speed',
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4,12,2,21,2]
                }
            ]
        };
        myChart.setOption(option);
    }
);