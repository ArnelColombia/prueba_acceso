<template>
    <div class="form-group" :class="{ 'input-group': hasIcon, 'input-group-focus': focused }">
        <slot name="label">
            <label v-if="label" class="control-label">{{ label }}</label>
        </slot>
        <slot name="addonLeft">
            <span v-if="addonLeftIcon" class="input-group-prepend">
                <div class="input-group-text">
                    <i :class="addonLeftIcon"></i>
                </div>
            </span>
        </slot>
        <slot>
            <input 
                :value="value"
                v-bind="$attrs"
                v-on="listeners"
                class="form-control"
                aria-describedby="addon-right addon-left"/>
        </slot>
        <slot name="addonRight">
            <span v-if="addonRightIcon" class="input-group-append">
                <div class="input-group-text">
                    <i :class="addonRightIcon"></i>
                </div>
            </span>
        </slot>
        <slot name="helperText"></slot>
    </div>
</template>
<script>
export default {
    name: "BaseInput",
    inheritAttrs: false,
    props: {
        label: String,
        value: [String, Number],
        addonRightIcon: String,
        addonLeftIcon: String
    },
    data: () => ({
        focused: false
    }),
    model: {
        prop: "value",
        event: "input"
    },
    methods: {
        onInput(e){
            this.$emit('input', e.target.value);
        },

        onFocus(){
            this.focused = true;
        },

        onBlur(){
            this.focused = false;
        }
    },
    computed: {
        hasIcon(){
            const { addonRight, addonLeft } = this.$slots;
            return addonRight !== undefined || addonLeft !== undefined || this.addonRightIcon !== undefined || this.addonLeftIcon !== undefined;
        },

        listeners(){
            return {
                ...this.$listeners,
                input: this.onInput,
                blur: this.onBlur,
                focus: this.onFocus
            };
        }
    }
}
</script>