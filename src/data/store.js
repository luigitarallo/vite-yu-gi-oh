// Creo uno store dove immagazzinare i dati per renderli disponibili globalmente
import { reactive } from "vue";

export const store = reactive({
  cards: [],
  archetypes: [],
});
