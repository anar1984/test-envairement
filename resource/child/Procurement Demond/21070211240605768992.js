//yadda saxla
$('#comp_id_21070212315003976869').on('click',function () { 
   let data = getGUIDataByStoryCard(this);
       data.apiId='21070710063902129556';//createTaskOfTechizatTelebiNewContainerBackEnd
       callService('serviceIoCallActionApi',data,true,function (res) { 
          $('.in1').hide();
          $('.in2').show();  
          $('.toggle_click_hide').find('.open-modal-hide-modal-btn').click();
         //click task list button  
          $('#comp_id_21010301001801002387').click();
         $('.c3').css('visibility','hidden');
         $('.c4').css('visibility','hidden');
         $('.b1').show();         
         $('.b2').hide();  
         $('._clickListMezmunLoad').click();      
         $('#comp_id_21070612295508549148').val(res.kv.fkActionId);   
         $('#comp_id_21121011331402427890').val(res.kv.fkRequestId);    
         
         $('#21071311011709792324').css('visibility',"hidden")
         
        })
     })

//create
$('#comp_id_21070211350407508994').on('click',function () { 
      let data2 = getGUIDataByStoryCard(this);
      data2.apiId='21070517310900107414';//createTechizatTelebProducts
      callService('serviceIoCallActionApi',data2,false,function (res) { 

         $('.c4').show();
         $('.c3').css('visibility','hidden');
         $('._clickListAll').click();  
         /* clearClass yazilmayib*/
         // $(element).closest('.redirectClass').find('.clearAfterInsertComboBox').val(0);
       })
    })


//list
$('#comp_id_21070212383208037762').click(function () {  
      $('.in2').show();
      let dataInfo = getGUIDataByStoryCard(this);

      //readTechizatTelebiYeniInfo   

    callApi('21070612500509702648', dataInfo, true, function (res) {
      $('#comp_id_21083111533608626934').val(res.kv.telebNovu);
      $('#comp_id_21083111533603085148').val(res.kv.teyinat);
      $('#comp_id_21083111533606389534').val(res.kv.prioritet);
      $('#comp_id_21083111533701749247').val(res.kv.planStartDate);
      $('#comp_id_21083111533703327021').val(res.kv.planFinishDate);
      $('#comp_id_21083111533707647120').val(res.kv.sonTarix);
      $('#comp_id_21083111533708821174').val(res.kv.sonSaat);
      $('#comp_id_21083111533800903478').val(res.kv.fkMesulShex);
      $('#comp_id_21083111533805625243').val(res.kv.qeyd);
      $('#comp_id_21092410142308145003').val(res.kv.fkCompanyId);
      $('#comp_id_21092410142308145003').attr('sa-data-value', res.kv.fkCompanyId);

      //Flial Load

      callApi('21052612305802869426', {
          fkCompanyId: res.kv.fkCompanyId
      }, true, function (res1) {
          var el = $('#comp_id_21092410142309831229');
          el.empty();
          var opt = res1.tbl[0].r;
          for (let i = 0; i < opt.length; i++) {
              const k = opt[i];
              $(el).append($('<option>')
                  .attr("value", k.id)
                  .text(k.branchName1))
          }
          $('#comp_id_21092410142309831229').val(res.kv.fkBranchId);
          $('#comp_id_21092410142309831229').attr('sa-data-value', res.kv.fkBranchId);
      });


      //Istiqamet Load

      callApi('21120610373009979574', {
          fkBranchId: res.kv.fkBranchId
      }, true, function (res2) {
          var el = $('#comp_id_21092410142308966467');
          el.empty();
          var opt = res2.tbl[0].r;
          for (let i = 0; i < opt.length; i++) {
              const k = opt[i];
              $(el).append($('<option>')
                  .attr("value", k.id)
                  .text(k.directionName))
          }
          $('#comp_id_21092410142308966467').val(res.kv.fkDirectionId);
          $('#comp_id_21092410142308966467').attr('sa-data-value', res.kv.fkDirectionId);
      });

      //Request Change

      $('#comp_id_21092716580006418455').val(res.kv.fkRequestId);
      callApi('21092717410300832243', {
          fkRequestId: res.kv.fkRequestId
      }, true, function (res) {

          $('#comp_id_21083111533508513922').val(res.kv.reqeustDescription);
      });

      //Teleb Novu Change

      var telebNovu = res.kv.telebNovu;

      if (telebNovu == 'cari') {
          $('.bt').hide();
          $('.bt').val(' ');
          $('.st').show();
      } else if (telebNovu == 'plan') {
          $('.bt').show();
          $('.st').hide();
          $('.st').val(' ');
      } else {
          $('.bt').hide();
          $('.st').hide();
          $('.bt').val(' ');
          $('.st').val(' ');
      }

  });

     
      $('._clickListTableLoad').click();
   
   })

//table
$('#comp_id_21070212383208037762').click(function () { 
  
   let dataTable = getGUIDataByStoryCard(this);
   //readTechizatTelebProductsList
   callApi('21070612533103319491',dataTable,true,function(res){ 
       var b = res.tbl[0].r;
       console.log(res);
       var table = $('#comp_id_21070714202901886966 tbody');
       table.empty();
       var i =0;
       for(i ; i<b.length;i++){
           const o = b[i];
           var tr = $("<tr>")
                       .addClass('redirectClass') 
                           .append($("<td>")
                            .append(i+1)

                            )
                            .append($("<td>")
                            .append($("<div>")
                            .attr("sa-selectedfield",'jsdbhj')
                            .attr("sa-data-value",o.propertyValue2)
                            .append(o.propertyValue2)
                            ))
                           .append($("<td>")
                           .append($("<div>")
                           .attr("sa-selectedfield",'jsdbhj')
                           .attr("sa-data-value",o.companyName30)
                           .append(o.companyName30)
                           ))
                           .append($("<td>")
                           .append($("<div>")
                           .attr("sa-selectedfield",'jsdbhj')
                           .attr("sa-data-value",o.branchName30)
                           .append(o.branchName30)
                           ))
                           .append($("<td>")
                           .append($("<div>")
                           .attr("sa-selectedfield",'jsdbhj')
                           .attr("sa-data-value",o.directionName30)
                           .append(o.directionName30)
                           ))
                           .append($("<td>")
                           .append($("<div>")
                           .attr("sa-selectedfield",'jsdbhj')
                           .attr("sa-data-value",o.mehsulNovu)
                           .append(o.mehsulNovu)
                           ))
                           .append($("<td>")
                           .append($("<div>")
                           .attr("sa-selectedfield",'ctgn')
                           .attr("sa-data-value",o.categoryName)
                           .append(o.categoryName)
                           ))
                           .append($("<td>")
                           .append($("<div>")
                           .attr("sa-selectedfield",'mlqnm')
                           .attr("sa-data-value",o.malQrupName)
                           .append(o.malQrupName)
                           ))
                           .append($("<td>")
                           .append($("<div>")
                           .attr("sa-selectedfield",'jsdbhj')
                           .attr("sa-data-value",o.productName)
                           .append(o.productName)
                           ))
                           .append($("<td>")
                           .append($("<div>")
                           .attr("sa-selectedfield",'jsdbhj')
                           .attr("sa-data-value",o.miqdar1)
                           .append(o.miqdar1)
                           ))
                           .append($("<td>")
                           .append($("<div>")
                           .attr("sa-selectedfield",'jsdbhj')
                           .attr("sa-data-value",o.unitName)
                           .append(o.unitName)
                           ))
                           .append($("<td>")
                           .append($("<div>")
                           .attr("sa-selectedfield",'jsdbhj')
                           .attr("sa-data-value",o.esasVesaitName)
                           .append(o.esasVesaitName)
                           ))
                           .append($("<td>")
                           .attr("sa-selectedfield",'jsdbhj')
                           .attr("sa-data-value",o.fkRelatedReqeustDescription2)
                           .append(o.fkRelatedReqeustDescription2)
                           )
                           .append($("<td>")
                           .append(o.idp).hide()
                           .attr("sa-selectedfield",'idp')
                           .attr("sa-data-value",o.idp)
                           )
                           .append($("<td>")
                           .append(o.telebId).hide()
                           .attr("sa-selectedfield",'telebId')
                           .attr("sa-data-value",o.telebId)
                           )
                           .append($("<td>")
                           .append(`<a style="font-weight:bold;color:#b5af03;" sa-global-trigger="1" class="component-input-class update" row-no="NaN" pdid="21092412164703552779" id="comp_id_21092412164703552779" sendapitype="" href="#">Dəyiş<br></a>`)
                           )
                           .append($("<td>")
                           .append(`<a style="font-weight:bold;color:#a20119;" class="component-input-class delete" row-no="NaN" pdid="21092412165504907054" id="comp_id_21092412165504907054" sendapitype="" href="#">Sil<br></a>`)
                           )
          table.append(tr);
       }

  })    
})


//Deyis Update Hissesi  //createTechizatTelebiDeyisContainer
$(document).on('click',".update",function () { 
   console.log('asdasd') 
  var idpTable = $(this).closest("tr").find("[sa-selectedField='idp']").attr('sa-data-value');
  console.log(idpTable)
  //readTechizatTelebProductsInfoBackEnd   
  callApi('21121217385009319466',{idp : idpTable},true, function (res) { 
      
     $('#comp_id_21092313591506384955').val(res.kv.productNovuName);
     $('#comp_id_21092313591506384955').attr('sa-data-value',res.kv.productNovuName);

     //Mehsul Novune Gore Mehsul
    
     callApi('21121218244501598133',{productNovuName:res.kv.productNovuName},true, function (res2){

      var el =  $('#comp_id_21071210031106446239')
      el.empty();
      var opt = res2.tbl[0].r; 
      for (let i = 0; i < opt.length; i++) {
          const k = opt[i];
           $(el).append($('<option>')
                             .attr("value",k.id)
                             .text(k.productName)
                             )
      }
     el.val(res.kv.productName007);
     el.attr('sa-data-value',res.kv.productName007);
      el.selectpicker('destroy');
      el.val(res.kv.productName007);
     //$('#comp_id_21071210031106446239').find('[value="' + res.kv.productName007 + '"]').attr('selected','selected');
     el.selectpicker('refresh');
        
    });
     

     
     $('#comp_id_21100312280201216444').val(res.kv.mehsulunTesviri);
     $('#comp_id_21100312280201216444').attr('sa-data-value',res.kv.mehsulunTesviri);
     
     $('#comp_id_21071210031109757988').val(res.kv.vahid);
     $('#comp_id_21071210031109757988').attr('sa-data-value',res.kv.vahid);
     
     $('#comp_id_21071210031109084402').val(res.kv.miqdar);
     $('#comp_id_21071210031109084402').attr('sa-data-value',res.kv.miqdar);
     
     $('#comp_id_21092313591507184064').val(res.kv.categoryName);
     $('#comp_id_21092313591507184064').attr('sa-data-value',res.kv.categoryName);
     
     $('#comp_id_210923135915080510745').val(res.kv.productGroupName);
     $('#comp_id_210923135915080510745').attr('sa-data-value',res.kv.productGroupName);
     
     $('#comp_id_21070714060806087054').val(res.kv.reqeustDescription77);
     $('#comp_id_21070714060806087054').attr('sa-data-value',res.kv.reqeustDescription77);
     
     $('#comp_id_21081216492500151704').val(res.kv.fkEsasVesaitNameId);
     $('#comp_id_21081216492500151704').attr('sa-data-value',res.kv.fkEsasVesaitNameId);
     
     $('#comp_id_21071716100007985834').val(res.kv.fileUrl18);
     $('#comp_id_21071716100007985834').attr('sa-data-value',res.kv.fileUrl18);
     
     $('#comp_id_21070810044307541434').val(res.kv.fileUrl18);
     $('#comp_id_21070810044307541434').attr('sa-data-value',res.kv.fileUrl18);
     
     $('#comp_id_21071311044808613625').val(res.kv.idu);
     $('#comp_id_21071311044808613625').attr('sa-data-value',res.kv.idu);

     $('#21071311011709792324').attr('style'," ")

  })
  
  
  })


// Delete
$(document).on('click',".delete",function () { 
   console.log('asdasd') 
  var data = $(this).closest("tr").find("[sa-selectedField='idp']").attr('sa-data-value');
  console.log(data)
  //deleteCreateTechziatTelebi  
  if(confirm('Bu Məlumat Silinsin?')){

     callApi('21070710170002511689',{idp : data},true, function (res) { 

        $('._clickListAll').click();
    
       })
  }
  
 
})


//Mehsul Novu Change


$('#comp_id_21092313591506384955').change(function(){
  let productNovu = getGUIDataByStoryCard(this);
  callApi('21121218244501598133',productNovu,true, function (res2){

     var el =  $('#comp_id_21071210031106446239')
     el.empty();
     var opt = res2.tbl[0].r; 
     for (let i = 0; i < opt.length; i++) {
         const k = opt[i];
          $(el).append($('<option>')
                            .attr("value",k.id)
                            .text(k.productName)
                            )
     }
       
     el.selectpicker('destroy');
     el.selectpicker('refresh');
   });


})


// Mehsul Change


$('#comp_id_21071210031106446239').change(function(){
  let mehsul = getGUIDataByStoryCard(this);
  callApi('21121518331603102240',{id:mehsul.fkMehsulId},true, function (res2){

      var setBack =  $('#comp_id_21092313591506384955').closest('.redirectClass');

      setBack.find('#comp_id_21092313591507184064').val(res2.kv.productCategory)
      setBack.find('#comp_id_210923135915080510745').val(res2.kv.fkProductGroupId)
      
      var ids = res2.kv.productMainUnit;
      var comp = $('.unit_list');
        comp.find('option').hide();
        comp.find('option[value=""]').show();
        try {
            var idList = ids.split(',');
            console.log(idList);
            for (var i in idList) {
                comp.find('option[value="' + idList[i] + '"]').show();
            }

        } catch (err) {}

   });


})

//Teleb Novu


$('#comp_id_21083113410009441075').change(function(){
   var telebNovu =  $('#comp_id_21083113410009441075').closest('.redirectClass').find('#comp_id_21083113410009441075').val();

         if(telebNovu=='cari'){
                     $('.bt').hide();
                     $('.bt').val(' ');
                     $('.st').show();
         }
         else if(telebNovu=='plan'){
            $('.bt').show();
            $('.st').hide();
            $('.st').val(' ');
         }
         else{
            $('.bt').hide();
            $('.st').hide();
            $('.bt').val(' ');
            $('.st').val(' ');
         }


})