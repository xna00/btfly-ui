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
      pointer-events="stroke"
      ref="c1"
    />
    <circle
      cx="50%"
      cy="50%"
      :r="barRadius"
      :stroke="color"
      fill="transparent"
      :stroke-width="width"
      :transform="rotate"
      pointer-events="stroke"
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
    const c1 = ref<SVGCircleElement>(null);
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
      const clickHandler = () => {};
      c1.value.addEventListener("click", (e) =>
        moveHandler(e.clientX, e.clientY)
      );
      c3.value.addEventListener("click", (e) =>
        moveHandler(e.clientX, e.clientY)
      );
      setTheta(Math.PI / 2 - props.process * Math.PI * 2);
      c2.value.addEventListener("mousedown", (e) => {
        active = true;
      });
      const moveHandler = (x, y) => {
        const rect = svg.value.getClientRects()[0];
        const svgcx = rect.left + rect.width / 2;
        const svgcy = rect.top + rect.height / 2;
        const deltaX = x - svgcx;
        const deltaY = svgcy - y;
        let theta = Math.atan(deltaY / deltaX);
        if (deltaX < 0) {
          theta -= Math.PI;
        }
        setTheta(theta);
      };
      document.addEventListener("mousemove", (e) => {
        if (!active) return;
        moveHandler(e.clientX, e.clientY);
      });
      c2.value.addEventListener("touchstart", () => console.log("s"), {
        passive: true,
      });

      c2.value.addEventListener(
        "touchmove",
        (e) => moveHandler(e.touches[0].clientX, e.touches[0].clientY),
        { passive: true }
      );
      document.addEventListener("mouseup", () => {
        active && (active = false);
      });
    });

    return { svg, c1, c2, c3, rotate };
  },
};
</script>
<style lang="scss" scoped>
circle {
  cursor: pointer;
}
</style>