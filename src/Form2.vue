<template>
  <div id="form1">
    <div class="field">
    <label>Item Name</label>
    <textfield :keys="itemname" :outputs="output"></textfield>
    </div>
    <div class="field">
    <label>Category</label>
    <dropdown :data="categories" :keys="itemcategory" :outputs="output"></dropdown>
    </div>
    <div class="field">
    <label>Quantity</label>
    <dropdown :data="quantities" :keys="quantity" :outputs="output"></dropdown>
    </div>
    <div class="field">
    <label>Price</label>
    <textfield :keys="price" :outputs="output"></textfield>
    </div>
    <div class="field">
    <label>Currency</label>
    <dropdown :data="currencies" :keys="currency" :outputs="output"></dropdown>
    </div>
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
body {
  margin: 0 auto;
  text-align: center;
  background:    url('https://completeprojectresource.com/wp-content/uploads/2018/03/contact-us-form-background.jpg');
  background-size:     cover;                     
  background-repeat:   no-repeat;
  background-position: center center;     
}
#form2 {
  padding-left: 20px;
  display: block;
}

div > select {
  width: 260px;
}

div > h1 {
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
  margin: 10px auto 20px 0;
}

label {
  display: block;
  padding-left: 0px;
  text-align: left;
}

button {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin: 10px 0 10px 12px;
  background-color: #7b81ec;
  border: none;
  border-radius: 25px;
  color: black;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

div > p,
div > h2 {
  text-align: left;
  padding-left: 50px;
}

#formrow2 {
  display: inline-block;
  margin: 80px auto;
  width: 330px;
  vertical-align: top;
  background: white;
  border-radius: 10px;
}

.field{
  background: white;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  border-radius: 5px;
}

input, select{
  width: 260px;
  background-color: transparent;
  outline: none;
  outline-style: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid blue 1px;
  padding: 3px 10px;
}
</style>
