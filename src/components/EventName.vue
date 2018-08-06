<template>
  <p> Name: {{event.Name}} </p>
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



