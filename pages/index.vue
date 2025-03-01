<script setup>
const { data } = await useFetch("/api/example", {
  method: "post",
  body: { name: "Test", id: 222 },
});
</script>

<template>
  <h1>Home page</h1>
  <Alert color="primary"> {{ data.mess }} </Alert>
</template>
