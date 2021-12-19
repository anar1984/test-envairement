var fkOnwerId = '555555';

//checklist title change event 
$('#comp_id_21121714153802153400').change(function () {

    $('#comp_id_21121714154704092880').click();
})




//Add new checklist item event
$('#comp_id_21121714154704092880').click(function () {
    var title = $('#comp_id_21121714153802153400').val();

    //addNewCheckListItem

    callApi('21121713570309449461', { title: title, fkOwnerId: fkOnwerId }, true,
        function (res) {
            $('#comp_id_21121714153802153400').val('');
            loader(fkOnwerId);
        })
})

//loaderEvent
$('#comp_id_21121714250708915439').click(function () {
    loader(fkOnwerId)
})

//loader function
function loader(fkOwnerId) {
    //getChecklistByOwnerId
    callApi('21121714131601512424', { fkOwnerId: fkOwnerId }, true,
        function (res) {
            // alert(JSON.stringify(res))
            var table = $('table#comp_id_21121714163409917101');
            var tbody = table.find('tbody');
            tbody.html('');
            var obj = res.tbl[0].r;
            for (var i = 0; i < obj.length; i++) {
                var o = obj[i];
                var tr = $('<tr>');
                tr.append($('<td>').text((i + 1)))
                    .append($('<td>')
                        .append($('<input type="checkbox">')
                            .attr('pid', o.id)
                            .attr("checked", o.isChecked === '1')
                            .addClass('checklist-item-toggle')))
                    .append($('<td>')
                        .append($('<textarea>')
                            .attr('pid', o.id)
                            .addClass('checklist-item-zad')
                            .attr('rows', 1).val(o.title)))
                    .append($('<td>')
                        .append($('<img>').attr('src', fileUrl(o.userImage))
                            .attr("width", "40px"))
                        .append($('<span>').text(o.userName)))
                    .append($('<td>').text(Utility.convertDate(o.createdDate)))
                    .append($('<td>').text(Utility.convertTime(o.createdTime)))
                    .append($('<td>')
                        .append($('<a href="#">')
                            .attr('pid', o.id)
                            .addClass('checklist-item-delete')
                            .click(function () {

                                if (!confirm("Məlumatın silinməsinə əminsiz?")) {
                                    return;
                                }
                                //deletecheckListitem
                                var id = $(this).attr('pid');
                                var val = $(this).val();

                                callApi('21121714100203705645', { fkChecklistId: id, title: val }, true,
                                    function () {
                                        loader(fkOnwerId);
                                    })
                            })
                            .text('Sil')))
                    ;

                tbody.append(tr);

            }
        })
}

//update checklist item title
$(document).on('change', '.checklist-item-zad', function () {
    //updateChecklistItemTitle
    var id = $(this).attr('pid');
    var val = $(this).val();
    callApi('21121714072605535941', { fkChecklistId: id, title: val })
})


//toggle checklist item title
$(document).on('change', '.checklist-item-toggle', function () {
    //updateChecklistItemTitle
    var id = $(this).attr('pid');
    var val = $(this).is(':checked') ? "1" : "0";
    // alert(id + '     ' + val);
    callApi('21121714031708916446', { fkChecklistId: id, isChecked: val })

})

$(document).on('click', '.sa-onloadclick', function () {
    loader(fkOnwerId);
});