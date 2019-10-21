<!-- <template>
  <basic-container>
    <div style="display:flex;">
      <el-button type="primary" @click="handleGet">下载模版</el-button>
      <div style="width:20px;"></div>
      <el-upload :show-file-list="false" action="action" :on-change="handleChange">
        <el-button type="primary">导入 excel</el-button>
      </el-upload>
    </div>
    <br />
    <avue-crud :option="option" :data="list"></avue-crud>
  </basic-container>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        option: {
          column: [{
            label: 'id',
            prop: 'id'
          }, {
            label: '姓名',
            prop: 'name'
          }, {
            label: '年龄',
            prop: 'sex'
          }]
        }
      }
    },
  // },
  methods: {
    handleGet(){
      window.open('/cdn/demo.xlsx')
    },
    handleChange(file, fileLis) {
      this.$export.xlsx(file.raw)
        .then(data => {
          this.list = data.results;
        })
    }
  }
    }
</script>

<style>
</style> -->
<template>
    <div class="sts">
      <div class="sts__left">
        <div class="sts__left-top">
          <div class="sts__left-top-accumulative">
            <div class="sts__top">今日累计客户</div>
            <div class="sts__left-content">
              <p class="sts__left-content-date">2019.08.06 - 2019.08.06</p>
              <p class="sts__left-content-sum">
                <span>10000</span>
                <span>人</span>
              </p>
              <p class="sts__left-content-proportion">
                <span>环比</span>
                <span>62.89%</span>
                <span>同比</span>
                <span>62.89%</span>
              </p>
            </div>
          </div>
          <div class="sts__left-top-accumulative">
            <div class="sts__top">今日累计签约客户</div>
            <div class="sts__left-content">
              <p class="sts__left-content-date">2019.08.06 - 2019.08.06</p>
              <p class="sts__left-content-sum">
                <span>10000</span>
                <span>人</span>
              </p>
              <p class="sts__left-content-proportion">
                <span>环比</span>
                <span>62.89%</span>
                <span>同比</span>
                <span>62.89%</span>
              </p>
            </div>
          </div>
        </div>
        <div class="sts__left-bottom">
          <div class="sts__top">今日客户</div>
          <div class="sts__left-bottom-tsum sts__left-bottom-ts">
            <p>今日累计客户：<span>100人</span></p>
            <p>日累计客户平均值：<span>87人</span></p>
          </div>
          <div class="sts__left-bottom-tsum">
            <p>今日累计签约客户：<span>100人</span></p>
            <p>日累计签约客户平均值：<span>87人</span></p>
          </div>
          <div class="sts__left-bottom-echarts">
            <div id="myChart" :style="{width: '505px', height: '346px'}"></div>
          </div>
        </div>
      </div>
      <div class="sts__left">
        <div class="sts__left-top">
          <div class="sts__left-top-accumulative">
            <div class="sts__top">本月累计客户</div>
            <div class="sts__left-content">
              <p class="sts__left-content-date">2019.08.06 - 2019.08.06</p>
              <p class="sts__left-content-sum">
                <span>10000</span>
                <span>人</span>
              </p>
              <p class="sts__left-content-proportion">
                <span>环比</span>
                <span>62.89%</span>
                <span>同比</span>
                <span>62.89%</span>
              </p>
            </div>
          </div>
          <div class="sts__left-top-accumulative">
            <div class="sts__top">本月累计放款</div>
            <div class="sts__left-content">
              <p class="sts__left-content-date">2019.08.06 - 2019.08.06</p>
              <p class="sts__left-content-sum">
                <span>10000</span>
                <span>人</span>
              </p>
              <p class="sts__left-content-proportion">
                <span>环比</span>
                <span>62.89%</span>
                <span>同比</span>
                <span>62.89%</span>
              </p>
            </div>
          </div>
        </div>
        <div class="sts__left-bottom">
          <div class="sts__top">本月客户</div>
          <div class="sts__left-bottom-tsum sts__left-bottom-ts">
            <p>本月累计客户：<span>100人</span></p>
            <p>月累计客户平均值：<span>87人</span></p>
          </div>
          <div class="sts__left-bottom-tsum">
            <p>本月累计签约客户：<span>100人</span></p>
            <p>月累计签约客户平均值：<span>87人</span></p>
          </div>
          <div class="sts__left-bottom-echarts">
            <div id="myChart2" :style="{width: '505px', height: '346px'}"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
  
        }
      },
      mounted() {
        this.drawLine();
        this.drawLine2()
      },
      methods: {
        drawLine() {
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
            }]
          });
        },
        drawLine2() {
          // 基于准备好的dom，初始化echarts实例
          let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
          // 绘制图表
          myChart2.setOption({
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
            }]
          });
        }
      }
    };
  </script>
  
  <style scoped="scoped" lang="scss">
    .sts {
      display: flex;
      justify-content: space-between;
      align-items: center;
  
      &__top {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #e8e8e8;
        line-height: 40px;
        box-sizing: border-box;
        padding-left: 19px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
  
      &__left {
        width:50%;
        min-width:585px;
        height: 814px;
  
        &-top {
          width: 100%;
          height: 219px;
          display: flex;
          justify-content: space-between;
          align-items: center;
  
          &-accumulative {
            width: 50%;
            min-width:287px;
            height: 219px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 7px 0px rgba(165, 192, 214, 0.5);
            border-radius: 5px;
            margin-left: 10px;
          }
        }
  
        &-content {
          width: 100%;
          height: 179px;
          box-sizing: border-box;
          padding: 0 20px;
  
          &-date {
            font-size: 12px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(136, 136, 136, 1);
          }
  
          &-sum {
            text-align: center;
            margin: 33px 0;
          }
  
          &-sum span:first-child {
            font-size: 46px;
            font-family: Helvetica;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
          }
  
          &-sum span:last-child {
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }
  
          &-proportion {
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(136, 136, 136, 1);
          }
  
          &-proportion span:nth-child(2) {
            color: rgba(0, 186, 130, 1);
            margin-left: 8px;
          }
  
          &-proportion span:nth-child(3) {
            margin-left: 20px;
          }
  
          &-proportion span:last-child {
            color: rgba(255, 113, 113, 1);
            margin-left: 8px;
          }
  
        }
  
        &-bottom {
          width: 99%;
          min-width:575px;
          height: 524px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0px 7px 0px rgba(165, 192, 214, 0.5);
          border-radius: 5px;
          margin-left: 10px;
          margin-top: 10px;
  
          &-tsum {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            box-sizing: border-box;
            padding: 0 30px;
  
          }
  
          &-ts {
            margin-top: 20px;
          }
  
          &-tsum p {
            width: 50%;
          }
  
          &-tsum p span {
            font-size: 18px;
          }
  
          &-echarts {
            width: 523px;
            height: 346px;
          }
  
  
        }
  
  
  
      }
  
    }
  </style>