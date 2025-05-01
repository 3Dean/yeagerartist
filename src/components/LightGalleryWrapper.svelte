<script>
  import { onMount } from "svelte";
  import lightGallery from "lightgallery";
  import lgThumbnail from "lightgallery/plugins/thumbnail";
  import lgZoom from "lightgallery/plugins/zoom";
  import lgVideo from "lightgallery/plugins/video";

  import "lightgallery/css/lightgallery.css";
  import "lightgallery/css/lg-thumbnail.css";
  import "lightgallery/css/lg-zoom.css";
  import "lightgallery/css/lg-video.css";

  export let images = [];
  export let title = "";

  let galleryEl;

  onMount(() => {
    if (galleryEl && !galleryEl.classList.contains("lg-initialized")) {
      lightGallery(galleryEl, {
        plugins: [lgThumbnail, lgZoom, lgVideo],
        speed: 500,
        thumbnail: true,
        zoom: true,
        youtubePlayerParams: { modestbranding: 1, rel: 0 },
        vimeoPlayerParams: { byline: 0, portrait: 0 },
      });
    }
  });
</script>

<div
  id="gallery"
  bind:this={galleryEl}
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
>
  {#each images as item, index}
    {#if typeof item === "string"}
      <!-- Image slide -->
      <a href={item} class="block overflow-hidden rounded-lg shadow-lg">
        <div class="relative h-48 overflow-y-scroll">
          <img
            src={item}
            alt={`Screenshot ${index + 1} of ${title}`}
            class="object-contain w-full"
            loading="lazy"
          />
        </div>
      </a>
    {:else}
      <!-- Video slide -->
      <a
        href={item.src}
        data-poster={item.poster}
        data-sub-html={item.subHtml}
        class="block overflow-hidden rounded-lg shadow-lg"
      >
        <div class="relative h-48 overflow-y-scroll">
          <img
            src={item.poster}
            alt={`Video ${index + 1} thumbnail of ${title}`}
            class="object-contain w-full"
            loading="lazy"
          />
        </div>
      </a>
    {/if}
  {/each}
</div>
