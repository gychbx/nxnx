<template>
  <div class="container">
      <div class='loginandreg'>
          <div>
              <div class='right'>
                  <div>
                      <span>登录</span>
                      <span>/</span>
                      <span>注册</span>
                  </div>
                  <div>微信公众号
                    <img src="../../static/wxpop.png">
                  </div>
              </div>
          </div>
      </div>
      <div class='nav'>
        <div class='lineone'>
            <div>
                <img width="20" src="../../static/location.png">
                <span style='font-size:12px'>上海</span>
                <span style='padding-left:5px;font-size:12px;color:#888'>查询地址是否可配送</span>
            </div>
            <img src="../../static/logo.png">
            <div>
                  <input type="text" size=25 placeholder="雪域牛乳芝士">
                  <img width="20" src="../../static/search.png">
                  <img style='padding-left:20px' width="20" src="../../static/shopping.png" >
            </div>
        </div>
        <div class='linetwo'>
            <ul>
                <li v-for='(item,index) in arr' :key='(item,index)' :style='active===index?mystyle1:""'><router-link @click.native='change(index)' :style='active===index?mystyle2:""' class='link' :to='item.two'>{{item.one}}</router-link></li>
            </ul>
        </div>
      </div>
  </div>
</template>
<script>
export default {
    name:'MyHeader',
  data(){
    return {
      active:0,
      arr:[{one:"首页",two:'/home'},{one:"蛋糕",two:'/cake'},{one:"土司",two:'/bread'},{one:"礼品",two:'/gift'},{one:"企业专区",two:'/company'},{one:"我的诺心",two:'/mynx'}],
      mystyle1:{
        borderBottom:'2px solid orange'
      },
      mystyle2:{
       color:"red"
      }
    }
  },
  methods:{
    change:function(index){
       this.active=index;
    }
  }
}
</script>
<style  scoped>
.link {
  color:#333;
  text-decoration: none;
}
.link:hover {
  color:orange;
}
.nav input {
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 12px;
  padding: 2px 4px;
}
.lineone {
  height:54px;
  width:80%;
  margin:0 auto;
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.lineone>div:first-child{
  height:24px;
  display: flex;
  align-items: center;
}
.lineone span:nth-child(2) {
  cursor: pointer;
}
.lineone span:nth-child(2):hover{
  color:orange;
}
.lineone>div:last-child{
  height:24px;
  display: flex;
  align-items: center;
}
.linetwo {
  height:70px;
}
.linetwo>ul {
  display: flex;
  justify-content: center;
  list-style: none;
}
.linetwo li{
  width:112px;
  height:20px;
  padding:24px 0px;
  text-align: center;
}
.container{
    width:100%;
    height:155px;
}
.loginandreg {
    width:100%;
    height:30px;
    background-color: #eee;
}
.loginandreg>div{
  width:80%;
  height:100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end
}
.nav {
    width:100%;
    height:124px;
}
.loginandreg .right{
  width:180px;
  height:100%;
}
.right {
  display: flex;
  justify-content: space-between;
}
.right span:first-child:hover{
  color:orange
}
.right span:first-child {
  cursor: pointer;
}
.right span:last-child {
  cursor: pointer;
}
.right span:last-child:hover{
  color:orange
}
.right>div:first-child {
  line-height: 30px;
  font-size: 12px;
}
.right>div:last-child{
  width:60px;
  padding-left: 36px;
  font-size:12px;
  line-height: 30px;
  background: url('../../static/wx.png') no-repeat 8px 50%;
  background-size:20px 20px;
  cursor: pointer;
  position: relative
}
.right img {
  position:absolute;
  left:-66px;
  top:20px;
  z-index: 3;
  display: none;
}
.right>div:last-child:hover {
  color:orange;
}
.right>div:last-child:hover img {
  display: block;
}
</style>