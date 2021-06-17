<template>
  <div>
    <div>
      <p>Upload an image to Firebase:</p>
      <input type="file" accept="image/*" />
    </div>
    <div>
      <p>
        Progress:
        <progress max="100"></progress>
      </p>
    </div>
    <div>
      <img class="preview" />
      <br />
      <button>Upload</button>
    </div>
  </div>
</template>
<script>
  import firebase from 'firebase';
  export default{
      name: 'Upload',
      data(){
          return{
              imageData: null,
              picture: null,
              uploadValue: 0
          }
      },
      methods: {
          previewImage(event){
              this.uploadValue=0;
              this.picture=null;
              this.imageData=event.target.files[0];
          },

          onUpload(){
              
          }
      }
  }
</script>
