<script setup>
import {useRouteQuery} from "@vueuse/router";

const search = useRouteQuery("search", "defaultValue");
</script>

<template>
  <h1>Hello VueUse!</h1>
  <input v-model="search">
  <div>Search: {{ search }}</div>
</template>
