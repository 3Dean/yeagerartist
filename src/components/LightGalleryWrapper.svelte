<script context="module">
  // Static import of LightGallery CSS for icons/arrows on initial load
  import "lightgallery/css/lightgallery-bundle.css";
  import "lightgallery/css/lg-transitions.css";
  import "lightgallery/css/lg-fullscreen.css";
  import "lightgallery/css/lg-thumbnail.css";
  import "lightgallery/css/lg-zoom.css";
  import "lightgallery/css/lg-video.css";
</script>

<script>
  import { onMount } from "svelte";

  export let images = [];
  export let title = "";

  let galleryEl;

  onMount(async () => {
    if (typeof window === "undefined" || !galleryEl || galleryEl.classList.contains("lg-initialized")) {
      return;
    }

    const [lg, thumbnail, zoom, video] = await Promise.all([
      import("lightgallery"),
      import("lightgallery/plugins/thumbnail"),
      import("lightgallery/plugins/zoom"),
      import("lightgallery/plugins/video"),
    ]);
    const lightGallery = lg.default;
    const lgThumbnail = thumbnail.default;
    const lgZoom = zoom.default;
    const lgVideo = video.default;

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
  id="gallery"
  bind:this={galleryEl}
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
>
  {#each images as item, index}
    {#if typeof item === "string"}
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
