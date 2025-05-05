<script lang="ts">
  import { onMount } from "svelte";
  import lightGallery from "lightgallery";
  import lgThumbnail from "lightgallery/plugins/thumbnail";
  import lgZoom from "lightgallery/plugins/zoom";
  import lgVideo from "lightgallery/plugins/video";
  import "lightgallery/css/lightgallery.css";
  import "lightgallery/css/lg-zoom.css";
  import "lightgallery/css/lg-thumbnail.css";
  import "lightgallery/css/lg-video.css";

  export let items: Array<{
    src: string;
    thumb?: string;
    video?: {
      source: { src: string; type: string }[];
      attributes?: Record<string, any>;
    };
  }> = [];

  let galleryEl: HTMLElement;

  onMount(() => {
    if (galleryEl) {
      lightGallery(galleryEl, {
        selector: "a",
        plugins: [lgThumbnail, lgZoom, lgVideo],
        speed: 500,
        download: false,
      });
    }
  });
</script>

<div
  bind:this={galleryEl}
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
>
  {#each items as item, index}
    <a
      href={item.video ? item.video.source[0].src : item.src}
      {...item.video && { "data-lg-video": JSON.stringify(item.video) }}
      class="block overflow-hidden rounded-lg shadow-lg"
    >
      <img
        src={item.thumb || item.src}
        alt={`Slide ${index + 1}`}
        class="w-full h-64 object-cover"
        loading="lazy"
      />
    </a>
  {/each}
</div>
