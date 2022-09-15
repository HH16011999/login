<template>
<nav>
    <div class="home"><a href="/">Home</a></div>
    <div v-if="$cookies.get('userInfo')" class="logout">
      <p>Logged in with {{$cookies.get('userInfo').email}}</p>
      <p @click="logout" class="logout">Log out</p>
    </div>
  </nav>
</template>
<script>
  export default {
  name: 'NavComponent',
  methods:{
    logout(){
      this.$cookies.remove('userInfo')
      this.$router.go()
    }
  }
  }
</script>
<style scoped>
  nav{
    width: 100%;
    height: 3em;
    background: #1776D2;
    color: #eee;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }
  .logout{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    gap: 1em;
  }
  nav a, .logout p.logout{
    color: yellow;
    cursor: pointer;
  }
</style>