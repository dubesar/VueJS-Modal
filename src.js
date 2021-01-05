var app = new Vue({
    el: '#app',
    mounted() {
        this.openModal();
    },
    methods : {
        openModal: function() {
            document.getElementById('myModal').showModal()
        }
    }
})