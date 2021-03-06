//模拟评论数据
const comment = {
  status: "成功",
  code: 200,
  data: [
    {
      id: 'comment0001', //主键id
      date: '2018-07-05 08:30',  //评论时间
      ownerId: 'talents100020', //文章的id
      fromId: 'errhefe232213',  //评论者id
      fromName: '犀利的评论家',   //评论者昵称
      fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //评论者头像
      likeNum: 3, //点赞人数
      content: '非常靠谱的程序员',  //评论内容
      reply: [  //回复，或子评论
        {
          id: '34523244545',  //主键id
          commentId: 'comment0001',  //父评论id，即父亲的id
          fromId: 'observer223432',  //评论者id
          fromName: '夕阳红',  //评论者昵称
          fromAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg', //评论者头像
          toId: 'errhefe232213',  //被评论者id
          toName: '犀利的评论家',  //被评论者昵称
          toAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',  //被评论者头像
          content: '赞同，很靠谱，水平很高',  //评论内容
          date: '2018-07-05 08:35'   //评论时间
        },
        {
          id: '34523244545',
          commentId: 'comment0001',
          fromId: 'observer567422',
          fromName: '清晨一缕阳光',
          fromAvatar: 'http://imgsrc.baidu.com/imgad/pic/item/c2fdfc039245d688fcba1b80aec27d1ed21b245d.jpg',
          toId: 'observer223432',
          toName: '夕阳红',
          toAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg',
          content: '大神一个！',
          date: '2018-07-05 08:50'
        }
      ]
    },
    {
      id: 'comment0002',
      date: '2018-07-05 08:30',
      ownerId: 'talents100020',
      fromId: 'errhefe232213',
      fromName: '毒蛇郭德纲',
      fromAvatar: 'http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg',
      likeNum: 0,
      content: '从没见过这么优秀的人',
      reply: []
    }
  ]
};

export {comment}

const list = {
  status: "成功",
  code: 200,
  data: [
    {
      index: 1,
      id: 'A0001', //文章编号
      textTittle: '早' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '三味书屋是三间的小花厅。还没进门，迎面先扑来一阵清香。' +
        '那清香纯净疏淡，像是桂花香，又像是兰花香。' +
        '细想又都不像，因为小寒前后，桂花早已开过，' +
        '兰花却还要迟些日子才开。是什么香呢？' +
        '据说“三味”是把书比作五谷、蔬菜、点心的，' +
        '也许这就是书香？三味书屋是几十年前的书塾，' +
        '当年“子曰”“诗云”，咿咿呀呀的读书声，街上都能听得到。',  //文章简述
    },
    {
      index: 2,
      id: 'A0002', //文章编号
      textTittle: '白杨礼赞' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '那是力争上游的一种树，笔直的干，笔直的枝。' +
        '它的干呢，通常是丈把高，像是加以人工似的，一丈以内绝无旁枝。' +
        '它所有的丫枝呢，一律向上，而且紧紧靠拢，也像是加以人工似的，成为一束，绝无横斜逸出。' +
        '它的宽大的叶子也是片片向上，几乎没有斜生的，更不用说倒垂了；' +
        '它的皮，光滑而有银色的晕圈，微微泛出淡青色。' +
        '这是虽在北方的风雪的压迫下却保持着倔强挺立的一种树。' +
        '哪怕只有碗来粗细罢，它却努力向上发展，高到丈许，二丈，参天耸立，不折不挠，对抗着西北风。',
    },
    {
      index: 3,
      id: 'A0003', //文章编号
      textTittle: '早2' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '三味书屋是三间的小花厅。还没进门，迎面先扑来一阵清香。' +
        '那清香纯净疏淡，像是桂花香，又像是兰花香。' +
        '细想又都不像，因为小寒前后，桂花早已开过，' +
        '兰花却还要迟些日子才开。是什么香呢？' +
        '据说“三味”是把书比作五谷、蔬菜、点心的，' +
        '也许这就是书香？三味书屋是几十年前的书塾，' +
        '当年“子曰”“诗云”，咿咿呀呀的读书声，街上都能听得到。',  //文章简述
    },
    {
      index: 4,
      id: 'A0004', //文章编号
      textTittle: '白杨礼赞2' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '那是力争上游的一种树，笔直的干，笔直的枝。' +
        '它的干呢，通常是丈把高，像是加以人工似的，一丈以内绝无旁枝。' +
        '它所有的丫枝呢，一律向上，而且紧紧靠拢，也像是加以人工似的，成为一束，绝无横斜逸出。' +
        '它的宽大的叶子也是片片向上，几乎没有斜生的，更不用说倒垂了；' +
        '它的皮，光滑而有银色的晕圈，微微泛出淡青色。' +
        '这是虽在北方的风雪的压迫下却保持着倔强挺立的一种树。' +
        '哪怕只有碗来粗细罢，它却努力向上发展，高到丈许，二丈，参天耸立，不折不挠，对抗着西北风。',
    },
    {
      index: 5,
      id: 'A0005', //文章编号
      textTittle: '早3' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '三味书屋是三间的小花厅。还没进门，迎面先扑来一阵清香。' +
        '那清香纯净疏淡，像是桂花香，又像是兰花香。' +
        '细想又都不像，因为小寒前后，桂花早已开过，' +
        '兰花却还要迟些日子才开。是什么香呢？' +
        '据说“三味”是把书比作五谷、蔬菜、点心的，' +
        '也许这就是书香？三味书屋是几十年前的书塾，' +
        '当年“子曰”“诗云”，咿咿呀呀的读书声，街上都能听得到。',  //文章简述
    },
    {
      index: 6,
      id: 'A0006', //文章编号
      textTittle: '白杨礼赞3' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '那是力争上游的一种树，笔直的干，笔直的枝。' +
        '它的干呢，通常是丈把高，像是加以人工似的，一丈以内绝无旁枝。' +
        '它所有的丫枝呢，一律向上，而且紧紧靠拢，也像是加以人工似的，成为一束，绝无横斜逸出。' +
        '它的宽大的叶子也是片片向上，几乎没有斜生的，更不用说倒垂了；' +
        '它的皮，光滑而有银色的晕圈，微微泛出淡青色。' +
        '这是虽在北方的风雪的压迫下却保持着倔强挺立的一种树。' +
        '哪怕只有碗来粗细罢，它却努力向上发展，高到丈许，二丈，参天耸立，不折不挠，对抗着西北风。',
    },
    {
      index: 7,
      id: 'A0007', //文章编号
      textTittle: '早4' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '三味书屋是三间的小花厅。还没进门，迎面先扑来一阵清香。' +
        '那清香纯净疏淡，像是桂花香，又像是兰花香。' +
        '细想又都不像，因为小寒前后，桂花早已开过，' +
        '兰花却还要迟些日子才开。是什么香呢？' +
        '据说“三味”是把书比作五谷、蔬菜、点心的，' +
        '也许这就是书香？三味书屋是几十年前的书塾，' +
        '当年“子曰”“诗云”，咿咿呀呀的读书声，街上都能听得到。',  //文章简述
    },
    {
      index: 8,
      id: 'A0008', //文章编号
      textTittle: '白杨礼赞4' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '那是力争上游的一种树，笔直的干，笔直的枝。' +
        '它的干呢，通常是丈把高，像是加以人工似的，一丈以内绝无旁枝。' +
        '它所有的丫枝呢，一律向上，而且紧紧靠拢，也像是加以人工似的，成为一束，绝无横斜逸出。' +
        '它的宽大的叶子也是片片向上，几乎没有斜生的，更不用说倒垂了；' +
        '它的皮，光滑而有银色的晕圈，微微泛出淡青色。' +
        '这是虽在北方的风雪的压迫下却保持着倔强挺立的一种树。' +
        '哪怕只有碗来粗细罢，它却努力向上发展，高到丈许，二丈，参天耸立，不折不挠，对抗着西北风。',
    },
    {
      index: 9,
      id: 'A0001', //文章编号
      textTittle: '早' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '三味书屋是三间的小花厅。还没进门，迎面先扑来一阵清香。' +
        '那清香纯净疏淡，像是桂花香，又像是兰花香。' +
        '细想又都不像，因为小寒前后，桂花早已开过，' +
        '兰花却还要迟些日子才开。是什么香呢？' +
        '据说“三味”是把书比作五谷、蔬菜、点心的，' +
        '也许这就是书香？三味书屋是几十年前的书塾，' +
        '当年“子曰”“诗云”，咿咿呀呀的读书声，街上都能听得到。',  //文章简述
    },
    {
      index: 10,
      id: 'A0002', //文章编号
      textTittle: '白杨礼赞' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '那是力争上游的一种树，笔直的干，笔直的枝。' +
        '它的干呢，通常是丈把高，像是加以人工似的，一丈以内绝无旁枝。' +
        '它所有的丫枝呢，一律向上，而且紧紧靠拢，也像是加以人工似的，成为一束，绝无横斜逸出。' +
        '它的宽大的叶子也是片片向上，几乎没有斜生的，更不用说倒垂了；' +
        '它的皮，光滑而有银色的晕圈，微微泛出淡青色。' +
        '这是虽在北方的风雪的压迫下却保持着倔强挺立的一种树。' +
        '哪怕只有碗来粗细罢，它却努力向上发展，高到丈许，二丈，参天耸立，不折不挠，对抗着西北风。',
    },
    {
      index: 11,
      id: 'A0003', //文章编号
      textTittle: '早2' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '三味书屋是三间的小花厅。还没进门，迎面先扑来一阵清香。' +
        '那清香纯净疏淡，像是桂花香，又像是兰花香。' +
        '细想又都不像，因为小寒前后，桂花早已开过，' +
        '兰花却还要迟些日子才开。是什么香呢？' +
        '据说“三味”是把书比作五谷、蔬菜、点心的，' +
        '也许这就是书香？三味书屋是几十年前的书塾，' +
        '当年“子曰”“诗云”，咿咿呀呀的读书声，街上都能听得到。',  //文章简述
    },
    {
      index: 12,
      id: 'A0004', //文章编号
      textTittle: '白杨礼赞2' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '那是力争上游的一种树，笔直的干，笔直的枝。' +
        '它的干呢，通常是丈把高，像是加以人工似的，一丈以内绝无旁枝。' +
        '它所有的丫枝呢，一律向上，而且紧紧靠拢，也像是加以人工似的，成为一束，绝无横斜逸出。' +
        '它的宽大的叶子也是片片向上，几乎没有斜生的，更不用说倒垂了；' +
        '它的皮，光滑而有银色的晕圈，微微泛出淡青色。' +
        '这是虽在北方的风雪的压迫下却保持着倔强挺立的一种树。' +
        '哪怕只有碗来粗细罢，它却努力向上发展，高到丈许，二丈，参天耸立，不折不挠，对抗着西北风。',
    },
    {
      index: 13,
      id: 'A0005', //文章编号
      textTittle: '早3' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '三味书屋是三间的小花厅。还没进门，迎面先扑来一阵清香。' +
        '那清香纯净疏淡，像是桂花香，又像是兰花香。' +
        '细想又都不像，因为小寒前后，桂花早已开过，' +
        '兰花却还要迟些日子才开。是什么香呢？' +
        '据说“三味”是把书比作五谷、蔬菜、点心的，' +
        '也许这就是书香？三味书屋是几十年前的书塾，' +
        '当年“子曰”“诗云”，咿咿呀呀的读书声，街上都能听得到。',  //文章简述
    },
    {
      index: 14,
      id: 'A0006', //文章编号
      textTittle: '白杨礼赞3' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '那是力争上游的一种树，笔直的干，笔直的枝。' +
        '它的干呢，通常是丈把高，像是加以人工似的，一丈以内绝无旁枝。' +
        '它所有的丫枝呢，一律向上，而且紧紧靠拢，也像是加以人工似的，成为一束，绝无横斜逸出。' +
        '它的宽大的叶子也是片片向上，几乎没有斜生的，更不用说倒垂了；' +
        '它的皮，光滑而有银色的晕圈，微微泛出淡青色。' +
        '这是虽在北方的风雪的压迫下却保持着倔强挺立的一种树。' +
        '哪怕只有碗来粗细罢，它却努力向上发展，高到丈许，二丈，参天耸立，不折不挠，对抗着西北风。',
    },
    {
      index: 15,
      id: 'A0007', //文章编号
      textTittle: '早4' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '三味书屋是三间的小花厅。还没进门，迎面先扑来一阵清香。' +
        '那清香纯净疏淡，像是桂花香，又像是兰花香。' +
        '细想又都不像，因为小寒前后，桂花早已开过，' +
        '兰花却还要迟些日子才开。是什么香呢？' +
        '据说“三味”是把书比作五谷、蔬菜、点心的，' +
        '也许这就是书香？三味书屋是几十年前的书塾，' +
        '当年“子曰”“诗云”，咿咿呀呀的读书声，街上都能听得到。',  //文章简述
    },
    {
      index: 16,
      id: 'A0008', //文章编号
      textTittle: '白杨礼赞4' , //文章标题
      textImg: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //文章配图
      content: '那是力争上游的一种树，笔直的干，笔直的枝。' +
        '它的干呢，通常是丈把高，像是加以人工似的，一丈以内绝无旁枝。' +
        '它所有的丫枝呢，一律向上，而且紧紧靠拢，也像是加以人工似的，成为一束，绝无横斜逸出。' +
        '它的宽大的叶子也是片片向上，几乎没有斜生的，更不用说倒垂了；' +
        '它的皮，光滑而有银色的晕圈，微微泛出淡青色。' +
        '这是虽在北方的风雪的压迫下却保持着倔强挺立的一种树。' +
        '哪怕只有碗来粗细罢，它却努力向上发展，高到丈许，二丈，参天耸立，不折不挠，对抗着西北风。',
    }

  ]
};

export {list}

const users = {
  status: "成功",
  code: 200,
  data: [
    {
      name: 'Bob', //主键id
      password: '123456',  //评论时间
      fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //评论者头像
    },
    {
      name: 'Cat', //主键id
      password: '654321',  //评论时间
      fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //评论者头像
    }
  ]
};

export {users}

