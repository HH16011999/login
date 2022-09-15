<template>
<div class="login-form">
  <div class="lock-icon">
    <font-awesome-icon :icon="['fas', 'lock']" class="icon alt" />
  </div>
  <h1>Sign in</h1>
  <div class="form">
    <input type="email" v-model="email" placeholder="Email Address *">
    <input type="password" v-model="password" placeholder="Password *">
    <ul class="errors" v-if="errors">
      <li v-for="(error, index) in errors" :key="index">{{error}}</li>
    </ul>
    <div @click="userlogin" class="sign-in">Sign in</div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import validateEmail from '@/mixins/validateEmail'
export default {
  name: 'LoginComponent',
  data() {
    return {
      email: '',
      password: '',
      errors: [],
    }
  },
  methods: {
    validateEmail,
    reset() {
      this.email = '';
      this.password = '';
      this.errors = [];
    },
    async userlogin() {
      try {
        this.errors = [];
        if (!this.email) {
          this.errors.push('Enter Email address.')
        }
        if (this.email && !this.validateEmail(this.email)) {
          this.errors.push('Enter correct Email address.')
        }
        if (!this.password) {
          this.errors.push('Enter password.')
        }
        if (this.errors.length > 0) return;
        const response = await axios.post(`http://${window.location.hostname}:5000/login`, {
          email: this.email,
          password: this.password,
        });
        if (!response.data.hasUser) {
          this.errors.push('User does not found.')
          return;
        }
        if (response.data.hasUser && !response.data.rPass) {
          this.errors.push('Wrong password.')
          return;
        }
        var udata = response.data.user;
        udata.password = ''
        this.$cookies.set("userInfo", udata);
        this.reset();
        this.$router.go();
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .5em;
}

.login-form h1 {
  font-size: 1.5em;
}

.lock-icon {
  background: #9D27B0;
  color: #eee;
  border-radius: 50%;
  padding: .7em;
  font-size: 1em;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;
  width: 20em;
}

.form>* {
  flex: 1;
  width: 100%;
}

.form input,
.form .sign-in {
  font-size: .8em;
  padding: 1em;
  border-radius: 3px;
}

.form input {
  border: 1px solid #999;

}

.form .sign-in {
  background: #1776D2;
  text-transform: uppercase;
  text-align: center;
  color: #eee;
  padding-block: .7em;
  cursor: pointer;
}
</style>
