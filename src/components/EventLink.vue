<template>
  <div v-if="event.Link">
    <p> Link: &nbsp; <a :href="`${event.Link}`"> {{ event.Link }}</a></p>
  </div>
  <div v-else>
    <p> Link: No link was provided</p>
  </div>
</template>

<script>
export default {
  name: "eventLink",

  props: {
    event: {
      Object,
      required: true
    }
  }
};
</script>

<style>
li {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
  margin: 25px;
  font-size: 1.5em;
}
</style>


