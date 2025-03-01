<script setup>
const { user_id } = useRoute().params;
definePageMeta({
  layout: "users",
});

const { data } = await useAsyncData(`user-${user_id}`, async () => {
  return await $fetch(`https://dummyjson.com/users/${user_id}`);
});
</script>

<template>
  <div>
    <Head>
      <Title>User: {{ user_id }}</Title>
    </Head>
    <div v-if="data">
      <h1>Id of user {{ user_id }}</h1>
      <div>{{ data.firstName + " " + data.lastName }}</div>
      <div>
        email: <b>{{ data.email }}</b>
      </div>
    </div>
  </div>
</template>
