<template>
  <b-modal id="editCity" :title="`Editar Ciudad ${row.name}`" hide-footer no-close-on-backdrop>
    <b-container>
      <form role="form">
        <base-input
          label="Nombre De La Ciudad"
          v-model="row.name"
          type="text"
        ></base-input>
        <base-input
          label="Siglas"
          v-model="row.acronym"
          type="text"
        ></base-input>
        <hr />
        <div class="float-right">
          <base-button type="secondary" :block="false" @click="$bvModal.hide('editCity')"
            >Cancelar</base-button
          >
          <base-button type="primary" :block="false" @click="changeCity"
            >Editar</base-button
          >
        </div>
      </form>
    </b-container>
  </b-modal>
</template>
<script>
export default {
  name: "EditCity",
  props: {
    row: {
      type: Object,
      default: () => {},
      isRequired: true,
    },
  },
  data: () => ({
      ver: false,
  }),
  methods: {
    changeCity() {
      let loader = this.$loading.show();
      axios
        .post("api/cities/editCity", this.row)
        .then((res) => {
          loader.hide();
          if (res.data.transaction.status == true) {
            this.$swal({
              icon: "success",
              html: `Se edito exitosamente la ciudad de <b>${res.data.data.name}</b>`,
            });
            this.$emit("refreshData");
            this.$bvModal.hide("editCity");
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
              text: "No se puedo editar la informacion de la ciudad",
            });
        });
    },
  },
};
</script>