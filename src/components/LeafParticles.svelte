<script>
  import { onMount } from "svelte";
  import { tsParticles } from "@tsparticles/engine";

  let container;

  onMount(() => {
    console.log("🍃 Mounting LeafParticles...");

    tsParticles
      .load("leafParticles", {
        fullScreen: { enable: false },
        detectRetina: true,
        background: { color: "#111" }, // force it to be visible
        particles: {
          number: { value: 50 },
          shape: {
            type: "char",
            character: {
              value: ["🍃", "🍂", "🍁"],
              font: "Verdana",
              weight: "400",
              fill: true,
            },
          },
          size: { value: { min: 20, max: 32 } },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            outModes: { default: "out" },
          },
          opacity: { value: 1 },
        },
      })
      .then(() => {
        console.log("✅ Particles loaded");
      })
      .catch(console.error);
  });
</script>

<div
  bind:this={container}
  class="absolute inset-0 z-[9999] w-full h-full pointer-events-none border-4 border-red-500"
>
  <canvas id="leafParticles" width="1920" height="1080"></canvas>
</div>
