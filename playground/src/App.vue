<script setup lang="ts">
const show = ref(false)
function change() {
  show.value = !show.value
}
function cancel() {
  change()
}
function confirm() {
  alert('confirm')
  change()
}
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <div>
      <button btn @click="change()">
        alert
      </button>
    </div>
    <s-message-box
      :show="show"
      title-color="yellow"
      message-color="green"
      :close="change"
      :cancel="cancel"
      :confirm="confirm"
    />
    <Footer />
  </main>
</template>