<script setup>
useHead({
  title: "Contacts",
  meta: [
    {
      name: "description",
      content: "Contact page desc",
    },
  ],
});

const name = ref("");
const email = ref("");
const message = ref("");
const isSub = ref(false);
const resultMessage = ref("");

const submitForm = async () => {
  isSub.value = true;
  resultMessage.value = "";

  const { error } = await useFetch("/api/contacts", {
    method: "post",
    body: {
      name: name.value,
      email: email.value,
      message: message.value,
    },
  });

  if (error.value) {
    resultMessage.value = "Error " + error.value;
  } else {
    resultMessage.value = "Success";
    name.value = "";
    email.value = "";
    message.value = "";
    isSub.value = false;
  }
};
</script>

<template>
  <h1>contact</h1>

  <form @submit.prevent="submitForm" class="d-flex flex-column gap-3">
    <input
      v-model="name"
      type="text"
      id="name"
      class="form-control"
      placeholder="Enter name"
    />
    <input
      v-model="email"
      type="text"
      id="email"
      class="form-control"
      placeholder="Enter email"
    />
    <textarea
      v-model="message"
      name="message"
      id="message"
      class="form-control"
      placeholder="Enter your message"
    ></textarea>
    <button type="submit" class="btn btn-primary" :disabled="isSub">
      {{ isSub ? "Sending..." : "Send" }}
    </button>
  </form>

  <p v-if="resultMessage" class="mt-3 alert alert-success">
    {{ resultMessage }}
  </p>
</template>
