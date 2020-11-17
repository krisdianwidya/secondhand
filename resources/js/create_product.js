// Import FilePond
import * as FilePond from 'filepond';

// Import the plugin code
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';

$(document).ready(function(){

    var i = 0;
    $('#btn-add-img').on('click', () => {
        i++;
        $('.clone').addClass(`input-img-${i}`);
        $('.btn-remove').addClass(`remove-input-${i}`);
        let img_input = $('#clone-img-input').html();
        $('.clone').removeClass(`input-img-${i}`);
        $('.btn-remove').removeClass(`remove-input-${i}`);
        $('#img-input').after(img_input);
    });

    $('body').on('click', `.btn-remove`, () => {
        console.log(i);
    });

    // We want to preview images, so we register
// the Image Preview plugin, We also register 
// exif orientation (to correct mobile image
// orientation) and size validation, to prevent
// large files from being added
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginImageEdit
  );
  
  // Select the file input and use 
  // create() to turn it into a pond
  FilePond.create(
    document.querySelector('.filepond')
  );

});