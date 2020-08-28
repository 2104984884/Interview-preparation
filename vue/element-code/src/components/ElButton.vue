<template>
  <button
  @click="handleCLick"
    class="el-button"
    :class="[
    type?'el-button--'+type:'',
    {
      'is-round':round,
      'is-circle':circle,
    }
   ]"
  >
    <div>
      <!-- {{type}} - {{tit}} -->
      <slot></slot>
    </div>
  </button>
</template>
<script>
// props 检查
export default {
  data() {
    return {
      tit: "hello",
    };
  },
  props: {
    type: {
      type: String,
      default: "default",
    },
    round: Boolean,
    circle:Boolean,
  },
  created() {
    console.log(this.type, this.tit);
  },
  methods:{
    handleCLick(e){
      console.log(e)
      this.$emit('click',e)
    }
  }
};
</script>
<style>
</style>