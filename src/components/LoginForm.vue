<template>
  <div class="login">
    <div class="login-form">
      <form @submit="validate">
        <div class="login-form-block">
          <span class="login-form__caption">Name</span>
          <input
            type="text"
            class="login-form__input"
            v-model="username"
            :class="{'error':this.errors.usernameError}"
          />
          <span class="login-form__error" v-if="errors.usernameError"
            >{{this.errors.usernameError}}</span
          >
        </div>
        <div class="login-form-block">
          <span class="login-form__caption">Password</span>
          <input
            type="password"
            class="login-form__input"
            v-model="password"
            :class="{'error':this.errors.usernameError}"
          />
          <span class="login-form__error" v-if="errors.passwordError"
            >{{this.errors.passwordError}}</span
          >
        </div>
        <div class="login-form-block">
          <input type="submit" class="login-form__button" value="LOGIN" />
          <a href="/" class="login-form__link">Forgot password</a>
        </div>
      </form>
    </div>
    <a class="register-link" href="/">Register Now</a>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: '',
      password: '',
      errors: {
        usernameError: null,
        passwordError: null,
      },
    };
  },
  methods: {
    validate(e) {
      e.preventDefault();
      if (this.username === '' && this.password === '') {
        this.errors.usernameError = "Empty Field";
        this.errors.passwordError = "Empty Field";
        return;
      }
      if (this.username !== "Admin" && this.password !== "12345") {
        this.errors.usernameError = "Wrong name";
        this.errors.passwordError = "Wrong password";
        return;
      }
      else{
          this.$router.push({
              name:'about',
              params:{
                  username:this.username
              }

          })
      }
    },
  },
};
</script>

<style scoped>
input {
  height: 53px;
  font-size: 18px;
  font-weight: 400;
  padding: 0 15px;
}
input:focus {
  outline: none;
}
.login-form__caption {
  font-size: 18px;
  font-weight: 300;
  color: #333333;
}
.login {
  width: 480px;
  background: #fff;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
}
.login-form {
  padding: 0 30px;
}
.login-form__error {
  display: inline-block;
  position: relative;
  font-size: 16px;
  color: #d60000;
  padding-left: 15px;
}
.login-form__error::before {
  content: "";
  background: url("../assets/error.png") no-repeat;
  background-size: cover;
  position: absolute;
  width: 9px;
  height: 9px;
  top: 5px;
  left: 0;
}

.login-form__button {
  cursor: pointer;
  background-color: #0076c0;
  outline: none;
  font-size: 25px;
  font-weight: 400;
  padding: 12px 0;
  border: 2px solid #0076c0;
  color: #fff;
}
.login-form__button:hover {
  background-color: #fff;
  color: #0076c0;
}
.login-form__link {
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  padding-top: 20px;
  color: #0076c0;
}
.login-form-block {
  display: flex;
  flex-direction: column;
  padding-top: 40px;
}
.register-link {
  display: inline-block;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #333333;
  text-align: center;
  margin-top: 23px;
  font-size: 25px;
  font-weight: 400;
  background-color: #f6f6f6;
  padding: 17px 0;
}
</style>