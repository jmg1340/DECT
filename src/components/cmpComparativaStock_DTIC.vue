<template>

	<q-table
		title="DECTs en STOCK"
		:data="arrSTK_DT"
		:columns="columnsSTK"
		:row-key="row => row.id"
		separator="cell"
		dense
		:pagination.sync="pagination"
		:rows-per-page-options="[0]"
	>
		<template v-slot:top-right>
			<q-btn-toggle
				v-model="opcionsSTK"
				push
				glossy
				toggle-color="primary"
				:options="[
					{label: 'Tots', value: 'tots'},
					{label: 'Invent. DTIC Sí', value: 'DticSi'},
					{label: 'Invent. DTIC No', value: 'DticNo'}
				]"
			/>
		</template>
	</q-table>


</template>

<script>
export default {

	data () {
		return {

      pagination: {
      	rowsPerPage: 0
      },


			// Taula Spectralink - DTIC
			opcionsSTK: "tots",
      columnsSTK: [
        {
          name: "nIPEI",
          align: "left",
          label: "IPEI",
          field: "IPEI",
          sortable: true,
          headerClasses: "bg-blue-10 text-white"
        },
        {
          name: "nMODEL",
          align: "left",
          label: "MODEL",
          field: "MODEL",
          sortable: true,
          headerClasses: "bg-blue-10 text-white"
        },
        {
          name: "nPROCEDENCIA",
          align: "left",
          label: "Procedencia",
          field: "PROCEDENCIA",
          sortable: true,
          headerClasses: "bg-blue-10 text-white"
        },
        {
          name: "nDTIC",
          align: "center",
          label: "DTIC",
          field: "DTIC",
          sortable: true,
          headerClasses: "bg-blue-10 text-white"
				},
			]

		}
	},

	computed: {
		arrSTK_DT: function(){
			let arr = this.$store.getters["mDect/arrStock_DTIC"]
			return arr.filter( function( elem) {
				switch (this.opcionsSTK) {
					case "tots":
						return true
						break
					case "DticSi":
						return elem.DTIC == true
						break
					case "DticNo":
						return elem.DTIC == false
						break
				}
			}, this)

		}
	}
}
</script>

<style>

</style>