// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化功能
    initNavigation();
    initCharts();
    initTargetMap();
    updateCurrentDate();
    
    // 每30秒更新一次数据
    setInterval(updateMetrics, 30000);
});

// 导航功能
function initNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-menu a');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            navLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // 添加活动状态
            this.classList.add('active');
            
            // 显示对应的内容区域
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // 如果是目标地图页面，重新初始化地图
                if (targetId === 'target-map') {
                    setTimeout(() => {
                        initTargetMap();
                    }, 100);
                }
            }
        });
    });
}

// 初始化图表
function initCharts() {
    // 收入趋势图
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                datasets: [{
                    label: '网红分销收入',
                    data: [580, 620, 690, 750, 820, 880, 920, 850, 780, 850, 920, 980],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: '自营销售收入',
                    data: [420, 480, 510, 590, 640, 680, 720, 760, 710, 750, 800, 850],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: false
                    },
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '¥' + value + '万';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // 成本分析图
    const costCtx = document.getElementById('costChart');
    if (costCtx) {
        new Chart(costCtx, {
            type: 'doughnut',
            data: {
                labels: ['营销成本', '运营成本', '商品成本'],
                datasets: [{
                    data: [280, 180, 340],
                    backgroundColor: ['#3498db', '#e74c3c', '#f39c12'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: false
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
}

// 初始化目标地图
function initTargetMap() {
    const mapElement = document.getElementById('targetMap');
    if (mapElement && typeof echarts !== 'undefined') {
        const chart = echarts.init(mapElement);
        
        // 模拟地图数据
        const geoData = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "华东区",
                        "value": 3200000,
                        "progress": 85
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [121.4737, 31.2304]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "华北区",
                        "value": 2800000,
                        "progress": 92
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [116.4074, 39.9042]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "华南区",
                        "value": 2650000,
                        "progress": 78
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [113.2644, 23.1291]
                    }
                }
            ]
        };
        
        const option = {
            title: {
                text: '全国业务分布',
                left: 'center',
                textStyle: {
                    color: '#2c3e50',
                    fontSize: 16,
                    fontWeight: 600
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (params.data) {
                        return `
                            <div style="padding: 10px;">
                                <strong>${params.data.name}</strong><br/>
                                收入: ¥${(params.data.value / 10000).toFixed(1)}万<br/>
                                完成度: ${params.data.progress}%
                            </div>
                        `;
                    }
                    return '';
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 100,
                inRange: {
                    color: ['#fedcdc', '#e74c3c']
                }
            },
            geo: {
                map: 'china',
                roam: true,
                zoom: 1.2,
                center: [104.0, 35.0],
                itemStyle: {
                    areaColor: '#f5f5f5',
                    borderColor: '#ddd'
                },
                emphasis: {
                    itemStyle: {
                        areaColor: '#e8f4f8'
                    }
                }
            },
            series: [
                {
                    name: '业务分布',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: geoData.features.map(feature => ({
                        name: feature.properties.name,
                        value: [
                            feature.geometry.coordinates[0],
                            feature.geometry.coordinates[1],
                            feature.properties.value
                        ],
                        progress: feature.properties.progress
                    })),
                    symbolSize: function(val) {
                        return Math.sqrt(val[2]) / 1000;
                    },
                    itemStyle: {
                        color: '#3498db'
                    },
                    emphasis: {
                        itemStyle: {
                            color: '#2980b9'
                        }
                    }
                }
            ]
        };
        
        // 加载中国地图
        fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
            .then(response => response.json())
            .then(chinaJson => {
                echarts.registerMap('china', chinaJson);
                chart.setOption(option);
            })
            .catch(error => {
                console.log('地图加载失败，使用备用方案');
                // 备用方案：显示散点图
                const backupOption = {
                    title: {
                        text: '全国业务分布',
                        left: 'center',
                        textStyle: {
                            color: '#2c3e50',
                            fontSize: 16,
                            fontWeight: 600
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params) {
                            return `
                                <div style="padding: 10px;">
                                    <strong>${params.data.name}</strong><br/>
                                    收入: ¥${(params.data.value / 10000).toFixed(1)}万<br/>
                                    完成度: ${params.data.progress}%
                                </div>
                            `;
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ['华东区', '华北区', '华南区']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: function(value) {
                                return '¥' + (value / 10000).toFixed(0) + '万';
                            }
                        }
                    },
                    series: [{
                        data: [
                            {name: '华东区', value: 3200000, progress: 85},
                            {name: '华北区', value: 2800000, progress: 92},
                            {name: '华南区', value: 2650000, progress: 78}
                        ],
                        type: 'bar',
                        itemStyle: {
                            color: '#3498db'
                        },
                        emphasis: {
                            itemStyle: {
                                color: '#2980b9'
                            }
                        }
                    }]
                };
                chart.setOption(backupOption);
            });
        
        // 响应式处理
        window.addEventListener('resize', function() {
            chart.resize();
        });
    }
}

// 更新当前日期
function updateCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        };
        dateElement.textContent = now.toLocaleDateString('zh-CN', options);
    }
}

// 更新指标数据（模拟实时更新）
function updateMetrics() {
    // 模拟数据变化
    const metrics = [
        { selector: '.dashboard-cards .card:nth-child(1) .metric-value', baseValue: 2580000, variance: 50000 },
        { selector: '.dashboard-cards .card:nth-child(2) .metric-value', baseValue: 8650000, variance: 100000 },
        { selector: '.dashboard-cards .card:nth-child(3) .metric-value', baseValue: 6070000, variance: 80000 },
        { selector: '.dashboard-cards .card:nth-child(4) .metric-value', baseValue: 29.8, variance: 1.5, isPercent: true }
    ];
    
    metrics.forEach(metric => {
        const element = document.querySelector(metric.selector);
        if (element) {
            const variation = (Math.random() - 0.5) * 2 * metric.variance;
            const newValue = metric.baseValue + variation;
            
            if (metric.isPercent) {
                element.textContent = newValue.toFixed(1) + '%';
            } else {
                element.textContent = '¥' + newValue.toLocaleString('zh-CN');
            }
        }
    });
    
    // 更新团队指标
    updateTeamMetrics();
}

// 更新团队指标
function updateTeamMetrics() {
    const teamMetrics = [
        { selector: '.member:nth-child(1) .metric-value', values: ['1,280', '12.8%'] },
        { selector: '.member:nth-child(2) .metric-value', values: ['88', '¥16,200'] }
    ];
    
    // 模拟少量数据变化
    teamMetrics.forEach(metric => {
        const elements = document.querySelectorAll(metric.selector);
        elements.forEach((element, index) => {
            if (metric.values[index] && Math.random() < 0.3) { // 30%概率更新
                const baseValue = metric.values[index];
                // 添加小幅变化
                element.textContent = baseValue;
            }
        });
    });
}

// 公式框交互效果
function initFormulaInteraction() {
    const formulaBoxes = document.querySelectorAll('.formula-box');
    
    formulaBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        });
    });
}

// 进度条动画
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// 初始化所有交互
function initAllInteractions() {
    initFormulaInteraction();
    animateProgressBars();
}

// 页面完全加载后初始化交互
window.addEventListener('load', function() {
    initAllInteractions();
});

// 主题切换功能（可选）
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}

// 导出数据功能
function exportData() {
    const data = {
        timestamp: new Date().toISOString(),
        metrics: {
            totalProfit: 2580000,
            totalRevenue: 8650000,
            totalCost: 6070000,
            profitMargin: 29.8
        },
        teams: {
            channel: {
                name: '渠道拓展组',
                members: [
                    { name: '张三', role: '小红书BD', metrics: { users: 1250, conversion: 12.5 } },
                    { name: '李四', role: '渠道运营', metrics: { influencers: 85, avgGMV: 15800 } }
                ]
            },
            operations: {
                name: '用户运营组',
                members: [
                    { name: '王五', role: '社群运营', metrics: { privateGMV: 180000, userLTV: 1250 } }
                ]
            }
        }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bi-dashboard-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 打印功能
function printDashboard() {
    window.print();
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case 'e':
                e.preventDefault();
                exportData();
                break;
            case 'p':
                e.preventDefault();
                printDashboard();
                break;
        }
    }
});

// 移动端适配
function initMobileSupport() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // 创建移动端菜单按钮
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    menuButton.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1001;
        background: #3498db;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: none;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(menuButton);
    
    // 检查屏幕尺寸
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
        } else {
            menuButton.style.display = 'none';
            sidebar.classList.remove('active');
        }
    }
    
    // 菜单按钮点击事件
    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // 点击主内容区域关闭菜单
    mainContent.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
    });
    
    // 监听屏幕尺寸变化
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// 初始化移动端支持
document.addEventListener('DOMContentLoaded', function() {
    initMobileSupport();
});

// 添加加载动画
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'loading-overlay';
    loader.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>正在加载数据...</p>
        </div>
    `;
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    
    const spinnerStyles = `
        <style>
            .loading-spinner {
                text-align: center;
                color: #2c3e50;
            }
            .spinner {
                width: 40px;
                height: 40px;
                border: 4px solid #e9ecef;
                border-top: 4px solid #3498db;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', spinnerStyles);
    document.body.appendChild(loader);
    
    // 2秒后移除加载动画
    setTimeout(() => {
        loader.remove();
    }, 2000);
}

// 页面加载时显示加载动画
window.addEventListener('load', function() {
    showLoadingAnimation();
}); 