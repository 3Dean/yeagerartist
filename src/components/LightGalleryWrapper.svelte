<script lang="ts">
  import "lightgallery/css/lightgallery-bundle.css";
  import lightGallery from "lightgallery";
  import lgThumbnail from "lightgallery/plugins/thumbnail";
  import lgZoom from "lightgallery/plugins/zoom";
  import lgVideo from "lightgallery/plugins/video";
  import { onMount } from "svelte";

  export let images: Array<string | { src: string; poster: string; subHtml?: string }> = [];
  let galleryEl: HTMLElement | null = null;

  onMount(() => {
    if (!galleryEl) return;
    lightGallery(galleryEl, {
      plugins: [lgThumbnail, lgZoom, lgVideo],
      download: false,
      speed: 500,
      thumbnail: true,
      zoom: true,
      youTubePlayerParams: { modestbranding: 1, rel: 0 },
      vimeoPlayerParams: { byline: 0, portrait: 0 },
    });
  });
</script>

<div
  bind:this={galleryEl}
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
>
  {#each images as item, index}
    <a
      href={typeof item === "string" ? item : item.src}
      {...(typeof item !== "string"
        ? { "data-poster": item.poster, "data-sub-html": item.subHtml }
        : {})}
      class="block overflow-hidden rounded-lg shadow-lg"
    >
      <div class="relative h-48">
        <img
          src={typeof item === "string" ? item : item.poster}
          alt={typeof item === "string" ? `Image ${index + 1}` : `Video ${index + 1}`}
          class="object-contain w-full"
          loading="lazy"
        />
      </div>
    </a>
  {/each}
</div>
