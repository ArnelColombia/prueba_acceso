<template>
  <nav
    class="navbar"
    :class="[
      { 'navbar-expand-md': expand },
      { 'navbar-transparent': transparent },
      { [`bg-${type}`]: type },
    ]"
  >
    <div :class="containerClasses">
      <slot name="brand">
        <a
          :href="$route.path"
          class="h4 mb-0 text-white text-capitalize d-none d-lg-inline-block"
        >
          {{ $route.name }}
        </a>
      </slot>
      <navbar-toggle-button
        v-if="showToggleButton"
        :toggled="toggled"
        :target="contentId"
        @click.native.stop="toggled = !toggled"
      >
        <span class="navbar-toggler-icon"></span>
      </navbar-toggle-button>
      <div
        class="collapse navbar-collapse"
        :class="{ show: toggled }"
        :id="contentId"
        v-click-outside="closeMenu"
      >
        <slot :close-menu="closeMenu"></slot>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from "./NavbarToggleButton";
export default {
  name: "BaseNav",
  components: { NavbarToggleButton },
  props: {
    type: {
      type: String,
      default: "",
    },

    title: {
      type: String,
      default: "",
    },

    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
    },

    containerClasses: {
      type: [String, Object, Array],
      default: "container-fluid",
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    expand: {
      type: Boolean,
      default: false,
    },
    showToggleButton: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
      toggled: false
  }),
  methods: {
      closeMenu(){
          this.toggled = false;
      }
  }
};
</script>