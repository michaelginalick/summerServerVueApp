<template>
  <li> Name: {{event.Name}} </li>
</template>

<script>
export default {
  name: "eventName",


  props: {
    event: {
      Object,
      required: true
    }
  }
}
</script>



