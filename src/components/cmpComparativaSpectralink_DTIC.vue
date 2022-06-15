<template>


	<q-table
		title="DECTs servidor SPECTRALINK"
		:data="arrSPCT_DT"
		:columns="columnsSPCT"
		:filter="filterSPCT"
		:row-key="row => row.id"
		separator="cell"
		dense
		:pagination.sync="pagination"
		:rows-per-page-options="[0]"
	>
		<template v-slot:top-right>
			<q-btn class="q-mr-lg" label="Exportar CSV" dense noCaps icon-right="archive" color="green-8" @click="exportar" />

			<q-input borderless dense debounce="300" color="primary" filled v-model="filterSPCT" class="q-mr-sm">
				<template v-slot:append>
					<q-icon name="search" />
				</template>
			</q-input>
			
			<q-btn-toggle
				v-model="opcionsSPCT"
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
import { exportFile } from 'quasar'

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}


export default {

	data () {
		return {

      pagination: {
      	rowsPerPage: 0
      },


			// Taula Spectralink - DTIC
			opcionsSPCT: "tots",
			filterSPCT: "",
			columnsSPCT: [
        {
          name: "nIPEI",
          align: "left",
          label: "IPEI",
          field: "IPEI",
          sortable: true,
          headerClasses: "bg-blue-10 text-white"
        },
        {
          name: "nNAME",
          align: "left",
          label: "NAME",
          field: "NAME",
          sortable: true,
          headerClasses: "bg-blue-10 text-white"
        },
        {
          name: "nSTANDBYTEXT",
          align: "left",
          label: "Stand By Text",
          field: "STANDBYTEXT",
          sortable: true,
          headerClasses: "bg-blue-10 text-white"
        },
        {
          name: "nSIPUSERNAME",
          align: "center",
          label: "SIP User Name",
          field: "SIPUSERNAME",
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
			],



		}
	},

	methods: {
		exportar: function(){
      // naive encoding to csv format
      const content = [ this.columnsSPCT.map(col => wrapCsvValue(col.label)) ].concat(
        this.arrSPCT_DT.map(row => this.columnsSPCT.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'taula_SPECTRALINK_DTIC.csv',
        content,
        'text/csv'
      )

      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
			
		}
	},


	computed: {
		arrSPCT_DT: function(){
			let arr = this.$store.getters["mDect/arrSpectralink_DTIC"]
			return arr.filter( function( elem) {
				switch (this.opcionsSPCT) {
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
		},
	}
}
</script>

<style>

</style>