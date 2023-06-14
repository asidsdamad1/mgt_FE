<script>

export default {
    data() {
        return {
            open: false,
            current: 0
        }
    },
    props: {
        suggestions: {
            type: Array,
            required: true
        },

        selection: {
            type: String,
            required: true,
            twoWay: true
        }
    },

    computed: {
        matches() {
            return this.suggestions.filter((str) => {
                return String(str).indexOf(this.selection) >= 0;
            });
        },

        openSuggestion() {
            return this.selection !== "" &&
                this.matches.length !== 0 &&
                this.open === true;
        }
    },

    methods: {
        enter() {
            this.selection = this.matches[this.current];
            this.open = false;
            this.$emit('setStudentCode', this.selection);
        },

        up() {
            if (this.current > 0)
                this.current--;
        },

        down() {
            if (this.current < this.matches.length - 1)
                this.current++;
        },

        isActive(index) {
            return index === this.current;
        },

        change() {
            if (this.open === false) {
                this.open = true;
                this.current = 0;
            }
            this.$emit('setStudentCode', this.selection);
        },

        suggestionClick(index) {
            this.open = false;
            this.$emit('setStudentCode', index);
        },
        selectValue(value) {
            this.selectedValue = value;
        },
        handleClickOutside() {
            this.open = false;
        }
    }
}

</script>
<template>
    <div style="position:relative" v-bind:class="{'open':openSuggestion}">
        <input class="form-control" type="text" v-model="selection"
               @keydown.enter='enter'
               @keydown.down='down'
               @keydown.up='up'
               @input='change'
        />
        <ul v-on:mousedown="handleClickOutside" class="dropdown-menu" v-show="open" style="display: block ;width:100%">
            <li v-for="suggestion in matches.slice(0,5)"
                v-bind:class="{'active': isActive(current)}"
                @click="suggestionClick(suggestion)"
            >
                {{ suggestion }}
            </li>
        </ul>

    </div>
</template>
<style>
li{
  cursor: pointer;
}
li.selected {
    background-color: yellow;
}

.hidden-value {
    visibility: hidden;
}
</style>
