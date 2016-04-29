/**
 * Created by SGT_POWELL on 4/4/2016.
 */
(function(){
    var redirect;



    $('#cta1').on('click',function(){
        event.preventDefault();
        redirect = $(this).attr('href');

        showModal();
    });
    $('#cta2').on('click',function(){
        event.preventDefault();
        redirect = $(this).attr('href');

        showModal();
    });
    $('#cta3').on('click',function(){
        event.preventDefault();
        redirect = $(this).attr('href');

        showModal();
    });
    $('#cta4').on('click',function(){
        event.preventDefault();
        redirect = $(this).attr('href');

        showModal();
    });


    //Show Modal
    var showModal=function(){
        $('#formModal').modal('show');

        $('form').submit(function(){
            GoogleSheetsSubmission();
            setTimeout(confirm,1400);

        });
        $('#mce-error-response').change(function(e){
            console.log($('this').text);
        })


    };

    //Add Subscribers + Redirect if subscription sent
    var confirm = function(){

        if($('#mce-success-response').attr('style')=='display: block;'){
            console.log('Congratz');
            $('#formModal').modal('toggle');
            //opens link in new tab
            //window.open(redirect);
            //opens link in current tab
            window.location.href = redirect
        }else if($('#mce-error-response:contains("is already subscribed")')) {
            console.log("user subscribed");
            $('#mc-current-user').css('display','block');
            $('#mc-current-user').on('click', function(){window.location.href = redirect});
        }else{
            console.log('To many attempts');
        }
    };
    $('.modal'). on('hidden.bs.modal', function(){
        $('#mc-current-user').css('display','none');
    })


})();