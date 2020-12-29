<template>
  <svg
    :width="(barRadius + indicatorRadius + 1) * 2"
    :height="(barRadius + indicatorRadius + 1) * 2"
    ref="svg"
  >
    <circle
      cx="50%"
      cy="50%"
      :r="barRadius"
      :stroke="backgroundColor"
      fill="transparent"
      :stroke-width="width"
    />
    <circle
      cx="50%"
      cy="50%"
      :r="barRadius"
      :stroke="color"
      fill="transparent"
      :stroke-width="width"
      :transform="rotate"
      ref="c3"
    />
    <circle
      cx="50%"
      :cy="1 + indicatorRadius"
      :r="indicatorRadius"
      :fill="indicatiorColor"
      ref="c2"
    />
  </svg>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  props: {
    barRadius: {
      type: Number,
      default: 46,
    },
    indicatorRadius: {
      type: Number,
      default: 3,
    },
    width: {
      type: Number,
      default: 2,
    },
    process: {
      type: Number,
      default: 0,
    },
    backgroundColor: {
      type: String,
      default: "black",
    },
    color: {
      type: String,
      default: "red",
    },
    indicatiorColor: {
      type: String,
      default: "green",
    },
  },
  setup(props, context) {
    const svg = ref<SVGElement>(null);
    const c2 = ref<SVGCircleElement>(null);
    const c3 = ref<SVGCircleElement>(null);
    const rotate = ref<String>("");
    rotate.value = `rotate(-90,${props.barRadius + props.indicatorRadius + 1},${
      props.barRadius + props.indicatorRadius + 1
    })`;
    let active = false;
    const setTheta = (theta) => {
      let x, y;
      x =
        props.barRadius +
        props.indicatorRadius +
        1 +
        props.barRadius * Math.cos(theta);
      y =
        props.barRadius +
        props.indicatorRadius +
        1 -
        props.barRadius * Math.sin(theta);
      c2.value.setAttribute("cx", x);
      c2.value.setAttribute("cy", y);
      c3.value.setAttribute(
        "stroke-dasharray",
        `${props.barRadius * (Math.PI / 2 - theta)}, 9999999999999`
      );
      context.emit(
        "update:process",
        parseFloat(((Math.PI / 2 - theta) / Math.PI / 2).toFixed(3))
      );
    };
    onMounted(() => {
      setTheta(Math.PI / 2 - props.process * Math.PI * 2);
      c2.value.addEventListener("mousedown", (e) => {
        active = true;
      });
      document.addEventListener("mousemove", (e) => {
        if (!active) return;
        const rect = svg.value.getClientRects()[0];
        const svgcx = rect.left + rect.width / 2;
        const svgcy = rect.top + rect.height / 2;
        const deltay = svgcy - e.y;
        const deltax = e.x - svgcx;
        let theta = Math.atan(deltay / deltax);
        if (deltax < 0) {
          theta -= Math.PI;
        }
        setTheta(theta);
      });
      document.addEventListener("mouseup", () => {
        active && (active = false);
      });
    });

    return { svg, c2, c3, rotate };
  },
};
</script>
<style lang="scss" scoped>
circle {
  cursor: pointer;
}
</style>