<template>
  <div class="todayHistoryContainer">
    <happy-scroll class="block" hide-horizontal>
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card class="historyEvents">
            <div class="words">
              <div class="detail">
                三味书屋是三间的小花厅。
              </div>
            </div>
            <div class="img">
              <el-image
                style="height: 100px; width: 130px"
                :fit="fill"
                :src="url">

              </el-image>
            </div>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card class="historyEvents">
            {{month}}
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card class="historyEvents">
            {{date}}
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </happy-scroll>
  </div>
</template>

<script>

  export default {

    props:['month','date'],
  }
</script>

<style scoped>
  .todayHistoryContainer{
    padding: 5px;
    padding-top: 15px !important;
    height: 430px;
  }
  .block{
  }
  .block >>> .el-timeline{
    padding-left: 0;
  }
  .historyEvents{
    width: 360px;
    -webkit-box-orient: horizontal;
    display:-webkit-box;
  }
  .historyEvents >>> .el-card__body{
    -webkit-box-orient: horizontal;
    display:-webkit-box;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .words{
    width: 180px;
    margin-right: 20px;
  }
  .detail{
    margin-top: 5px;
    font-size: 14px;
    color: #646464;
  }

</style>

