<template>
  <b-modal id="createCity" :static="true" :lazy="true" title="Crear Ciudad" hide-footer no-close-on-backdrop>
    <b-container>
      <form role="form">
        <base-input
          label="Nombre De La Ciudad"
          v-model="city.name"
          type="text"
        ></base-input>
        <base-input
          label="Siglas"
          v-model="city.acronym"
          type="text"
        ></base-input>
        <hr />
        <div class="float-right">
          <base-button type="secondary" :block="false" @click="$bvModal.hide('createCity')"
            >Cancelar</base-button
          >
          <base-button type="primary" :block="false" @click="createCity"
            >Editar</base-button
          >
        </div>
      </form>
    </b-container>
  </b-modal>
</template>
<script>
export default {
  name: "CreateCity",
  data: () => ({
    city: {},
  }),
  methods: {
    createCity() {
      let loader = this.$loading.show();
      axios
        .post("api/cities/createCity", this.city)
        .then((res) => {
          loader.hide();
          if (res.data.transaction.status == true) {
            this.$bvModal.hide("createCity");
            this.$swal({
              icon: "success",
              html: `Se creo exitosamente la ciudad de <b>${res.data.data.name}</b>`,
            });
            this.$emit("refreshData");
          } else {
            this.$swal({
              icon: "success",
              text: res.data.message.content,
            });
          }
        })
        .catch((err) => {
          loader.hide();
          console.log(err);
          this.$swal({
            icon: "error",
            text: "No se puedo crear la informacion de la ciudad",
          });
        });
    },
  },
};
</script>