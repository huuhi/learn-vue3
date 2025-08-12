<template>
  <div class="data-container">
    <h2>数据展示</h2>
    <div class="data-content">
      <p>这里是您的重要数据内容</p>
      <p>数据1: 示例数据A</p>
      <p>数据2: 示例数据B</p>
      <p>数据3: 示例数据C</p>
    </div>
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
  </div>
</template>

<script setup lang="ts">
  defineProps(['username','psw'])
  const emit= defineEmits(['update:username','update:psw'])
</script>
<style scoped>
.data-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h2 {
  color: #343a40;
  margin-bottom: 16px;
  font-size: 24px;
}

.data-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.data-content p {
  margin: 8px 0;
  color: #495057;
  font-size: 16px;
}

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