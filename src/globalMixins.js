import Vue from 'vue'

const miGlobalMixin = {
    methods: {
        setHeaderBackgroundColor(color) {
            this.$store.dispatch('setHeaderBackgroundColorAction', color)
        },
        setPickedColor(color) {
            this.$store.dispatch('setPickedColorAction', color)
        }
    },
    computed: {
        mostrarPickedColor() {
            return this.$store.state.pickedColor
        },
        mostrarHeaderBackgroundColor() {
            return this.$store.state.headerBackgroundColor
        }
    }
}

Vue.mixin(miGlobalMixin)