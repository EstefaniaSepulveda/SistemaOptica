<template>
  <div class="divLogin">
    <div class="container">
      <div class="divcont">
        <h3>Recuperar Contraseña</h3>
        <form @submit.prevent="sendEmail">
          <input
            type="email"
            placeholder="Correo Electronico*"
            v-model="correo"
          />
          <a href="#/Registro">Registrar     </a>
          <a href="#/Login">    Iniciar Sesión</a>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      correo: "",
    };
  },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_m2ziz8r",
          "template_izxx3w5",
          e.target,
          "user_A14nuidhYY0gIYTXE1G8P"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>