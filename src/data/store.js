import { reactive } from "vue";

export const store = reactive({
  apiUri: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  cards: [],
});
