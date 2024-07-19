<script setup lang="ts">
import TheForm from "./components/views/main/TheForm.vue";
import ContactsList from "./components/views/main/ContactsList.vue";
import { useContacts } from "./store/contacts.ts";
import { computed } from "vue";

const store = useContacts();

const isViewContactsList = computed(() => store.contacts.length > 0);
</script>

<template>
  <main class="main">
    <TheForm class="main__form" />
    <ContactsList v-if="isViewContactsList" />
  </main>
</template>

<style lang="scss" scoped>
.main {
  padding: 120px 140px;

  &__form {
    margin: 0 auto;
  }
}
</style>
