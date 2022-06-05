<template>
  <header>
    <div class="top-header"></div>
    <div class="bottom-header">
      <div class="wrapper">
        <img src="../assets/top-logo.svg" alt="Top Logo" />
      </div>
    </div>
  </header>
  <main>
    <section id="business">
      <div class="wrapper">
      
          <div class="business-title">Welcome to <span>Business Analytics Online</span></div>
      </div>
    </section>
    <section id="business-information">
      <div class="wrapper">
        <div class="business-info-wrapper">
          <div class="business-info">
             <div class="business-paragraph">
            <p>
              <b>Business Analytics</b> — a new, convenient tool for managing
              and forecasting your business performance, which will help analyze
              your own finances and cash flows, visualize your reporting,
              business processes, KPI's
            </p>
          </div>
          <div class="business-posibilities">
            <div class="business-posibilities__block">
              <div class="business-posibilities__header">
                <p>Interactive Reporting</p>
              </div>
              <div class="business-posibilities__item">
                <p>
                  In just a few clicks, you can connect your data from 1C, CRM
                  (Bitrix24, AmoCRM, ZohoCRM),<br />E-commerce (PROM.UA,
                  Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and
                  many more systems that reflect different aspects of business
                  activities.
                </p>
              </div>
            </div>
            <div class="business-posibilities__block">
              <div class="business-posibilities__header">
                <p>Automated data updates</p>
              </div>
              <div class="business-posibilities__item">
                <p>
                  The application automatically updates and structures the data
                  in just 60 seconds, saving you time and money.
                </p>
              </div>
            </div>
            <div class="business-posibilities__block">
              <div class="business-posibilities__header">
                <p>Data Security</p>
              </div>
              <div class="business-posibilities__item">
                <p>
                  The Bank guarantees the safety of your personal data, ensuring
                  their integrity and confidentiality.
                </p>
              </div>
            </div>
          </div>
          </div>
          <div class="business-login-form">
          <LoginForm />
        </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="footer">
      <div class="wrapper">
        <div class="top-footer">
          <img src="../assets/bot-logo.svg" alt="Bottom Logo" />
          <nav>
            <ul class="bottom-nav">
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/notice">Notice at Collection</a></li>
              <li><a href="/privacy-hub">CA Privacy Hub</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
            </ul>
          </nav>
        </div>
        <div class="bottom-footer">
          <p class="copyright">
            Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
            Opportunity Lender.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>
<style scoped>
header,
main,
footer {
}

.wrapper {
  max-width: 1920px;
  padding: 0 20%;
  /* display: flex; */
  /* flex-wrap: wrap; */
}
.top-header {
  background-color: #333333;
  height: 53px;
}
.footer {
  background-color: #333333;
}
.bottom-header {
  padding: 15px 0;
  background: linear-gradient(180deg, #00a9e7, #005b9f);
}

#business {
  position: relative;
  min-height: 457px;
  background: url("../assets/business.png") no-repeat;
  background-size: cover;
  /* background-position: center; */
}
.business-info-wrapper {
  display: flex;
  margin-top: 40px;
}
.business-login-form {
margin-top:-217px;

z-index: 1;
}
.business-title {
  color: #fff;
  /* font-size: calc( (100vw - 480px)/(1920 - 480) * (55 - 16) + 16px); */
  font-weight: 400;
  line-height: 86px;
  padding-top: 217px;
  font-size: 55px;
  max-width: 630px;
  word-wrap: break-word; 
}

@media (max-width:1669px) {
.business-title{
  font-size: 45px;
  max-width: 510px;
}
}
@media (max-width:1440px) {
.business-title{
  font-size: 40px;
  max-width: 450px;
}
}
.business-title span{
  display: inline-block; 

}
.business-paragraph {
  /* padding-top: 110px; */
  line-height: 25px;
}
.business-posibilities {
  margin-bottom: 40px;
}
.business-posibilities__block {
  position: relative;
  padding-left: 35px;
  margin-top: 15px;
}
.business-posibilities__block::before {
  content: "";
  background-image: url("../assets/check-mark.png");
  width: 23px;
  height: 17px;
  position: absolute;
  top: 0;
  left: 0;
}
.business-posibilities__header {
  margin-top: 15px;
  font-weight: 500;
  font-size: 16px;
}
.business-posibilities__item {
  margin-top: 15px;
  font-size: 14px;
  line-height: 21px;
}

.top-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid #fff;
}
.bottom-footer {
  padding: 30px 0;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
}
.bottom-nav li {
  display: inline-block;
  margin: 0 20px;
}
.bottom-nav li:last-child {
  margin-right: 0;
}
.bottom-nav li:first-child {
  margin-left: 0;
}
.bottom-nav a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
}
</style>
