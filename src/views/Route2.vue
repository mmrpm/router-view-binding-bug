<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{ exampleRef?: number }>();
</script>

<template>
  <div>
    <router-link to="/">Go to route1</router-link>
    <div>This is the value of exampleRef on route2: {{ exampleRef }}</div>
  </div>
</template>
