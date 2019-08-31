<template>
  <div>
    <headTop></headTop>
    <div class="root">
      <div class="top">
        <div class="h">
          看历史
        </div>
        <div class="tips">
          名人名言
        </div>
      </div>
      <div class="infinite-list-wrapper" style="overflow:auto">
        <div
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled">
          <div v-for="item in ListData">
            <div class="Card">
              <div class="words">
                <div class="title">
                  {{item.textTittle}}
                </div>
                <div class="detail">
                  {{item.content}}
                </div>
              </div>
              <div class="img">
                <el-image
                  style="height: 200px; width: 260px"
                  :fit="fill"
                  :src="item.textImg">
                </el-image>
              </div>
            </div>
          </div>
        </div>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
      </div>

    </div>
  </div>
</template>

<script>
  import HeadTop from '../components/HeadTop'
  import * as ListData from '../data/mockdata'

  export default {
    props:{
      ListData: {
        type: Array,
        required: true,
      }
    },
    components:{
      'headTop': HeadTop
    },
    data () {
      return {
        count: 0,
        loading: false,
        ListData: [],
      }
    },
    created() {

      this.ListData = ListData.list.data;

    },
    computed: {
      noMore () {
        return this.ListData.index >= 50
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true;
        setTimeout(() => {
          this.count += 2;
          this.loading = false
        }, 2000)
      }
    }
  }
</script>

<style scoped>
  @import './css/usual.css';
  .root{
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    height: auto;
    display:-webkit-box;
    display:-ms-flexbox;
    align-items:center;
    border-radius:2px;
    box-sizing:border-box;
    min-height: calc(100vh - 40px);
    background-color: #E0E0E0;
  }
  .top{
    width: 680px;
    margin-top: 40px;
    margin-bottom: 30px;
    -webkit-box-orient: horizontal;
    display:-webkit-box;
  }
  .h{
    margin-left: 10px;
    margin-right: 120px;
    font-size: 38px;
    color: #F07864;
    margin-top: -5px;
  }
  .tips{
    font-size: 14px;
    color: #646464;
  }
  .Card{
    width: 640px;
    height: 200px;
    margin-bottom: 20px;
    padding: 10px 20px;
    -webkit-box-orient: horizontal;
    display:-webkit-box;
  }
  .words{
    width: 360px;
    margin-right: 20px;
  }
  .title{
    font-size: 17px;
    padding-bottom: 5px;
    font-weight: 600;
    border-bottom: 2px solid #929292;
  }
  .detail {
    margin-top: 5px;
    font-size: 14px;
    color: #646464;
  }
</style>
