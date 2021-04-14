<template>
  <div id="form1">
    <label>Item Name:</label>
    <textfield :keys="itemname" :outputs="output"></textfield>
    <label>Category:</label>
    <dropdown :data="categories" :keys="itemcategory" :outputs="output"></dropdown>
    <label>Quantity:</label>
    <dropdown :data="quantities" :keys="quantity" :outputs="output"></dropdown>
    <label>Price:</label>
    <textfield :keys="price" :outputs="output"></textfield>
    <label>Currency:</label>
    <dropdown :data="currencies" :keys="currency" :outputs="output"></dropdown>
    <button type="submit" v-on:click="submit = !submit">Submit</button>
    <submitbutton :submit="submit" v-if="submit" :outputs="output"></submitbutton>
  </div>
</template>

<script>
export default {
  name: "form2",
  data() {
    return {
      "itemname": "Item Name",
      "price": "Price",
      "quantity": "Quantity",
      "currency": "Currency",
      "itemcategory": "Category",
      "dataName": "",
      "submit": false,
      "output": {"Item Name": "", "Category": "", "Quantity": "", "Price": "", "Currency": "" },
      "quantities": ["0", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
         26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
         50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
         74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
         96, 97, 98, 99],
      "categories": ["Fruits", "Vegetables", "Deserts", "Fast Foods", "Raw Materials", "Continental", "Spices"],
      "currencies": ["INR", "SAR", "EUR", "USD", "CNY"]
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
body{
  width: 70%;
  margin: 0 auto;
  text-align: center;
}
#form2{
  padding-left: 10px;
  display: block;
}

div > select {
  width: 178px;
}

div > h1 {
  padding-left: 20px;
  margin: 10px auto 0 0;
}

label {
  display: block;
  padding-left: 20px;
  text-align: left;
  margin: 10px 0 10px;
}

input, select{
  margin-left:-60px;
}

button {
  display: block;
  margin: 10px 0 10px 22px;
}

div>p, div>h2 {
   text-align: left;
   padding-left: 20px;
}

#formrow2 {
  display: inline-block;
  margin: 30px auto;
  width: 300px;
  vertical-align: top;
  border: 2px solid seagreen;
  background-color: aquamarine;
}
</style>
