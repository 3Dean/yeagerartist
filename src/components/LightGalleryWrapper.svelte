<script>
  import { onMount } from "svelte";

  export let images = [];
  export let title = "";

  let galleryEl;

  onMount(async () => {
    if (typeof window === "undefined" || !galleryEl || galleryEl.classList.contains("lg-initialized")) {
      return;
    }

    const { default: lightGallery } = await import("lightgallery");
    const { default: lgThumbnail } = await import("lightgallery/plugins/thumbnail");
    const { default: lgZoom } = await import("lightgallery/plugins/zoom");
    const { default: lgVideo } = await import("lightgallery/plugins/video");

    // dynamically load core and plugin CSS including controls and icons
    await import("lightgallery/css/lightgallery.css");
    await import("lightgallery/css/lg-transitions.css");
    await import("lightgallery/css/lg-fullscreen.css");
    await import("lightgallery/css/lg-thumbnail.css");
    await import("lightgallery/css/lg-zoom.css");
    await import("lightgallery/css/lg-video.css");

      lightGallery(galleryEl, {
        plugins: [lgThumbnail, lgZoom, lgVideo],
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
