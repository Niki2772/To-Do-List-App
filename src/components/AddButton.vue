<template>
  <ParticleEffectButton
      :visible.sync="btnOps.visible"
      :animating.sync="btnOps.animating"
      :options="btnOps"
      cls="btn-cls"
      :class="{disabledBtn : this.newToDoItem.length <= 0}"
  >
    Додати
  </ParticleEffectButton>
</template>

<script>
import ParticleEffectButton from "vue-particle-effect-buttons"

export default {
  data() {
    return {
      btnOps: {
        type: "triangle",
        easing: "easeOutQuart",
        size: 6,
        duration: 500,
        direction: 'right',
        particlesAmountCoefficient: 4,
        oscillationCoefficient: 2,
        color: function () {
          return Math.random() < 0.5 ? "#000" : "#ffffff";
        },
        onComplete: () => {
          this.btnOps.visible = true
          this.btnOps.animating = true
        },
        visible: true,
        animating: false,
      },
    }
  },
  props: ['newToDoItem'],
  components: {
    ParticleEffectButton
  }
};
</script>

<style>
.vue-particle-effect-button .particles-button {
  padding: 11px 25px;
  color: #fff;
  background-color: #34353a;
}

.vue-particle-effect-button .particles-button:hover {
  background-color: #000;
}

.disabledBtn {
  pointer-events: none;
  cursor: not-allowed;
}

/*adaptive version*/

@media (max-width: 600px) {
  .particles, .particles-wrapper {
    border-radius: 4px;
    width: 100%;
    text-align: center;
  }

  .vue-particle-effect-button .particles-button {
    display: block;
    padding: 10px 0;
    width: 100%;
  }

  .vue-particle-effect-button {
    width: 100%;
  }
}

</style>