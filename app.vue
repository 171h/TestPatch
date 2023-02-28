<template>
  <div>
    <button @click="upd">Test Patch</button>
  </div>
</template>

<script setup lang="ts">
const upd = async () => {
  const fileInfo = {
    name: 'testfile',
    ext: '.docx',
    size: 1024,
    sha1: 'B4C8BE74F084A2CE432654DA027419E8FAF7740B'
  }
  const { data, error, pending, refresh } = await useFetch('api/file/1', { method: 'patch', body: fileInfo })
  console.log('data', data)
  console.log('error', error)
  console.log('pending', pending)
  console.log('refresh', refresh)
}
</script>
