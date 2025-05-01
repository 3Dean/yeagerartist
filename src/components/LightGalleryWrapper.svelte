<script>
  import { onMount } from "svelte";
  import lightGallery from "lightgallery";
  import lgZoom from "lightgallery/plugins/zoom";
  import lgThumbnail from "lightgallery/plugins/thumbnail";
  import "lightgallery/css/lightgallery.css";
  import "lightgallery/css/lg-zoom.css";
  import "lightgallery/css/lg-thumbnail.css";

  export let images = [];
  export let title = "";

  onMount(() => {
    const galleryEl = document.getElementById("gallery");
    if (galleryEl && !galleryEl.classList.contains("lg-initialized")) {
      lightGallery(galleryEl, {
        selector: "a",
        plugins: [lgZoom, lgThumbnail],
        thumbnail: true,
        download: false,
        speed: 500,
      });
    }
  });
</script>

<div id="gallery" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {#each images as img, index}
    <a href={img} class="block overflow-hidden rounded-lg shadow-lg">
      <div class="relative h-64 overflow-y-scroll">
        <img
          src={img}
          alt={`Screenshot ${index + 1} of ${title}`}
          class="object-contain w-full"
          loading="lazy"
        />
      </div>
    </a>
  {/each}
</div>
