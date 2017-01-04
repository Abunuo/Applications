Page({
    data:{
        'inputInfo':'请反馈您的建议,以便让我们做得更好',
        'display':'none',
        'title':'意见反馈'
    },
    onReady:function(){
        var that = this;
        wx.setNavigationBarTitle({
          title: that.data.title
        })
    },
    clean:function(){
         this.setData({
             inputInfo:"",
             display:"block"
         })

    },
    add:function(){
         this.setData({
             inputInfo:"请反馈您的建议,以便让我们做得更好",
             display:"none"
         })
    }

})
