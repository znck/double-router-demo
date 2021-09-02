<template>
  <h1>Current Route</h1>
  <pre>a: {{ a }}</pre>
  <pre>b: {{ b }}</pre>
</template>

<script setup>
import { useRoute as useRouteA } from "../router-a";
import { useRoute as useRouteB } from "../router-b";

const a = useRouteA();
const b = useRouteB();
</script>
