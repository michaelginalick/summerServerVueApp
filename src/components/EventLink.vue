<template>
  <div v-if="event.Link">
    <li> Link: &nbsp; <a :href="`${event.Link}`"> {{ event.Link }}</a></li>
  </div>
  <div v-else>
    <li> Link: No link was provided</li>
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
    margin: 0;
    font-size: 1.5em;
}
</style>


