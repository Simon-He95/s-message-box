<script setup lang="ts">
const show = ref(false);
function change() {
  show.value = !show.value;
}
function cancel() {
  change();
}
function confirm() {
  alert("confirm");
  change();
}
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <div>
      <button @click="change()" btn>alert</button>
    </div>
    <s-message-box
      :show="show"
      titleColor="yellow"
      messageColor="green"
      :close="change"
      :cancel="cancel"
      :confirm="confirm"
    />
    <Footer />
  </main>
</template>
