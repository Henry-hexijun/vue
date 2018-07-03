<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import {urlParse} from "./common/js/util";
import header from './components/header/header';

const ERR_OK = 0;

export default {
  data() {
    return {
      seller: {
        id:(() => {
          let queryParam = urlParse();
          return queryParam.id;
        })()
      }
    };
  },
  created() {
    this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
      response = response.body;
      //console.log(response);
      if(response.errno === ERR_OK){
        this.seller = response.data;
        //console.log(this.seller);
        this.seller = Object.assign({},this.seller,response.data);
      }
    });
  },
  components:{
    'v-header':header
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
      .router-link-exact-active
        color:#ff0000
</style>
