<script setup lang="ts">
import { useContacts } from "../../../store/contacts.ts";
import { computed } from "vue";

const store = useContacts();

const contactsList = computed(() => store.contacts);

</script>

<template>
  <div class="contacts-list">
    <ul class="contacts-list__list">
      <li
        v-for="(contact, ind) in contactsList"
        :key="`${contact.email}-${ind}`"
        class="contacts-list__list-item"
      >
        <span class="contacts-list__name">Email: {{ contact.email }}</span>

        <span
          v-if="contact.number"
          class="contacts-list__name"
        >
          number: {{ contact.number }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.contacts-list {
  display: flex;
  justify-content: center;
  width: 100%;

  &__list {
    width: 50%;
  }

  &__list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
