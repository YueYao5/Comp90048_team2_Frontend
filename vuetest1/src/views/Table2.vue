<template>
    <div class="fixed-width" data-id="show-table">
        <span class="celltype-wrap">Cell Type</span>

        <table id="eQTL-table" class=" display center-all" style="width:100%">
            <thead>
            <tr>
                <th>GENE</th>
                <th>SNP</th>
                <th>CHR</th>
                <th>BP</th>
                <th>ALLELE 1 (A1)</th>
                <th>ALLELE 2 (A2)</th>
                <th>A2 FREQUENCY ONEK1K</th>
                <th>A2 FREQUENCY HRC</th>
                <th>SPEARMANS RHO</th>
                <th>SUMMARY STATISTICS</th>
                <th>P-VALUE</th>
                <th>FDR</th>
                <th>R SQAURE</th>
                <th>GENOTYPED</th>
                <th>Cell Type</th>
            </tr>
            </thead>

        </table>

    </div>
</template>

<script>
    $(document).ready(function() {
        $('#eQTL-table').DataTable( {
            "ajax": {
                "url":"http://localhost:8181/tableinfo2",

                "dataSrc": ""},


            initComplete: function () {
                this.api().columns([14]).every( function () {
                    var column = this;
                    var table = $('#eQTL-table').DataTable();

                    var select = $('<select id="celltype"><option value=""></option></select>')
                        .insertBefore( $ (table.table().container()) )
                        .on( 'change', function () {
                            $('#eQTL-table').DataTable().draw();
                        } );

                    column.data().unique().sort().each( function ( d, j ) {
                        select.append( '<option value="'+d+'">'+d+'</option>' );
                    } );
                } );
            },


            "oLanguage": {
                "sSearch": "SNP or Gene Search"

            },


            language: {
                searchPlaceholder: "e.g. ARSA or rs8142033"
            },




            "columnDefs": [
                { "title": "GENE", "targets": 0 },
                { "title": "SNP", "targets": 1 },
                { "title": "CHR", "targets": 2 },
                { "title": "BP", "targets": 3 },
                { "title": "ALLELE 1 (A1)", "targets": 4 },
                { "title": "ALLELE 2 (A2)", "targets": 5 },
                { "title": "A2 FREQUENCY ONEK1K", "targets": 6 },
                { "title": "A2 FREQUENCY HRC", "targets": 7 },
                { "title": "SPEARMANS RHO", "targets": 8 },
                { "title": "SUMMARY STATISTICS", "targets": 9 },
                { "title": "P-VALUE", "targets": 10 },
                { "title": "FDR", "targets": 11 },
                { "title": "R SQAURE", "targets": 12 },
                { "title": "GENOTYPED", "targets": 13 },
                { "title": "Cell Type", "targets": 14 ,"visible": false,"searchable": true}




            ],

            "columns": [
                {data:'GENE'},
                {data:'SNP'},
                {data:'CHR'},
                {data:'BP'},
                {data:'A1'},
                {data:'A2'},
                {data:'A2_FREQ_ONEK1K'},
                {data:'A2_FREQ_HRC'},
                {data:'SPEARMANS_RHO'},
                {data:'S_STATISTICS'},
                {data:'P_VALUE'},
                {data:'FDR'},
                {data:'RSQUARE'},
                {data:'GENOTYPED'},
                {data:'Cell_type'}
            ],
            "scrollY": '800px',
            "scrollX": true,
            "scrollCollapse": true,
            "pageLength": 50,
            "bLengthChange": false,

        } );





        $('.dataTables_filter').addClass('pull-left clearfix');



        $.fn.dataTable.ext.search.push(
            function( settings, searchData, index, rowData, counter ) {
                var celltype = $( "#celltype option:selected" ).text();

                // Display the row if both inputs are empty
                if (celltype.length ===0) {
                    return true;
                }

                // Display row if position matches position selection
                hascelltype = true;

                if (celltype !== searchData[14]) {
                    hascelltype = false; //Doesn't match - don't display
                }



                // If either position or office matched then display the row
                return true ? hascelltype : false;
            });

    } );
</script>
