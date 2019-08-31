<!--评论模块-->
<template>
  <div class="container">
    <div class="comment" v-for="item in comments">
      <div class="info">
        <img class="avatar" :src="item.fromAvatar" width="36" height="36"/>
        <div class="right">
          <div class="name">{{item.fromName}}</div>
          <div class="date">{{item.date}}</div>
        </div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="control">
        <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <i class="el-icon-s-opportunity"></i>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人亮' : '亮'}}</span>
        </span>
        <span class="comment-reply" @click="showCommentInput(item)">
          <i class="el-icon-chat-round"></i>
          <span>回复</span>
        </span>
      </div>
      <div class="reply">
        <div class="item" v-for="reply in item.reply">
          <div class="reply-content">
            <span class="from-name">{{reply.fromName}}</span><span>: </span>
            <span class="to-name">@{{reply.toName}}</span>
            <span>{{reply.content}}</span>
          </div>
          <div class="reply-bottom">
            <span>{{reply.date}}</span>
            <span class="reply-text" @click="showCommentInput(item, reply)">
              <i class="el-icon-chat-round"></i>
              <span>回复</span>
            </span>
          </div>
        </div>
        <div class="write-reply" v-if="item.reply.length > 0" @click="showCommentInput(item)">
          <i class="el-icon-edit"></i>
          <span class="add-comment">添加新评论</span>
        </div>
        <transition name="fade">
          <div class="input-wrapper" v-if="showItemId === item.id">
            <el-input class="comment-edit-follow"
                      v-model="inputComment"
                      type="textarea"
                      :rows="3"
                      autofocus
                      placeholder="写下你的评论">
            </el-input>
            <div class="btn-control">
              <span class="cancel" @click="cancel">取消</span>
              <el-button class="btn" type="primary" @click="commitComment">发表</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="comment-edit">
      <img class="avatar" style="margin: 10px" :src="comments.fromAvatar" width="36" height="36"/>
      <transition>
        <div class="input-wrapper">
          <el-input class="comment-edit-new"
                    v-model="inputNewComment"
                    type="textarea"
                    :rows="3"
                    autofocus
                    placeholder="写下你的评论">
          </el-input>
          <div class="btn-control">
            <el-button class="btn" type="primary" @click="commitNewComment">发表</el-button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  import mockdata from '../data/mockdata'

  export default {
    props: {
      comments: {
        type: Array,
        required: true
      }
    },
    components: {},
    data() {
      return {
        inputComment: '',
        inputNewComment: '',
        showItemId: ''
      }
    },
    computed: {},
    methods: {
      likeClick(item) {
        if (item.isLike === null) {
          Vue.$set(item, "isLike", true);
          item.likeNum++
        } else {
          if (item.isLike) {
            item.likeNum--
          } else {
            item.likeNum++
          }
          item.isLike = !item.isLike;
        }
      },

      cancel() {
        this.showItemId = ''
      },

      commitComment() {
        console.log(this.inputComment);
      },

      commitNewComment() {
        console.log(this.inputNewComment);
      },

      showCommentInput(item, reply) {
        if (reply) {
          this.inputComment = "@" + reply.fromName + " "
        } else {
          this.inputComment = ''
        }
        this.showItemId = item.id
      }
    },
    created() {
      console.log(this.comments)
    }
  }
</script>

<style scoped>
  .container {
    padding: 0 10px;
    box-sizing: border-box;
  }
  .comment {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #B0B0B0;
  }
  .info {
    display: flex;
    align-items: center;
  }
  .avatar {
    border-radius: 50%;
  }
  .right {
     display: flex;
     flex-direction: column;
     margin-left: 10px;
  }
  .name {
    font-size: 16px;
    color: black;
    margin-bottom: 5px;
    font-weight: 500;
  }
  .date {
    font-size: 12px;
    color: #808080;
  }
  .content {
     font-size: 16px;
     color: #010101;
     line-height: 20px;
     padding: 10px 0;
  }
  .control {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #808080;
  }
  .like {
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
  }
  .iconfont {
     font-size: 14px;
     margin-right: 5px;
   }
  .comment-reply {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .iconfont {
    font-size: 16px;
    margin-right: 5px;
  }
  .reply {
    margin: 10px 0;
    border-left: 2px solid #B0B0B0 ;
  }
  .item {
    margin: 0 10px;
    padding: 10px 0;
    border-bottom: 1px dashed;
  }
  .reply-content {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .from-name {
    color: dodgerblue;
  }
  .to-name {
    color: dodgerblue;
    margin-left: 5px;
    margin-right: 5px;
  }
  .reply-bottom {
    display: flex;
    align-items: center;
    margin-top: 6px;
    font-size: 12px;
    color: #808080;;
  }
  .reply-text {
    display: flex;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
  }
  .write-reply {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #808080;
    padding: 10px;
    cursor: pointer;
  }
  .el-icon-edit {
    margin-right: 5px;
  }
  .input-wrapper {
    padding: 10px;
  }
  .btn-control {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
  }
  .cancel {
    font-size: 16px;
    color: black;
    margin-right: 20px;
    cursor: pointer;
  }
  .confirm {
    font-size: 16px;
  }
  .comment-edit{
    margin-top: 30px;
    -webkit-box-orient: horizontal;
    display:-webkit-box;
  }
  .comment-edit-new{
    width: 544px;
  }

</style>
