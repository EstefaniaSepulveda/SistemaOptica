<template>
  <div>
    <form @submit.prevent="GuardarImagen()" method="post">
      <input style="width: 30%;" type="file" @change="processFile($event) " />
      <button type="submit">Subir</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Imagen",
  data() {
    return {
      CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dspficfpm/image/upload",
      CLOUDINARY_UPLOAD_PRESET: "gkpqnet5",
      imagen: [],
      type: ["success", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false,
      },
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message: "Archivo subido",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
      });
    },
    processFile(event) {
      this.imagen = event.target.files[0];
      console.log(this.imagen);
    },
    GuardarImagen() {
      let formData = new FormData();
      formData.append("file", this.imagen); // le damos los datos de la imagen luego que se lleno en la funcion processFile()
      formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET); // le damos nuestro preset
      
      //subiendo imagen con fetch
      fetch(this.CLOUDINARY_URL, { method: "POST", body: formData })
        .then((response) => response.json()) //convertimos la respuesta en json
        .then((data) => this.$emit("URL", data.url)) // obtenemos la url de la imagen guardada
        .catch((error) => console.log("ocurrio un error ", error)); //capturamos un posible error
      this.notifyVue("top", "right");
    },
  },
};
</script>

<style>
</style>