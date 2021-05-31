<template>
    <div class="row">
        <div class="col-12">
            <card>
                <div slot="raw-content" class="table-responsive">
                    <paper-table :data="table.data" :columns="table.columns">
                    </paper-table>
                </div>
            </card>
        </div>
    </div>
</template>

<script>
 import{PaperTable } from "@/components";
 const tableColumns = ["Id", "Name", "Salary", "Country", "City"];
 const tableData = [];

 export default {
  components: {
    PaperTable
  },
  data() {
    return {
      table: {
        columns: [...tableColumns],
        data: [...tableData]
      },
    };
  }
};
</script>
<style scoped>

</style>
