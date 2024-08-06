<script setup lang="ts">
	const count = ref(1)
</script>

<template>
	<div>
		<button @click="count++">+</button>
		{{ count }}
		<button @click="count--">-</button>
	</div>
</template>
