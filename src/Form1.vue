<template>
  <div id="form1">
    <div>
      <div class="field">
        <label>Name</label>
        <textfield :keys="name" :outputs="output" :errors="errors"></textfield>
      </div>
      <div class="field">
        <label>Age</label>
        <dropdown :data="ages" :keys="age" :outputs="output" :errors="errors"></dropdown>
      </div>
      <div class="field">
        <label>Father name</label>
        <textfield :keys="fname" :outputs="output" :errors="errors"></textfield>
      </div>
      <div class="field">
        <label>Country</label>
        <dropdown
          :data="countries"
          :keys="country"
          :outputs="output"
          :errors="errors"
        ></dropdown>
      </div>
      <div class="field">
        <label>Language</label>
        <dropdown
          :data="languages"
          :keys="language"
          :outputs="output"
          :errors="errors"
        ></dropdown>
      </div>
      <button type="submit" v-on:click="validateForm()">Submit</button>
    </div>
    <submitbutton
      :submit="submit"
      v-if="submit"
      :outputs="output"
    ></submitbutton>
  </div>
</template>

<script>
export default {
  name: "form1",
  data() {
    return {
      name: "Name",
      fname: "Father Name",
      age: "Age",
      language: "Language",
      country: "Country",
      dataName: "",
      submit: false,
      output: {
        Name: "",
        Age: "",
        "Father Name": "",
        Country: "",
        Language: "",
      },
      errors: {
        Name: true,
        Age: true,
        "Father Name": true,
        Country: true,
        Language: true,
      },
      ages: [
        "0",
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
      ],
      countries: [
        "Palestinian Territory",
        "Argentina",
        "Albania",
        "South Korea",
        "Palestinian Territory",
        "Reunion",
        "China",
        "South Korea",
        "Croatia",
        "Argentina",
        "Sweden",
        "China",
        "China",
        "Poland",
        "China",
        "South Africa",
        "Sweden",
        "Argentina",
        "Ethiopia",
        "China",
        "Argentina",
        "Mexico",
        "Brazil",
        "Philippines",
        "United States",
        "Brazil",
        "Indonesia",
        "Greece",
        "Japan",
        "Indonesia",
        "Denmark",
        "Philippines",
        "Ukraine",
        "Russia",
        "Indonesia",
        "Philippines",
        "China",
        "Poland",
        "Thailand",
        "Indonesia",
        "Russia",
        "Croatia",
        "Swaziland",
        "Kenya",
        "Indonesia",
        "Poland",
        "Nigeria",
        "Indonesia",
        "Indonesia",
        "Brazil",
      ],

      languages: [
        "Georgian",
        "Bosnian",
        "Norwegian",
        "Nepali",
        "Pashto",
        "Swati",
        "Kazakh",
        "Dutch",
        "Croatian",
        "Catalan",
        "Khmer",
        "Maltese",
        "Indonesian",
        "Assamese",
        "Marathi",
        "Thai",
        "Kashmiri",
        "Nepali",
        "Georgian",
      ],
    };
  },
  methods: {
    updateData: function (key, output, dataName) {
      output[key] = dataName;
    },
    validateForm: function () {
      var flag = 0;
      for (var key in this.output) {
        if (this.output.hasOwnProperty(key)) {
          console.log(this.output[key]);
          if(this.output[key]== ""){
            console.log(false)
            this.errors[key] = false;
          }
          else{
            this.errors[key] = true;
            flag = flag + 1;
          }
        }
      }
      if(flag == 5){this.submit = true;}
    }
  }
};
</script>

<style>
body {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
#form1 {
  padding-left: 0px;
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
  padding-left: 0px;
  text-align: left;
}

button {
  display: block;
  margin: 10px 0 10px 22px;
}

div > p,
div > h2 {
  text-align: left;
  padding-left: 50px;
}

#formrow1 {
  display: inline-block;
  margin: 80px auto;
  margin-right: 250px;
  width: 350px;
  vertical-align: top;
  background: white;
  border-radius: 10px;
}

.field {
  background: white;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
}
span {
  color: #b94a48;
  font-weight: bold;
  display: block;
  padding-left: 0px;
  text-align: left;
}
</style>
