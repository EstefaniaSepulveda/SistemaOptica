<template>
  <div>
    <title>Registro</title>
    <div class="divLogin">
      <div class="container">
        <div class="divcont">
          <h3>{{ title }}</h3>
          <form @submit.prevent="sendForm()">
            <input
              type="email"
              :class="{ error: validarCorreo }"
              placeholder="Correo"
              v-model="form.correo"
            />
            <input
              type="password"
              v-if="form.type != 2"
              :class="{ error: validarContraseña }"
              placeholder="Contraseña"
              v-model="form.contraseña"
            />
            <input
              type="password"
              v-if="form.type == 1"
              :class="{ error: validarContraseña }"
              placeholder="Repetir Contraseña"
              v-model="form.repetirContraseña"
            />
            <input
              type="telefono"
              v-if="form.type == 1"
              :class="{ error: validarTeléfono }"
              placeholder="Teléfono"
              v-model="form.telefono"
            />
            <input
              type="nombre"
              v-if="form.type == 1"
              :class="{ error: validarNombre }"
              placeholder="Nombre"
              v-model="form.nombre"
            />
            <input
              type="apellidoP"
              v-if="form.type == 1"
              :class="{ error: validarNombre }"
              placeholder="Apellido Paterno"
              v-model="form.apellidoP"
            />
            <input
              type="apellidoM"
              v-if="form.type == 1"
              :class="{ error: validarNombre }"
              placeholder="Apellido Materno"
              v-model="form.apellidoM"
            />

            <!--<button value="ver" id="ver" onclick="ver(this)">Ver</button>-->
            <button value="1" id="botonInicio" v-if="form.type == 0">
              Iniciar Sesión
            </button>
            <button value="1" id="botonInicio" v-if="form.type == 1">
              Registrar
            </button>
            <button value="1" id="botonInicio" v-if="form.type == 2">
              Enviar
            </button>

            <a
              href="javascript:void(0)"
              @click="form.type = 2"
              v-if="form.type != 2"
            >
              ¿Olvidó su contraseña?</a
            >
            <a
              href="javascript:void(0)"
              @click="form.type = 1"
              v-if="form.type != 1"
            >
              Regístrate</a
            >
            <a
              href="javascript:void(0)"
              @click="form.type = 0"
              v-if="form.type != 0"
            >
              Iniciar Sesión</a
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from "@/logic/auth";
export default {
  data() {
    return {
      form: {
        type: 0 /*0 = login, 1 = registro, 2 = reiniciar contraseña*/,
        correo: "",
        contraseña: "",
        repetirContraseña: "",
        telefono: "",
      },
    };
  },

  methods: {
    sendForm() {
      if (this.validarType()) {
        console.log(this.form);
      }
    },

    validarType() {
      if (
        this.form.type == 0 &&
        !this.validarCorreo &&
        !this.validarContraseña
      ) {
        return true;
      } else if (
        this.form.type == 1 &&
        !this.validarCorreo &&
        !this.validarRepetirContraseña
      ) {
        return true;
      } else if (this.form.type == 2 && !this.validarCorreo) {
        return true;
      }
      return false;
    },
  },
  computed: {
    validarCorreo() {
      var exp =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (exp.test(this.form.correo)) {
        return false;
      } else {
        return true;
      }
    },
    validarContraseña() {
      var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
      if (exp.test(this.form.contraseña)) {
        return false;
      } else {
        return true;
      }
    },

    validarRepetirContraseña() {
      if (this.form.contraseña == this.form.repetirContraseña) {
        return false;
      } else {
        return true;
      }
    },

    validarTeléfono() {
      var exp = /\x2b[0-9]+/;
      if (exp.test(this.form.telefono)) {
        return false;
      } else {
        return true;
      }
    },

    validarNombre() {
      if (this.form.nombre == "") {
        alert("Llenar campos vacios");
        false;
      } else {
        true;
      }
    },

    title() {
      return this.form.type == 0
        ? "Login"
        : this.form.type == 1
        ? "Registro"
        : "Recuperar Contraseña";
    },
  },
};
</script>

<style scoped>
html,
body {
  padding: 0px;
  margin: 0px;
  height: 100vh;
  width: 100%;
  font-family: "Roboto";
  color: #333;
}
/*fondo*/
.divLogin {
  background-size: cover;
  background-position: center center;
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
}
/*cuadro de inicio de sesion*/
.divLogin .container {
  width: 100%;
  text-align: center;
}

/*bar de login*/
.divLogin .container .divcont {
  max-width: 300px;
  width: 100%;
  background: rgba(27, 76, 85, 0.6);
  padding: 30px;
  border-radius: 18px;
  display: inline-block;
  color: #fff;
}

/*linea roja de validacion de datos de inicio de sesion*/
.divLogin .container .divcont h3 {
  margin-top: 0%;
}

/*poner linea roja cuando se validan datos*/
.divLogin .container .divcont input.error {
  border-bottom: 3px solid red;
}

/*estilo cuadros inicio sesion*/
.divLogin .container .divcont input {
  margin: 0px;
  border: 0px;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 15px;
}

/*boton iniciar sesión*/
.divLogin .container .divcont button {
  margin: 0px;
  border: 0px;
  display: block;
  margin: auto;
  padding: 10px 30px;
  background: rgb(216, 97, 76);
  color: #fff;
  border-radius: 10%;
  margin-bottom: 10px;
}

/* "¿olvidó contraseña?, regístrate*/
.divLogin .container .divcont a {
  font-size: 15px;
  margin-right: 10px;
  color: white;
}
</style>