<template>
<div>
  <nav>
  
  </nav>
  <LoginComponent v-if="!$cookies.get('userInfo')" />
</div>
</template>

<script>
import LoginComponent from './components/LoginComponent'

export default {
  name: 'App',
  components: {
    LoginComponent
  }
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

button {
  background-color: transparent;
  color: inherit;
  border-width: 0;
  padding: 0;
  cursor: pointer;
}

figure {
  margin: 0;
}

ul,
dd {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

p {
  margin: 0;
}

.errors {
  color: red;
}
</style>
