<script>
  import { onMount } from "svelte";
  import lightGallery from "lightgallery";
  import lgZoom from "lightgallery/plugins/zoom";
  import lgThumbnail from "lightgallery/plugins/thumbnail";
  
  // Import CSS directly with !important to ensure styles are applied
  import "lightgallery/css/lightgallery.css";
  import "lightgallery/css/lg-zoom.css";
  import "lightgallery/css/lg-thumbnail.css";

  export let images = [];
  export let title = "";
  
  let galleryInitialized = false;

  onMount(() => {
    // Add a small delay to ensure DOM and CSS are fully loaded
    setTimeout(() => {
      const galleryEl = document.getElementById("gallery");
      if (galleryEl && !galleryInitialized) {
        lightGallery(galleryEl, {
          selector: "a",
          plugins: [lgZoom, lgThumbnail],
          thumbnail: true,
          download: false,
          speed: 500,
          // Force CSS loading
          addClass: "lg-css-loaded",
          // Ensure icons are loaded
          loadYouTubeThumbnail: false, // Disable YouTube thumbnails if not used
          preload: 2 // Preload 2 slides
        });
        galleryInitialized = true;
      }
    }, 300);
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

<style>
  /* Force lightgallery icon styles */
  :global(.lg-toolbar .lg-icon),
  :global(.lg-prev),
  :global(.lg-next),
  :global(.lg-close) {
    color: rgba(255, 255, 255, 0.85) !important;
    opacity: 1 !important;
  }
  
  :global(.lg-icon) {
    font-family: 'lg' !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    line-height: 1 !important;
    display: inline-block !important;
  }
</style>