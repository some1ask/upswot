<template>
  <div class="about">
   
      <div class="logo-background">
         <div class="wrapper">
        <img src="../assets/top-logo.svg" alt="" />
        <div class="main-content">
          <div class="main-content__message">
            Thank you {{ $route.params.username }} !
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
};
</script>
<style scoped>
.wrapper {
  max-width: 1920px;
  padding: 0 20%;
}
.about {
  min-height: 100vh;
  background: #e5e5e5;
  background-size: cover;
}
.main-content {
  max-width: 1191px;
  padding: 30px 0;
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
  padding-top: 65px;
  height: 720px;
  text-align: center;
  background: linear-gradient(180deg, #00a9e7, #005b9f);
}
.logo-background img {
  width: 186px;
  height: 119px;
  text-align: center;
}
</style>
