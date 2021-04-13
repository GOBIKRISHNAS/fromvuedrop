Vue.component('dropdown', {
   template: `
    <div>
        <select v-model="dataName">
            <option v-for="data in dropData" :value="data">{{data}}</option>
        </select>
        <h4 v-if="dataName">{{dataName}}</h4>
    </div>
`,
   props: ['data', 'country'],
   data: function () {
      return {
         "dropData": this.data,
         "dataName": ""
      }
   }
});


new Vue({
   el: '#app',
   data: {
      "name": "",
      "fname": "",
      "ages": ["0", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
         26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
         50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
         74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
         96, 97, 98, 99],
      "countries": ["Palestinian Territory", "Argentina", "Albania", "South Korea", "Palestinian Territory", "Reunion", "China", "South Korea",
         "Croatia", "Argentina", "Sweden", "China", "China", "Poland", "China", "South Africa", "Sweden", "Argentina", "Ethiopia", "China", "Argentina",
         "Mexico", "Brazil", "Philippines", "United States", "Brazil", "Indonesia", "Greece", "Japan", "Indonesia", "Denmark", "Philippines",
         "Ukraine", "Russia", "Indonesia", "Philippines", "China", "Poland", "Thailand", "Indonesia", "Russia", "Croatia", "Swaziland", "Kenya", "Indonesia",
         "Poland", "Nigeria", "Indonesia", "Indonesia", "Brazil"],
         
      "languages": ["Georgian", "Bosnian", "Norwegian", "Nepali", "Pashto", "Swati", "Kazakh", "Dutch", "Croatian", "Catalan", "Khmer",
         "Maltese", "Indonesian", "Assamese", "Marathi", "Thai", "Kashmiri", "Nepali", "Georgian"]
   }
});