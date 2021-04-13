<template>
  <input type="text" v-model="dataName" v-on:change="updateData(key, output, dataName)"/>
</template>

<script>
export default {
  props: {
      keys: {
        type: String,
        required: true
      },
      outputs: {
        type: Object,
        required: true
      }
    },
  data() {
    return {
        "key": this.keys,
        "output": this.outputs,
        "dataName": ""
    };
  },
  methods: {
    updateData: function (key, output, dataName) {
        output[key] = dataName;
    }
  }
};
</script>

<style>

</style>
