<template>
  <div class="card p-5">
    <h5>{{ symbol }} {{ value || 0 }}</h5>
    <hr>
    <h3 class="pb-3">{{ title }}</h3>
  </div>
</template>

<script>
export default {
    name: "Counter",
    props: ["value", "title", "symbol"]
}
</script>