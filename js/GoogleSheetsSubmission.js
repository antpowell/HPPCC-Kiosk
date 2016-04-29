/**
 * Created by SGT_POWELL on 1/31/2016.
 */
/*
 *this script will active the modal on the click of the cta
 * gather the data entered by the user and store it in a google
 * sheets spreadsheet.Then it will redirect to the href of the cta clicked.
 */

(function () {
    /*Create variables to capture the href address, the Data the user enters, and a timer that will give the page time to
     * send the captured data to the Google Form response sheet. Without timer user data seems not to post.*/

    var data = {};

    window.GoogleSheetsSubmission = function(){
        //Get data from modal form
            var fName = $.trim($('#mce-EMAIL').val());
            var lName = $.trim($('#mce-LNAME').val());
            var eAddress = $.trim($('#mce-EMAIL').val());;

            //Gather User Data
            data = {
                formkey: "17zWfo4sS5_uKitrrwoLCda7fxwvYm9kHjFBBJmGmUhA",
                firstName: fName,
                lastName: lName,
                emailAddress: eAddress
            };



            //Show Collected Data
            console.log("Data: " + data.firstName + " " + data.lastName + " " + data.emailAddress);
            postContactToGoogle(data);

    };


    /*--------------------------------------------------------------------------------------------------------------------
     Sheets Hack THANKS to forum post: https://wiki.base22.com/pages/viewpage.action?pageId=72942000
     --------------------------------------------------------------------------------------------------------------------*/

    function postContactToGoogle(formData) {
        $.ajax({
            url: "https://docs.google.com/forms/d/17zWfo4sS5_uKitrrwoLCda7fxwvYm9kHjFBBJmGmUhA/formResponse",
            data: {
                "entry.1490454186": formData.firstName,
                "entry.794182634": formData.lastName,
                "entry.1472414226": formData.emailAddress
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {

                    ////Clean up for formData.firstName;
                    //$('#firstName').val("");
                    ////Clean up for formData.lastName;
                    //$('#lastName').val("");
                    ////Clean up for formData.emailAddress;
                    //$('#email').val("");
                    ////Success message
                    //console.log("status:0 Success!!");
                    ////close modal after success
                    //$('#formModal').modal('toggle');
                    ////window.location.href = $('#form-modal').attr('href');
                },
                200: function () {
                    ////Clean up for formData.firstName;
                    //$('#firstName').val("");
                    ////Clean up for formData.lastName;
                    //$('#lastName').val("");
                    ////Clean up for formData.emailAddress;
                    //$('#email').val("");
                    ////Success message
                    //console.log("status:200 Success!!");
                    ////close modal after success
                    //$('#formModal').modal('toggle');
                }
            }

        });


    }


})();
