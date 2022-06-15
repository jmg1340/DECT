<template>

	<q-table
		title="Inventari DTIC"
		:data="arrSTK_DT"
		:columns="columns"
		:row-key="row => row.id"
		separator="cell"
		dense
		:rows-per-page-options="[0]"
		:pagination.sync="pagination"
		:filter="filter"
		style="height: 400px"
		virtual-scroll
		
	>
		<!-- template per a la CAPÇALERA de la taula -->
		<template v-slot:top>

			<q-btn label="Exportar CSV" dense noCaps icon-right="archive" color="green-8" @click="exportar" />
			<q-space />
			<div class="row">
				<q-input class="col q-mr-md" borderless dense debounce="300" v-model="filter" filled placeholder="buscar">
					<template v-slot:append>
						<q-icon name="search" />
					</template>
				</q-input>

				<q-btn-toggle class="col"
					v-model="opcions"
					push
					glossy
					noCaps
					toggle-color="primary"
					:options="[
						{label: 'Tots', value: 'tots'},
						{label: 'SrvSPCT Sí', value: 'SPCTSi'},
						{label: 'SrvSPCT No', value: 'SPCTNo'}
					]"
				/>

			</div>

		</template>



		<!-- template per a les CEL·LES de la taula -->
		<template v-slot:body="props">
			<q-tr :props="props" 
						:class="(	props.cols[1].value=='DTIC-DEPOSITO' || props.cols[1].value=='INSTITUTO COSLADA-DEPOSITO MANTENIMIENTO' )?'bg-orange-1 text-black':'bg-white text-black'">
				<q-td
					v-for="col in props.cols"
					:key="col.name"
					:props="props"
					
				>
					{{col.value}}
				</q-td>
			</q-tr>
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
			filter: "",
			opcions: "tots",

			// Taula DTIC - Spectralink
      columns: [
        {
          name: "nPUESTO",
          align: "left",
          label: "PUESTO",
          field: "PUESTO",
          sortable: true,
          headerClasses: "bg-blue-10 text-white",
					headerStyle: 'width: 50px',
        },
        {
          name: "nDENPUESTO",
          align: "left",
          label: "DENPUESTO",
          field: "DENPUESTO",
          sortable: true,
          headerClasses: "bg-blue-10 text-white",
					headerStyle: 'width: 100px',
        },
        {
          name: "nNS",
          align: "left",
          label: "Num.Serie",
          field: "NS",
          sortable: true,
          headerClasses: "bg-blue-10 text-white",
					headerStyle: 'width: 50px',
					classes: 'bg-grey-2 ellipsis',
        },
        {
          name: "nDOSIER",
          align: "center",
          label: "Dosier",
          field: "DOSIER",
          sortable: true,
          headerClasses: "bg-blue-10 text-white",
					headerStyle: 'width: 50px',
        },
        {
          name: "nDESIGNACION",
          align: "center",
          label: "DESIGNACION",
          field: "DESIGNACION",
          sortable: true,
          headerClasses: "bg-blue-10 text-white",
					headerStyle: 'width: 100px',
        },


				{
          name: "nSPCT",
          align: "center",
          label: "SPCT",
          field: "SPCT",
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

			]

		}
	},

	methods: {
		exportar: function(){
      // naive encoding to csv format
      const content = [ this.columns.map(col => wrapCsvValue(col.label)) ].concat(
        this.arrSTK_DT.map(row => this.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'taula_DTIC_SPECTRALINK.csv',
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

		arrSTK_DT: function(){

			let arr = this.$store.getters["mDect/arrDTIC_Spectralink"]
			return arr.filter( function( elem) {
				switch (this.opcions) {
					case "tots":
						return true
						break
					case "SPCTSi":
						return elem.SPCT == true
						break
					case "SPCTNo":
						return elem.SPCT == false
						break
				}
			}, this)

		}
	}
}
</script>

<style>

</style>