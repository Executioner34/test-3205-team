<script setup lang="ts">
import { ref } from "vue";
import { useContacts } from "../../../store/contacts.ts";
import AppInput from "../../general/AppInput.vue";
import AppButton from "../../general/AppButton.vue";
import { normalizeNumber } from "../../../functions/normalizeNumber.ts";

const store = useContacts();

const email = ref<string>('');
const number = ref<string>('');


const onClickButton = (event: Event) => {
  event.preventDefault();
  getContacts();
}

const getContacts = () => {
  const normalNumber = number.value ? normalizeNumber(number.value, '-') : undefined;

  store.getContact({
    email: email.value,
    number: normalNumber,
  })
}
</script>

<template>
  <div class="the-form">
    <form
      action="#"
      class="the-form__form"
    >
      <app-input
        id="email"
        v-model="email"
        type="email"
        label="Email"
        placeholder="example@example.com"
        class="the-form__input"
      />
      <app-input
        id="number"
        v-model="number"
        label="Number"
        type="text"
        maska="##-##-##"
        placeholder="00-00-00"
        class="the-form__input"
      />
      <app-button
        class="the-form__button"
        @click="onClickButton"
      >
        Submit
      </app-button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.the-form {
  &__form {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  &__input {
    width: calc(50% - 10px);
  }

  &__button {
    margin: 20px auto 0;
  }
}
</style>
