<template>
  <table>
    <tr>
      <th>Word</th>
      <th>Count</th>
    </tr>
    <tr class="row" v-for="occurrence in content" :key="occurrence.word">
      <td>{{ occurrence.word }}</td>
      <td>{{ occurrence.count }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ['content']
};
</script>

<style scoped>
.row {
  text-align: center;
}
</style>
