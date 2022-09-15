<template>
<div class="login-form">
  <div class="lock-icon">
    <font-awesome-icon :icon="['fas', login?'lock':'plus']" class="icon alt" />
  </div>
  <h1>Sign {{login?'in':'up'}}</h1>
  <div class="form">
    <input type="email" v-model="email" placeholder="Email Address *">
    <input type="password" v-model="password" placeholder="Password *">
    <input v-if="!login" type="password" v-model="repassword" placeholder="RePassword *">
    <ul class="errors" v-if="errors">
      <li v-for="(error, index) in errors" :key="index">{{error}}</li>
    </ul>
    <div @click="submit" class="sign-in">Sign {{login?'in':'up'}}</div>
    <p class="signup" @click="() => {reset(); login = !login}">Sign {{!login?'in':'up'}}</p>
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
      repassword: '',
      errors: [],
      login: true
    }
  },
  methods: {
    validateEmail,
    reset() {
      this.email = '';
      this.password = '';
      this.repassword = '';
      this.errors = [];
    },
    submit() {
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
      if (!this.login && !this.repassword) {
        this.errors.push('Enter password again.')
      }
      if (!this.login && this.password != this.repassword) {
        this.errors.push('Passwords are different.')
      }
      if (this.errors.length > 0) return;

      if (this.login) this.userLogin()
      else this.userRegister()

    },
    async userLogin() {
      try {
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
    },
    async userRegister() {
      try {
        if (this.email) {
          const response = await axios.get(
            `http://${window.location.hostname}:5000/userbyemail`, {
              params: {
                email: this.email
              }
            }
          );
          if (Object.values(response.data)[0] == 1)
            this.errors.push('Email address used.')
        }
        if (this.errors.length > 0) return;
        await axios.post(`http://${window.location.hostname}:5000/user`, {
          email: this.email,
          password: this.password,
        });
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

.form p.signup {
  text-align: center;
  cursor: pointer;
}

.form p.signup:hover {
  text-decoration: underline;
}
</style>
