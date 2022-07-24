import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = true;

import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

Vue.component("BaseCard", BaseCard);
Vue.component("BaseButton", BaseButton);
Vue.component("BaseDialog", BaseDialog);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
