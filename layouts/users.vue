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

  <div class="container content py-5">
    <slot />
  </div>

  <footer class="bg-dark p-3">
    <p class="text-white">All rights reserved &copy;</p>
  </footer>
</template>

<style>
header a:not(".router-link-exact-active"):hover {
  text-decoration: underline;
}

header a.router-link-exact-active {
  color: yellow !important;
  font-weight: 500;
}

.content {
  min-height: calc(100vh - 144px);
}
</style>
