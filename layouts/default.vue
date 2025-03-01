<template>
  <header class="bg-dark p-3">
    <ul class="nav container">
      <li><NuxtLink class="nav-link text-white" to="/">Main</NuxtLink></li>
      <li>
        <NuxtLink class="nav-link text-white" to="/contacts">Contact</NuxtLink>
      </li>
      <li>
        <NuxtLink class="nav-link text-white" to="/users/">Users</NuxtLink>
      </li>
    </ul>
  </header>

  <div class="container py-5">
    <slot />
  </div>
</template>

<style>
header a:not(".router-link-exact-active"):hover {
  text-decoration: underline;
}

header a.router-link-exact-active {
  color: yellow !important;
  font-weight: 500;
}
</style>
