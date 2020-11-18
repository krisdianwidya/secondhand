// // Import FilePond
// import * as FilePond from 'filepond';

const { event } = require("jquery");

// // Import the plugin code
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
// import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

$(document).ready(function(){

  var i = 1;

  $('#btn-add').on('click', (event) =>{
    event.preventDefault();
    $('.input-increment').after($('.img-fil').html());
    i++;
  });

  $('#btn-min').on('click', (event) => {
    event.preventDefault();
    if(i > 1){
      $(`.file-input div:nth-child(${i})`).remove();
      i--;
    }
  })

    

//     // We want to preview images, so we register
// // the Image Preview plugin, We also register 
// // exif orientation (to correct mobile image
// // orientation) and size validation, to prevent
// // large files from being added
// FilePond.registerPlugin(
//     FilePondPluginImagePreview,
//     FilePondPluginImageExifOrientation,
//     FilePondPluginImageEdit
//   );
  
//   // Select the file input and use 
//   // create() to turn it into a pond
//   FilePond.create(
//     document.querySelector('input[type="file"]')
//   );

//   // $('#btn-sell').on('click', () => {
//   //   event.preventDefault();
//   //   console.log('klik sell');

//   //   // FilePond.setOptions({
//   //   //   server: {
//   //   //       url: '/products',
//   //   //       method: 'POST',
//   //   //       headers: {
//   //   //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//   //   //       }
//   //   //   }
//   //   // });
//   // });
});