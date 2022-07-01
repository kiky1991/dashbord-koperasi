jQuery(function ($) {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    $(document).ready(function () {
        get_shu()
        get_modal()
        get_assets()
        get_anggota()
        get_pinjaman()
        get_pendapatan()
        get_biaya()
        get_target_realisasi()
    })

    function get_modal() {
        var chartDom = document.getElementById('echart-modal');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                formatter: '{b0} {c0}'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    data: [790, 932, 801, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {
                        opacity: '0.4'
                    },
                    smooth: true,
                    lineStyle: { width: 3 },
                    showSymbol: false,
                }
            ],
            grid: {
                bottom: '2%',
                top: '2%',
                right: '10px',
                left: '10px'
            }
        };

        option && myChart.setOption(option);
    }

    function get_assets() {
        var chartAssets = document.getElementById('echart-assets');
        var myChart = echarts.init(chartAssets);
        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                formatter: '{b0} {c0}'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    data: [234, 232, 301, 234, 490, 230, 320],
                    type: 'line',
                    areaStyle: {
                        opacity: '0.4'
                    },
                    smooth: true,
                    lineStyle: {},
                    showSymbol: false,
                }
            ],
            grid: {
                bottom: '2%',
                top: '2%',
                right: '10px',
                left: '10px'
            }
        };

        option && myChart.setOption(option);
    }

    function get_shu() {
        var dom = document.getElementById('echart-bar-shu')
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                formatter: '{b0} {c0}'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'ss'],
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    data: [120, 100, 150, 80, 120, 200, 150, 90],
                    type: 'bar'
                }
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);
    }

    function get_anggota() {
        var anggotaDom = document.getElementById('echart-anggota');
        var myChart = echarts.init(anggotaDom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });

        var option;

        option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center',
                show: false
            },
            series: [
                {
                    name: 'Jumlah Anggota',
                    type: 'pie',
                    radius: ['75%', '90%'],
                    avoidLabelOverlap: true,
                    label: {
                        show: false,
                        position: 'absolute'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: true
                    },
                    data: [
                        { value: 1128, name: 'Total' },
                        { value: 10, name: 'Baru' },
                        { value: 7, name: 'Keluar' },
                    ]
                }
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);
    }

    function get_pinjaman() {
        var chartPinjaman = document.getElementById('echart-pinjaman');
        var myChart = echarts.init(chartPinjaman);
        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                formatter: (params) => {
                    return formatter.format(params[0].value)
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Sep', 'Des'],
                show: true
            },
            yAxis: {
                type: 'value',
                show: true
            },
            series: [
                {
                    data: [1856671586, 3565490586, 6338221792, 10354512695, 11404934511],
                    type: 'line',
                    areaStyle: {
                        opacity: '0.4'
                    },
                    smooth: true,
                }
            ],
        };

        option && myChart.setOption(option);
    }

    function get_pendapatan() {
        var chartPendapata = document.getElementById('echart-pendapatan');
        var myChart = echarts.init(chartPendapata);
        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                formatter: (params) => {
                    return formatter.format(params[0].value)
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Sep', 'Des'],
                show: true
            },
            yAxis: {
                type: 'value',
                show: true
            },
            series: [
                {
                    data: [504775704, 1015862123, 1572771381, 2135580024, 2629056427],
                    type: 'line',
                    areaStyle: {
                        opacity: '0.4'
                    },
                    smooth: true,
                }
            ],
        };

        option && myChart.setOption(option);
    }

    function get_biaya() {
        var chartPendapata = document.getElementById('echart-biaya');
        var myChart = echarts.init(chartPendapata);
        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                formatter: (params) => {
                    return formatter.format(params[0].value)
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Sep', 'Des'],
                show: true
            },
            yAxis: {
                type: 'value',
                show: true
            },
            series: [
                {
                    data: [191600110, 373601568, 599837706, 801342713, 957444130],
                    type: 'line',
                    areaStyle: {
                        opacity: '0.4'
                    },
                    smooth: true,
                }
            ],
        };

        option && myChart.setOption(option);
    }

    function get_target_realisasi() {
        var target = document.getElementById('echart-target-realisasi');
        var myChart = echarts.init(target, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var app = {};

        var option;

        const posList = [
            'left',
            'right',
            'top',
            'bottom',
            'inside',
            'insideTop',
            'insideLeft',
            'insideRight',
            'insideBottom',
            'insideTopLeft',
            'insideTopRight',
            'insideBottomLeft',
            'insideBottomRight'
        ];
        app.configParameters = {
            rotate: {
                min: -90,
                max: 90
            },
            align: {
                options: {
                    left: 'left',
                    center: 'center',
                    right: 'right'
                }
            },
            verticalAlign: {
                options: {
                    top: 'top',
                    middle: 'middle',
                    bottom: 'bottom'
                }
            },
            position: {
                options: posList.reduce(function (map, pos) {
                    map[pos] = pos;
                    return map;
                }, {})
            },
            distance: {
                min: 0,
                max: 100
            }
        };
        app.config = {
            rotate: 90,
            align: 'left',
            verticalAlign: 'middle',
            position: 'insideBottom',
            distance: 15,
            onChange: function () {
                const labelOption = {
                    rotate: app.config.rotate,
                    align: app.config.align,
                    verticalAlign: app.config.verticalAlign,
                    position: app.config.position,
                    distance: app.config.distance
                };
                myChart.setOption({
                    series: [
                        {
                            label: labelOption
                        },
                        {
                            label: labelOption
                        },
                        {
                            label: labelOption
                        },
                        {
                            label: labelOption
                        }
                    ]
                });
            }
        };
        const labelOption = {
            show: true,
            position: app.config.position,
            distance: app.config.distance,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            rotate: app.config.rotate,
            formatter: (params) => {
                return params.seriesName
                // return formatter.format(params.value)
            },
            fontSize: 14,
            rich: {
                name: {}
            },
            color: '#FFF'
        };
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: { show: false },
                    data: ['Pendapatan', 'Pinjaman', 'Biaya'],
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Target',
                    type: 'bar',
                    barGap: 0,
                    label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [6562505972, 25503448341, 2103840636]
                },
                {
                    name: 'Pencapaian',
                    type: 'bar',
                    label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [2629056427, 11404934511, 957444130]
        }
            ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}
})