<template>
    <button class="navbar-toggler" type="button"
            data-toggle="collapse"
            :data-target="target"
            :aria-controls="target"
            :aria-expanded="toggled"
            aria-label="Toggle navigation">
        <slot>
            <span></span>
            <span></span>
        </slot>
    </button>
</template>
<script>
export default {
  props: {
    target: {
      type: [String, Number],
    },
    toggled: {
      type: Boolean,
      default: false,
    }
  }
};
</script>