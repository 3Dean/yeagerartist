import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

lightGallery(document.getElementById('gallery'), {
  selector: 'a',
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
  thumbnail: true,
  download: false,
});
