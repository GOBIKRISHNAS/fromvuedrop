Vue.component('namedropdown', {
    template: `
    <div>
        <select v-model="selectedPerson">
            <option v-for="person in people" :value="person.key">{{person.name}}</option>
        </select>
        <h4 v-if="selectedPerson">Name: {{people[selectedPerson-1].name}}</h4>
    </div>
`,
    data: function(){
    return {
        people: [
            {key: 1, name: "Carl"},
            {key: 2, name: "Carol"},
            {key: 3, name: "Clara"},
            {key: 4, name: "John"},
            {key: 5, name: "Jacob"},
            {key: 6, name: "Mark"},
            {key: 7, name: "Steve"}
        ],
        selectedPerson: ""
    }
}
});

Vue.component('agedropdown', {
    template: `
    <div>
        <select v-model="selectedAge">
            <option v-for="age in ages" :value="age.key">{{age.age}}</option>
        </select>
        <h4 v-if="selectedAge">Age: {{ages[selectedAge-1].age}}</h4>
    </div>
`,
    data: function(){
    return {
        ages: [
            {key: 1, age: "20"},
            {key: 2, age: "21"},
            {key: 3, age: "22"},
            {key: 4, age: "23"},
            {key: 5, age: "24"},
            {key: 6, age: "25"},
            {key: 7, age: "26"},
            {key: 8, age: "27"},
            {key: 9, age: "28"},
            {key: 10, age: "29"},
            {key: 11, age: "30"},
        ],
        selectedAge: ""
    }
}
});

new Vue({
    el: '#app'
});