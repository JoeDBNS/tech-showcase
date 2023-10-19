export default {
    data() {
        return { count: 0 }
    },
    template: `
        <p>Count: {{count}}</p>
        <button type="button" @click="count++">+ 1</button>
        <button type="button" @click="count--">- 1</button>

        <div class="alert alert-primary mt-3" v-show="count > 0">The count is positive!</div>
        <div class="alert alert-secondary mt-3" v-show="count == 0">The count is zero!</div>
        <div class="alert alert-danger mt-3" v-show="count < 0">The count is negative!</div>
    `
}