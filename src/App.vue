<script setup lang="ts">
import { onMounted, ref } from "vue";

const getValueLater = () =>
  new Promise<number>((resolve) => setTimeout(() => resolve(1), 300));

const exampleRef = ref<number>();
onMounted(async () => (exampleRef.value = await getValueLater()));
</script>

<template>
  <div>
    <div>
      This playground has a parent component with a router-view and two child
      routes. The parent component has a ref, exampleRef, that is initialized as
      undefined but eventually updates to have a value. This ref is passed into
      the router-view as a prop, expected to be received by route2.
    </div>
    <div>
      I would expect that the child route receives the updated exampleRef value.
    </div>
    <div>
      In development mode, route2 receives the updated exampleRef value. In
      production mode, route2 will see exampleRef as undefined, which is the
      value it was initialized as.
    </div>
    <div>
      This is the value of exampleRef on the parent component:
      {{ exampleRef }}
    </div>
    <div>Current route being shown: {{ $route.name }}</div>
    <router-view :exampleRef="exampleRef" />
  </div>
</template>
