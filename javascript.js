Vue.component('countrydropdown', {
    template: `
    <div>
        <select v-model="countryName">
            <option v-for="country in countries" :value="country.key">{{country.name}}</option>
        </select>
        <h4 v-if="countryName">{{countries[countryName-1].name}}</h4>
    </div>
`,
    data: function(){
    return {
        countries: [
            {
               "key":1,
               "name":"Palestinian Territory"
            },
            {
               "key":2,
               "name":"Argentina"
            },
            {
               "key":3,
               "name":"Albania"
            },
            {
               "key":4,
               "name":"South Korea"
            },
            {
               "key":5,
               "name":"Palestinian Territory"
            },
            {
               "key":6,
               "name":"Reunion"
            },
            {
               "key":7,
               "name":"China"
            },
            {
               "key":8,
               "name":"South Korea"
            },
            {
               "key":9,
               "name":"Croatia"
            },
            {
               "key":10,
               "name":"Argentina"
            },
            {
               "key":11,
               "name":"Sweden"
            },
            {
               "key":12,
               "name":"China"
            },
            {
               "key":13,
               "name":"China"
            },
            {
               "key":14,
               "name":"Poland"
            },
            {
               "key":15,
               "name":"China"
            },
            {
               "key":16,
               "name":"South Africa"
            },
            {
               "key":17,
               "name":"Sweden"
            },
            {
               "key":18,
               "name":"Argentina"
            },
            {
               "key":19,
               "name":"Ethiopia"
            },
            {
               "key":20,
               "name":"China"
            },
            {
               "key":21,
               "name":"Argentina"
            },
            {
               "key":22,
               "name":"Mexico"
            },
            {
               "key":23,
               "name":"Brazil"
            },
            {
               "key":24,
               "name":"Philippines"
            },
            {
               "key":25,
               "name":"United States"
            },
            {
               "key":26,
               "name":"Brazil"
            },
            {
               "key":27,
               "name":"Indonesia"
            },
            {
               "key":28,
               "name":"Greece"
            },
            {
               "key":29,
               "name":"Japan"
            },
            {
               "key":30,
               "name":"Indonesia"
            },
            {
               "key":31,
               "name":"Denmark"
            },
            {
               "key":32,
               "name":"Philippines"
            },
            {
               "key":33,
               "name":"Ukraine"
            },
            {
               "key":34,
               "name":"Russia"
            },
            {
               "key":35,
               "name":"Indonesia"
            },
            {
               "key":36,
               "name":"Philippines"
            },
            {
               "key":37,
               "name":"China"
            },
            {
               "key":38,
               "name":"Poland"
            },
            {
               "key":39,
               "name":"Thailand"
            },
            {
               "key":40,
               "name":"Indonesia"
            },
            {
               "key":41,
               "name":"Russia"
            },
            {
               "key":42,
               "name":"Croatia"
            },
            {
               "key":43,
               "name":"Swaziland"
            },
            {
               "key":44,
               "name":"Kenya"
            },
            {
               "key":45,
               "name":"Indonesia"
            },
            {
               "key":46,
               "name":"Poland"
            },
            {
               "key":47,
               "name":"Nigeria"
            },
            {
               "key":48,
               "name":"Indonesia"
            },
            {
               "key":49,
               "name":"Indonesia"
            },
            {
               "key":50,
               "name":"Brazil"
            }
         ],
        countryName: ""
    }
}
});

Vue.component('agedropdown', {
    template: `
    <div>
        <select v-model="selectedAge">
            <option v-for="age in ages" :value="age">{{age}}</option>
        </select>
        <h4 v-if="selectedAge">{{ages[selectedAge]}}</h4>
    </div>
`,
    data: function(){
    return {
        ages: ["0", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
96, 97, 98, 99],
        selectedAge: ""
    }
}
});

Vue.component('languagedropdown', {
    template: `
    <div>
        <select v-model="languageName">
            <option v-for="language in languages" :value="language.key">{{language.name}}</option>
        </select>
        <h4 v-if="languageName">{{languages[languageName-1].name}}</h4>
    </div>
`,
    data: function(){
    return {
        languages: [
            {
               "key":1,
               "name":"Georgian"
            },
            {
               "key":2,
               "name":"Bosnian"
            },
            {
               "key":3,
               "name":"Norwegian"
            },
            {
               "key":4,
               "name":"Nepali"
            },
            {
               "key":5,
               "name":"Pashto"
            },
            {
               "key":6,
               "name":"Swati"
            },
            {
               "key":7,
               "name":"Kazakh"
            },
            {
               "key":8,
               "name":"Dutch"
            },
            {
               "key":9,
               "name":"Croatian"
            },
            {
               "key":10,
               "name":"Catalan"
            },
            {
               "key":11,
               "name":"Khmer"
            },
            {
               "key":12,
               "name":"Maltese"
            },
            {
               "key":13,
               "name":"Indonesian"
            },
            {
               "key":14,
               "name":"Assamese"
            },
            {
               "key":15,
               "name":"Marathi"
            },
            {
               "key":16,
               "name":"Thai"
            },
            {
               "key":17,
               "name":"Kashmiri"
            },
            {
               "key":18,
               "name":"Nepali"
            },
            {
               "key":19,
               "name":"Georgian"
            }
         ],
        languageName: ""
    }
}
});

new Vue({
    el: '#app',
    data: {
        "name": "",
        "fname": ""
    }
});