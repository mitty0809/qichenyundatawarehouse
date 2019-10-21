<template>
  <div>
    <div class="wel__header">
      <div class="wel__client">
        <div class="wel__top">客户类型333</div>
        <div class="wel__client-content">
          <div>
            <div class="wel__client-content-smiling"></div>
            <p class="wel__client-content-word">
              欢迎尊敬的
              <span>王晓雨</span>
              客户
            </p>

          </div>
          <div class="wel__client-content-user">
            <div class="wel__client-content-user-left"></div>
            <div class="wel__client-content-user-right">
              <p>用户类型：业务员</p>
              <p>所属组织：杭州创汇科技有限公司</p>
            </div>
          </div>
        </div>
      </div>
      <div class="wel__business">
        <div class="wel__top">业务榜</div>
        <div class="wel__business-content">
          <div class="wel__business-content-clientsum">
            <p>
              <span>10</span><br>
              <span>客户总数</span>
            </p>
          </div>
          <i></i>
          <div class="wel__business-content-clientsum">
            <p>
              <span>4</span><br>
              <span>贷款总额</span>
            </p>
          </div>
          <i></i>
          <div class="wel__business-content-clientsum">
            <p>
              <span>8</span><br>
              <span>已还总额</span>
            </p>
          </div>
        </div>

      </div>
      <div class="wel__announcement">
        <div class="wel__top">公告
          <i class="icon-changyongicon-"></i>
        </div>
        <ul class="wel__announcement-list">
          <li>
            <span>2019-02-01</span>
            <span class="wel__announcement-list-w">这里展示一条公告</span>
          </li>
          <li>
            <span>2019-02-01</span>
            <span class="wel__announcement-list-w">这里展示一条公告</span>
          </li>
          <li>
            <span>2019-02-01</span>
            <span class="wel__announcement-list-w">这里展示一条公告</span>
          </li>
          <li>
            <span>2019-02-01</span>
            <span class="wel__announcement-list-w">这里展示一条公告</span>
          </li>
        </ul>

      </div>
      <!-- <div class="wel__info">
        <img :src="userInfo.avatar"
             alt=""
             class="wel__info-img">
        <div class="wel__info-content">
          <div class="wel__info-title">
            {{$t('wel.info')}}
          </div>
          <div class="wel__info-subtitle">
            {{$t('wel.dept')}}
          </div>
        </div> 
      </div>-->

      <!--<div class="wel__extra">
        <div class="wel__extra-item">
          <p class="wel__extra-title">
            {{ $t('wel.count')}}
          </p>
          <p class="wel__extra-subtitle">
            56
          </p>
        </div>
        <div class="wel__extra-item">
          <p class="wel__extra-title">
            {{ $t('wel.team')}}
          </p>
          <p class="wel__extra-subtitle">
            8 <span>/ 24</span>
          </p>
        </div>
        <div class="wel__extra-item">
          <p class="wel__extra-title">

            {{ $t('wel.project')}}
          </p>
          <p class="wel__extra-subtitle">
            2,223
          </p>
        </div>
      </div>-->
    </div>
    <div class="wel__datachart">
      <div class="wel__top">数据图表</div>
      <div class="wel__datachart-content">
        <div id="myChart" class="mychart"></div>
        <div id="myChart2"></div>
        <div id="myChart3"></div>
      </div>

    </div>

  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "wel",
    data() {
      return {


      };
    },
    mounted() {
      this.drawLine();
      this.drawLine2();
      this.drawLine3()
    },
    methods: {
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            bottom:40,
            left: 140,
            data: ['1-7天     6000', '8-15天    5200', '16-30天   900', '30天以上34951']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                { value: 6000, name: '1-7天     6000' },
                { value: 5200, name: '8-15天    5200' },
                { value: 900, name: '16-30天   900' },
                { value: 34951, name: '30天以上34951' }
                
              ]
            }
          ]
        })
      },
       drawLine2() {
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        myChart2.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            bottom:40,
            left: 140,
            data: ['1-7天', '8-15天', '16-30天', '30天以上']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                { value: 6000, name: '1-7天' },
                { value: 5200, name: '8-15天' },
                { value: 234, name: '16-30天' },
                { value: 135, name: '30天以上' }
              ]
            }
          ]
        })
      },
      drawLine3() {
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        myChart3.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            bottom:40,
            left: 140,
            data: ['1-7天', '8-15天', '16-30天', '30天以上']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                { value: 335, name: '1-7天' },
                { value: 310, name: '8-15天' },
                { value: 234, name: '16-30天' },
                { value: 135, name: '30天以上' }
              ]
            }
          ]
        })
      }

    },
    
  };
</script>

<style scoped="scoped" lang="scss">
  @media screen and (max-width: 1601px) {
    .wel {
      &__client {
        transform: scale(1);
        width: 400px;
      }

      &__business {
        transform: scale(1)
      }
    }
  }
#myChart canvas{
  top:-77px !important;
}
  .wel {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__top {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #e8e8e8;
      line-height: 40px;
      box-sizing: border-box;
      padding-left: 19px;
      font-size: 14px;
      color: #333333;
    }

    &__client {
      width: 405px;
      height: 219px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 7px 0px rgba(165, 192, 214, 0.5);
      border-radius: 5px;
      margin-left: 10px;
      border-bottom: 1px solid #e8e8e8;

      &-content {
        width: 100%;
        height: 179px;

        &-smiling {
          width: 16px;
          height: 17px;
          background: red;
          display: inline-block;
          margin-left: 30px;
          margin-top: 32px;
        }

        &-word {
          display: inline-block;
          margin-left: 20px;
          font-size: 18px;
        }

        &-word span {
          font-weight: bold;
        }

        &-user {
          display: flex;

          &-left {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: #E8EBF7;
            margin-left: 30px;
          }

          &-right {
            margin-left: 20px;
          }

          &-right p {
            font-size: 14px;
          }

        }
      }
    }

    &__business {
      width: 530px;
      height: 219px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 7px 0px rgba(165, 192, 214, 0.5);
      border-radius: 5px;
      margin: 0 10px;
      box-sizing: border-box;

      &-content {
        width: 100%;
        height: 179px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-clientsum {
          font-size: 40px;
          width: 133px;
        }

        &-clientsum p {
          line-height: 29px;
          text-align: center;

        }

        &-clientsum p span:last-child {
          font-size: 10px;
        }
      }

      &-content i {
        display: block;
        width: 1px;
        height: 56px;
        background: rgba(233, 237, 242, 1);

      }
    }

    &__announcement {
      width: 268px;
      height: 219px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 7px 0px rgba(165, 192, 214, 0.5);
      border-radius: 5px;

      &-list {
        font-size: 12px;
        list-style: none;

        &-w {
          margin-left: 20px;
        }

      }

      &-list li {
        margin-top: 20px;
      }
    }

    &__announcement i {
      text-align: right;
      margin-left: 149px;
    }

    &__datachart {
      width: 1180px;
      height: 524px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 7px 0px rgba(165, 192, 214, 0.5);
      border-radius: 5px;
      margin-top: 10px;
      margin-left: 10px;
      background: #fff;

      &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-content div {
        width: 393px;
        height: 524px;
        margin-top:-77px;
      }
      
    }
  }
</style>