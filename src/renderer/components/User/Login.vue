<template>
  <el-row type="flex" justify="center">
    <el-col :span="6">
      <el-form :label-position="labelPosition" :model="account">
        <el-form-item label="Name">
          <el-input v-model="account.username"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-input v-model="account.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="login"
            v-loading.fullscreen.lock="fullscreenLoading">
            Login
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        labelPosition: 'left',
        fullscreenLoading: false,
        account: {
          username: null,
          password: null
        }
      }
    },
    methods: {
      login () {
        console.log(this.account)
        this.fullscreenLoading = true
        setTimeout(() => {
          this.fullscreenLoading = false
          this.$router.push('/')
        }, 3000)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Space+Mono');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Space Mono', sans-serif; }
</style>
