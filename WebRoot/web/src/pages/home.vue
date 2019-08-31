<template>
  <div>
    <headTop></headTop>
    <div class="root">
      <div class="main">
        <div class="context">
          <div class="text">
            efefafefweffff
          </div>
        </div>

        <div class="Card">
          <div class="title">
            <div class="date">
              {{date}}
            </div>
            <div class="block">
              <el-date-picker
                @blur="dateChoice"
                v-model="value"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </div>

          <div class="history">
            <todayHistory :month="trueMonth" :date="trueDate"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeadTop from '../components/HeadTop'
  import TodayHistory from '../components/TodayHistory'

  export default {
    components: {
      'headTop': HeadTop,
      'todayHistory': TodayHistory,
    },
    data() {
      return {
        trueMonth: [],
        trueDate: [],
        date: [],
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        value: '',
      }
    },
    mounted() {
      let date = new Date();
      let nowDate = {
        month: date.getMonth() + 1,
        date: date.getDate(),
      }
      console.log(nowDate);
      this.trueMonth = nowDate.month;
      this.trueDate = nowDate.date;
      let systemDate = nowDate.month + '月' + nowDate.date + '日';
      this.date = systemDate;
    },
    methods: {
      dateChoice: function (){
        let nowDate;
        let dat = this.value;
        if (Object.prototype.toString.call(dat) === '[object Date]') {
          nowDate = {
            month: dat.getMonth() + 1,
            date: dat.getDate(),
          }
        }
        this.trueMonth = nowDate.month;
        this.trueDate = nowDate.date;
        console.log(nowDate);
        console.log('改变日期成功');
        let systemDate = nowDate.month + '月' + nowDate.date + '日';
        this.date = systemDate;
      }
    }
  }
</script>


<style scoped>
  @import './css/usual.css';

  .root {
    -webkit-box-align: center;
    -webkit-box-orient: horizontal;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    align-items: center;
    border-radius: 2px;
    box-sizing: border-box;
    min-height: calc(100vh - 40px);
    background-color: #E0E0E0;
  }
  .main {
    width: 1024px;
    margin: 0 auto;
    -webkit-box-align: center;
    height: auto;
    display: -webkit-box;
    margin-top: -20px !important;
  }
  .Card {
    width: 420px;
    height: 520px;
  }
  .context {
    width: 420px;
    margin-right: 142px;

  }
  .text {
    color: #484848;
  }
  .title{
    width: 440px;
    margin-top: 20px;
    margin-bottom: 10px;
    -webkit-box-orient: horizontal;
    display:-webkit-box;
  }
  .date{
    margin-left: 25px;
    margin-right: 120px;
    font-size: 24px;
    color: #F07864;
    margin-top: -4px;
  }
  .block >>> .el-date-editor{
    width: 160px;
    margin-top: -5px;
  }
  .history{
    height: 450px;
    border: 1px solid #cccccc;
    margin: 2px;
  }

</style>
