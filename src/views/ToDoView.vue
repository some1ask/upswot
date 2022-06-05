<template>
  <div class="about">
    <div class="logo-background">
      <div class="wrapper">
        <img src="../assets/top-logo.svg" alt="" />
        <div class="main-content">
          <div class="main-content__message">
            Thank you {{ this.$route.params.username }} !
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
export default {
  name: "AboutView",
  components: {
    TodoList,
  },
  mounted() {
    if (localStorage.getItem("isAuthorized")) {
      console.log("authorized");
    }
    if(Object.keys(this.$route.params).length == 0) {
      this.$router.replace({
        name: "login",
        path: "/login",
      });
    }
  },
};
</script>
<style scoped>
.wrapper {
  max-width: 1920px;
  padding: 0 20%;
}
@media screen and (max-width:768px) {
  .wrapper{
    padding: 0 10%;

  }
}
.about {
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(
    180deg,
    #00a9e7 0px,
    #005b9f 720px,
    #e5e5e5 720px,
    #e5e5e5 100%
  );
}

.main-content {
  max-width: 1191px;
  padding-top: 30px;
  min-height: 600px;
  margin-top: 60px;
  background-color: #fff;
}

.main-content__message {
  font-size: 60px;
  text-align: center;
  font-weight: 700;
}

.logo-background {
  position: relative;
  text-align: center;
}

.logo-background img {
  width: 186px;
  height: 119px;
  margin: 0 auto;
  margin-top: 65px;
}
</style>
