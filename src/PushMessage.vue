<template>
  <div>
    <h2>廣播訊息</h2>
    <input type="text" v-model="message"/>
    <button class="btn" @click="pushMessage">推播</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: ""
    };
  },
  methods: {
    pushMessage() {
      this.message.trim() !== ""
        ? new Notification(this.message.trim(), options)
        : "";
      this.message = "";
    }
  }
};

const options = {
  body: "Vue app",
  icon: "/dist/logo.png",
  lang: "zh-Hant",
  vibrate: [100, 50, 200]
};
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  font-size: 1.5em;
  background: linear-gradient(21deg, #10abff, #1beabd);
  padding: 3px;
  display: inline-block;
  border-radius: 9999em;
  *:not(span) {
    position: relative;
    display: inherit;
    border-radius: inherit;
    margin: 0;
    border: none;
    outline: none;
    padding: 0 0.325em;
    z-index: 1;
    &:focus + span {
      opacity: 1;
      transform: scale(1);
    }
  }

  span {
    transform: scale(0.993, 0.94);
    transition: transform 0.5s, opacity 0.25s;
    opacity: 0;
    position: absolute;
    z-index: 0;
    margin: 4px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    pointer-events: none;
    box-shadow: inset 0 0 0 3px #fff, 0 0 0 4px #fff, 3px -3px 30px #1beabd,
      -3px 3px 30px #10abff;
  }
}

html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  line-height: 1.5;
  font-size: 1em;
}

body {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

html,
body {
  height: 100%;
}

input {
  font-family: inherit;
  line-height: inherit;
  color: #2e3750;
  min-width: 12em;
}

::placeholder {
  color: #cbd0d5;
}

html::after {
  content: "";
  background: linear-gradient(21deg, #10abff, #1beabd);
  height: 3px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
