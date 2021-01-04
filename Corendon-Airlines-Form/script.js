 
$(function() { 
            
             
 $("#goingdate").datepicker();
 $("#returndate").datepicker();

$("#loginbtn").click(function(){
   
    $(".Customerİnformation div").show();
    
   $(".Name").html($(' #name').val());
   $(".Surname").html($(' #surname').val());
   $(".phone").html($(' #Phone').val());
   $(".email").html($('#email').val());
   $(".pnr").html($('#PNR').val());
   $(".Departure").html($('#departure').val());
   $(".Arrival").html($('#arrival').val());
   $(".FlightNum").html($('#flightnum').val());
   $(".GoingDate").html($('#goingdate').val());
   $(".Departure2").html($('#departure2').val());
   $(".Arrival2").html($('#arrival2').val());
   $(".FlightNum2").html($('#flightnum2').val());
   $(".ReturnDate").html($('#returndate').val());
   $(".message").html($('#Message').val());


  

   
















//   $( ".Customerİnformation div" ).html( "<h4>Müşteri İletişim Formu Bilgileriniz</h4><div >İsim: "+Name +" </div><div>Soyisim: "+Surname+" </div><div >Telefon: "+phone +" </div><div >Email: "+email +" </div><div >PNR: "+pnr +" </div><hr><h4>Gidiş Uçuşu Bilgileriniz</h4><div >Hareket: "+Departure +" </div><div>Varış: "+Arrival +"</div><div>Uçuş Numarsı: "+FlightNum +"</div><div>Gidiş Tarihi: "+GoingDate+"</div><hr><h4>Dönüş Uçuşu Bilgileriniz</h4><div>Hareket: "+Departure2 +"</div><div>Varış: "+Arrival2 +"</div><div>Uçuş Numarası: "+FlightNum2 +"</div><div>Dönüş Tarihi: "+ReturnDate+"</div><div>Mesajınız: "+message+"</div>" );
   
});





            $("input[name='radio']").on("change",function(){
                    if($("#radio1").prop("checked")){
                        $(".informationCategory").show();
                        $(".extracategory").hide();
                    }
                    else {
                        $(".extracategory").show();
                        $(".informationCategory").hide();
                    }
                   
              });  
             

            $("input[name='radio3']").on("change",function(){
                    if($("#radio3").prop("checked")){                       
                        $(".return").show();
            }
                   else if($("#radio4").prop("checked")){                       
                       $(".return").hide();
            }

           
            }); 
 
  $("input[name='radio5']").on("change",function(){
    if($("#radio5").prop("checked")){
        $(".flight").show();
        $(".extra").hide();
        $(".operation").hide();
        $(".proposal").hide();
    }
    else if($("#radio6").prop("checked")){
        $(".flight").hide();
        $(".extra").show();
        $(".operation").hide();
        $(".proposal").hide();

    }
    else if($("#radio7").prop("checked")){
        $(".flight").hide();
        $(".extra").hide();
        $(".operation").show();
        $(".proposal").hide();
    }
    else if($("#radio8").prop("checked")){
        $(".flight").hide(),
        $(".extra").hide();
        $(".operation").hide();
        $(".proposal").show();
    }

}); 



  
        });
      
            
