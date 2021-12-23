//Movcud sorgular onchange 
$('#comp_id_21011919135800763779').change(function () {
    //getRequestFullInfoById@@
    var fkRequestId = $(this).val()
    getRequestFullInfo4Sorgu(fkRequestId);
})




function getRequestFullInfo4Sorgu(fkRequestId) {
    callApi('211209083257049810895', { fkRequestId: fkRequestId }, true,
        function (res) {
            //alert(JSON.stringify(res));
            $('#comp_id_21101416071603963000').val(res.kv.companyName);
            $('#comp_id_21101416071709667446').val(res.kv.branchName);
            $('#comp_id_21101416071901145474').val(res.kv.directionName);
            $('#comp_id_21011917300807849690').val(res.kv.kaName);
            $('#comp_id_21011917300800784376').val(res.kv.elaqedarShexsAdi);
            $('#comp_id_21011917300701692599').val(res.kv.elaqedarShexsEmail);
            $('#comp_id_21011917300602385813').val(res.kv.elaqedarShexsMobil);
            $('#comp_id_21011917300502396790').val(res.kv.generalDescription);

            var istiqametAdi = res.kv.directionName;
            toggleIstiqametSection(istiqametAdi);
            
        })
}




function toggleIstiqametSection(istiqametAdi) {
    alert('kelbetin=' + istiqametAdi)
    $('#21012001243904921064').show();
    if (istiqametAdi === 'Reklam Outdoor') {
        $('.newMalLayiheSorgusuDirectionSections_indooroutdoor').click();
    } else if (istiqametAdi === 'Reklam Promo') {
        $('.newMalLayiheSorgusuDirectionSections_promo').click();
    } else if (istiqametAdi === 'Reklam Metal Konstruksiya') {
        $('.newMalLayiheSorgusuDirectionSections_kesim').click();
    } else if (istiqametAdi === 'Video') {
        $('.newMalLayiheSorgusuDirectionSections_video').click();
    } else if (istiqametAdi === 'Reklam Mətbəə') {
        alert('salam aye')
        $('.newMalLayiheSorgusuDirectionSections_promo').click();
    } else if (istiqametAdi === 'Reklam İndoor') {
        $('.newMalLayiheSorgusuDirectionSections_indooroutdoor').click();
    } else {
        //hide detalli panel
        $('#21012001243904921064').hide();
    }
}

$('#comp_id_21011309551107028876').change(function () {
    //set mezmun
    $('#comp_id_21100516305404158939').val($(this).find('option:selected').text())
})

//yadda saxla event
$('#comp_id_21010722154305357372').click(function () {
    var data = getGUIDataByStoryCard(this);
    //alert(JSON.stringify(data));
    //api createNewMalLayiheSorgusuNewContainer@
    callApi('21060809575505853932', data, true, function () {
        $('.clearAfterInsert').val('');
        $('._btnTaskListLoad').click();

        Toaster.showMessage("Sorğu müvəffəqiyyətlə daxil edildi");
    });

})