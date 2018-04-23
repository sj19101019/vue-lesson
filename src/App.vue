<template>
  <div>
    <div class="menu">
      <div class="btn">
        <router-link to="/">Home</router-link>
      </div>
      <div class="btn">
        <router-link to="/about">About</router-link>
      </div>
      <div class="btn">
        <router-link to="/products">Products</router-link>
      </div>
      <div class="btn">
        <router-link to="/pushMessage">PushMessage</router-link>
      </div>
    </div>
    <div>
      <button class="btn" @click="subscribe">訂閱</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import { askForNotificationPermission } from './serviceWorker'
  export default {
    methods: {
      subscribe() {
        askForNotificationPermission();
      },
    },
  }
</script>

<style>
  h1 {
    color: #369;
  }

  a {
    text-decoration: none;
    color: inherit;
    animation: inherit;
  }

  div:active {
    transform: inherit;
  }

  .btn {
    background-color: #3f3594;
    border: #573d9e;
    border-style: outset;
    padding: 2px 5px;
    margin: 1px;
    color: #70f5ff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: medium;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block; 
    box-shadow: 4px 4px rgba(20%,20%,40%,0.5);
  }

  button.btn {
    margin-top: 5px;
  }

  .btn:hover {
    -ms-transform: translate(2px, 2px); /* IE 9 */
    -webkit-transform: translate(2px, 2px); /* Safari */
    transform: translate(-2px, -2px);
    background-color: #70f5ff;
    color: #120064;
    border: #a1edfa;
    border-style: outset;
    -webkit-transition: background-color 0.3s linear, transform 0.3s, color 0.3s;
    -ms-transition: background-color 0.3s linear, transform 0.3s, color 0.3s;
    transition: background-color 0.3s linear, transform 0.3s, color 0.3s;
  }

  .btn:active {
    -ms-transform: translate(2px, 2px); /* IE 9 */
    -webkit-transform: translate(2px, 2px); /* Safari */
    transform: translate(2px, 2px);
    background-color: #006080;
  }
 
</style>
