
const { createApp } = Vue;
import comp_counter from './comp-counter.js';


createApp(comp_counter).mount('#app-counter1');
createApp(comp_counter).mount('#app-counter2');


const appUsers = createApp({
    data() {
        return {
            user_data: mock_data,
            user_max_show_count: 0,
            user_filter_letter: "",
            event_data: []
        }
    },
    computed: {
        filteredUsersByFirstLetter() {
            return this.user_data.filter(
                u => u.first_name[0].toLowerCase() === this.user_filter_letter.toLowerCase()
            )
        }
    }
});


const appEvents = createApp({
    data() {
        return {
            event_data: []
        }
    },
    methods: {
        LoadDataFromEndpoint() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => this.event_data = json);
        }
    }
});


const appMain = createApp({
    data() {
        return {
            test_text: '<span class=\"text-uppercase\">test text</span>',
            alert_show: false,
            shopping: {
                new_item: '',
                item_list: []
            },
            user: {
                name_first: '',
                name_last: ''
            }
        }
    },
    methods: {
        ToggleAlertShow() {
            this.alert_show = !this.alert_show;
        },
        AddShoppingItem() {
            if (this.shopping.new_item.trim() !== '') {
                this.shopping.item_list.push(this.shopping.new_item);
            }
            this.shopping.new_item = '';
        },
        RemoveShoppingItem(item_index) {
            this.shopping.item_list.splice(item_index, 1);
        }
    }
});


appUsers.mount('#app-users');
appEvents.mount('#app-events');
appMain.mount('#app-main');
