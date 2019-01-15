<template>
  <div class="wrapper">
    <div class="stars">
      <div v-for='(star,index) in 5'>
        <span class="star-off star" :style="{background:'url(' + starOffImg + ')'}"></span>
        <span class="star-on star" :style='{width:(index < score ?"100":"0")+ "%",background:"url(" + starOnImg + ")"}' v-if='index < parseInt(score) '></span>
        <span class="star-on star" :style='{width:(index == Math.ceil(score) - 1 ?100*("0." + score.split(".")[1]):"0")+ "%",background:"url(" + starOnImg + ")"}' v-else></span>
      </div>
      <font v-if="ifShow">{{ score }}</font>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vueRateShow',
    props: {
      score:{
        type:String,
        default:'0'
      },
      ifShow:{
        type: Boolean,
        default: true
      },
      starOffImg:{
        type:String,
        default:require('./off.png')
      },
      starOnImg:{
        type:String,
        default:require('./on.png')
      }
    },
    methods:{
      numRanty(index){
        this.num = index + 1
      }
    }
  }
</script>

<style scoped>
  .wrapper .stars{
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  .wrapper .stars font{
    color:#7d7d7d;
    font-size: 30px;
    margin-left: 50px;
  }
  .wrapper .stars>div{
    position: relative;
    width: 55px;
    height: 54px;
    display: inline-block;
    margin-right: 8px;
  }
  .wrapper .star{
    position: absolute;
    width: 55px;
    height: 54px;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }
</style>
