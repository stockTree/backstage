import React, {Component} from 'react'
import PreTitle from '../../component/preTitle/preTitle.jsx'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import { Row, Col } from 'antd';

class DataManagement extends Component {
    constructor (props) {
        super(props)
    }
    state = {
        data: []
    }
    _chartUser = () => {
        let chartUser = echarts.init(document.getElementById('chartUser'));
        // 绘制图表
        chartUser.setOption({
            title: {
                text: '近七日新增用户',
                y: '3',
                top: '0%',
                left: '-0.5%',
                textStyle: {
                    fontSize: 22,
                    color: '#1B2431',
                    fontFamily: 'PingFangSC-Medium,PingFang SC'
                }
            },
            color: ['#2A6AFF'],
            xAxis: {
                boundaryGap: false,
                type: 'category',
                data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#E5E8F0'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#F3F5F7'],
                        fontSize: 12
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#97A1B2' // 文字颜色
                    }
                }
            },
            grid: {
                left: '32px',
                right: '30px',
                bottom: '19px'
            },
            legend: {
                top: '12%',
                left: '2%',
                itemHeight: 0,
                itemWidth: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#97A1B2',
                    fontFamily: 'PingFangSC-Regular,PingFang SC'
                },
                data: [{
                    name: '新增用户数'
                }]
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,42,140,0.8)'
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: ['#F3F5F7'], // 网格线
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#E5E8F0'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#97A1B2' // 文字颜色
                    }
                }
            },
            series: [{
                data: [5, 20, 36, 10, 10, 20, 55],
                type: 'line',
                smooth: true,
                name: '新增用户数',
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(3,122,255,0.3)' // 0% 处的颜色
                        }, {
                            offset: 0.5, color: 'rgba(3,122,255,0.1)' // 100% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(3,122,255,0)' // 100% 处的颜色
                        }]
                    }
                }
            }]
        });
    } 
    _chartManey = () => {
        let chartManey = echarts.init(document.getElementById('chartManey'));
        // 绘制图表
        chartManey.setOption({
            title: {
                text: '近七日流水',
                y: '3',
                top: '0%',
                left: '-0.5%',
                textStyle: {
                    fontSize: 22,
                    color: '#1B2431',
                    fontFamily: 'PingFangSC-Medium,PingFang SC'
                }
            },
            color: ['#7764CB'],
            xAxis: {
                boundaryGap: false,
                type: 'category',
                data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#E5E8F0'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#F3F5F7'],
                        fontSize: 12
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#97A1B2' // 文字颜色
                    }
                }
            },
            grid: {
                left: '32px',
                right: '30px',
                bottom: '19px'
            },
            legend: {
                top: '14%',
                left: '2%',
                itemHeight: 0,
                itemWidth: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#97A1B2',
                    fontFamily: 'PingFangSC-Regular,PingFang SC'
                },
                data: [{
                    name: '金额'
                }]
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,42,140,0.8)'
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: ['#F3F5F7'], // 网格线
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#E5E8F0'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#97A1B2' // 文字颜色
                    }
                }
            },
            series: [{
                name: '金额',
                data: [100,300,600,400,200,100,330],
                type: 'line',
                smooth: true,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(56, 0, 255,0.3)' // 0% 处的颜色
                        }, {
                            offset: 0.5, color: 'rgba(56, 0, 255,0.1)' // 100% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(56, 0, 255,0)' // 100% 处的颜色
                        }]
                    }
                }
            }]
        })
    }
    componentDidMount () {
        this._chartUser()
        this._chartManey()
    }
    render () {
        return (
            <div className="user">
                <PreTitle title="数据展示">
                <Row>
                    <Col span={12}>
                    <div id="chartUser" style={{ width: 500, height: 280 }}></div>

                    </Col>
                    <Col span={12}>
                    <div id="chartManey" style={{ width: 500, height: 280 }}></div>

                    </Col>
                </Row>
                </PreTitle>
                
            </div>
        )
    }
}
export default DataManagement