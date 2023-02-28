<template>
  <div>
    <button @click="upd">Test Patch</button>
    <div style="font-size: 25px;">
      when i click "Test Patch" button, the console will show:"400 Bad request"，but the api is work well in ApiPost.
      <hr>
      i think the problem is the body of the request, but i don't know how to fix it.
    </div>
    <div style="margin-top: 2rem;">
      <div style="color: red; background-color: black;">400 Bad request</div>
      <img src="~/assets/Snipaste_2023-02-28_18-00-16.png" alt="">
    </div>
    <hr>
    <div>
      <div style="color: red; background-color: black;">work well in ApiPost</div>
      <img src="~/assets/Snipaste_2023-02-28_18-06-08.png" alt="">
    </div>
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
