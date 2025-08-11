<template>
  <input 
  type="text" 
  :value="username"
  @input="emit('update:username',(<HTMLInputElement>$event.target).value)"
  >
  <input 
  type="password" 
  :value="psw"
  @input="emit('update:psw',(<HTMLInputElement>$event.target).value)"
  >
</template>

<script setup lang="ts">
  defineProps(['username','psw'])
  const emit= defineEmits(['update:username','update:psw'])
</script>
<style scoped>
input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #6e8efb, #a777e3) border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: all 0.3s ease;
}

input:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

input:focus {
  outline: none;
  box-shadow: 0 4px 16px rgba(111, 142, 251, 0.3);
}
</style>