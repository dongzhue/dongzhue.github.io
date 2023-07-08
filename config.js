var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的申依佳",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第三个生日！",
        "这两年多来，我见过你",
        "奇怪的样子",
        "可爱的样子",
        "生气的样子",
        "都是我喜欢的样子",
        "今年你要考研",
        "要吃好好的",
        "喂饱饱的",
        "然后才有力气学习",
        "和想我！",
        "最后五个月，好好坚持一下",
        "考完就能吃喝玩乐啦",
        "生日快乐宝贝~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg",
        "心爱的申依佳": "./imgs/syj1.jpg",
        "今天是你的生日": "./imgs/shengri.jpg",
        "这是我们在一起的": "./imgs/zaiyiqi.jpg",
        "第三个生日！": "./imgs/shengrikuaile.jpg",
        "这两年多来，我见过你": "./imgs/jianguoni.jpg",
        "奇怪的样子": "./imgs/qiguai.jpg",
        "可爱的样子": "./imgs/keai.jpg",
        "生气的样子": "./imgs/shengqi.jpg",
        "都是我喜欢的样子": "./imgs/xihuan.jpg",
        "今年你要考研": "./imgs/chuo.gif",
        "要吃好好的": "./imgs/chihaodian.jpg",
        "喂饱饱的": "./imgs/weibao.jpg",
        "然后才有力气学习": "./imgs/xuexi.jpg",
        "和想我！": "./imgs/xiangni.jpg",
        "最后五个月，好好坚持一下": "./imgs/jianchi.jpg",
        "考完就能吃喝玩乐啦": "./imgs/chihewanle.jpg",
        "生日快乐宝贝~~": "./imgs/shengrimao.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "上音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '爱你的丁浩宇'
};
