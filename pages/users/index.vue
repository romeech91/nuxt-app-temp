<script setup>
definePageMeta({
  layout: "users",
});

const { data } = await useFetch(`https://dummyjson.com/users`);
const users = ref(data.value.users);
</script>

<template>
  <div>
    <Head>
      <Title>All users</Title>
      <Meta name="description" content="all users desc" />
    </Head>
    <h1>All users</h1>
    <ul class="d-flex justify-content-between flex-wrap list-unstyled gap-3">
      <li v-for="user in users" :key="user.id">
        <UserLink :user="user" />
      </li>
    </ul>
  </div>
</template>
