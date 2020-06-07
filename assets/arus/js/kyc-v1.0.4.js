
var email_valid = null;

var validations = {
    validate_step_1: function () {
        var email = $('#email').val();
        var email_repeat = $('#email_repeat').val();
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        // var ethwallet = $('#ethwallet').val();
        // var eth_investment = $('#eth_investment').val();
        var errors = 0;
        $('.is-invalid').removeClass('is-invalid');

        if ($.trim(email).length < 2 && !isEmail($.trim(email))) {
            // $('#email').addClass('is-invalid');
            addError($('#email').closest('.form__part'), 'Please fill email field');
            errors++;
        }

        email_valid = check_email_address();
        if (email_valid.error.error) {
            $('#email').addClass('is-invalid');
            addError($('#email').closest('.form__part'), email_valid.body.email);
            errors++;
        } else if(email_repeat !== email){
            $('#email_repeat').addClass('is-invalid');
            addError($('#email_repeat').closest('.form__part'), 'Please fill email repeat field');
            errors++;
        }



        if ($.trim(firstname).length < 2) {
            $('#firstname').addClass('is-invalid');
            addError($('#firstname').closest('.form__part'), 'Please fill first name field');
            errors++;
        }

        if ($.trim(lastname).length < 2) {
            $('#lastname').addClass('is-invalid');
            addError($('#lastname').closest('.form__part'), 'Please fill last name field');
            errors++;
        }

/*        if ($.trim(ethwallet).length < 2) {
            $('#ethwallet').addClass('is-invalid');
            addError($('#ethwallet').closest('.form__part'), 'Please fill this field');
            errors++;
        }*/

/*        if (validate_wallet_address() === false) {
            $('#ethwallet').addClass('is-invalid');
            addError($('#ethwallet').closest('.form__part'), 'Please enter valid Wallet Address');
            errors++;
        }*/



        if (errors < 1) {
            return true;
        } else {
            return false;
        }
    },
    validate_step_2: function () {

        var id_type = $('#id_type').val();
        var id_front_file = $('#id_front_file').val();
        var id_back_file = $('#id_back_file').val();

        // alert($('#id_front_file').hasExtension(_validFileExtensions));

        console.log(id_type);
        console.log(id_front_file);
        console.log(id_back_file);

        var errors = 0;
        $('.is-invalid').removeClass('is-invalid');

        if ($.trim(id_type).length < 2) {
            $('#id_type').addClass('is-invalid');
            addError($('#id_type').closest('.form__part'), 'Please fill this field');
            errors++;
        }

        if ($.trim(id_front_file).length < 2) {
            $('#id_front_file').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#id_front_file').closest('.form__part'), 'Please upload your file here', 'file');
            errors++;
        } else if (!$('#id_front_file').hasExtension(_validFileExtensions)) {
            $('#id_front_file').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#id_front_file').closest('.form__part'), 'Invalid file format', 'file');
            errors++;
        } else if (!$('#id_front_file').hasMaxSize()) {
            $('#id_front_file').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#id_front_file').closest('.form__part'), "The document size has to be below 9 MB", 'file');
            errors++;
        }

        if ($.trim(id_back_file).length < 2 && $('#id_back_file').prop('required')) {
            $('#id_back_file').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#id_back_file').closest('.form__part'), 'Please upload your file here', 'file');
            errors++;
        } else if (!$('#id_back_file').hasExtension(_validFileExtensions) && $('#id_back_file').prop('required')) {
            $('#id_back_file').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#id_back_file').closest('.form__part'), 'Invalid file format', 'file');
            errors++;
        } else if (!$('#id_back_file').hasMaxSize() && $('#id_back_file').prop('required')) {
            $('#id_back_file').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#id_back_file').closest('.form__part'), "The document size has to be below 9 MB", 'file');
            errors++;
        }
        console.log('err'+errors);

        if (errors < 1) {
            return true;
        } else {
            return false;
        }
    },
    validate_step_3: function () {
        var photo = $('#photo').val();
        var utility_bill = $('#utility_bill').val();

        var errors = 0;
        $('.is-invalid').removeClass('is-invalid');

        if ($.trim(photo).length < 2) {
            $('#photo').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#photo').closest('.form__part'), 'Please upload your file here', 'file');
            errors++;
        } else if (!$('#photo').hasExtension(_validFileExtensions)) {
            $('#photo').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#photo').closest('.form__part'), 'Invalid file format', 'file');
            errors++;
        } else if (!$('#photo').hasMaxSize()) {
            $('#photo').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#photo').closest('.form__part'), "The document size has to be below 9 MB", 'file');
            errors++;
        }


        if ($.trim(utility_bill).length < 2) {
            $('#utility_bill').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#utility_bill').closest('.form__part'), 'Please upload your file here', 'file');
            errors++;
        } else if (!$('#utility_bill').hasExtension(_validFileExtensions)) {
            $('#utility_bill').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#utility_bill').closest('.form__part'), 'Invalid file format', 'file');
            errors++;
        } else if (!$('#utility_bill').hasMaxSize()) {
            $('#utility_bill').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#utility_bill').closest('.form__part'), "The document size has to be below 9 MB", 'file');
            errors++;
        }


        if (errors < 1) {
            return true;
        } else {
            return false;
        }
    },
    validate_step_4: function () {
        var errors = 0;
        $('.is-invalid').removeClass('is-invalid');
        $('#country').closest('.form__part').find('.form__error-text').remove();

        var additional = $('#autocomplete').val();
        var street = $('#route').val();
        var city = $('#locality').val();
        var state = $('#administrative_area_level_1').val();
        var zip = $('#postal_code').val();
        var country = $('#country').val();
        var country_code = $('#country_code').val();

        if ($.trim(country).length < 2) {
            $('#country').addClass('is-invalid');
            addError($('#country').closest('.form__part'), 'Please fill Country field');
            errors++;
        }

        if ($.trim(additional).length < 2) {
            $('#autocomplete').addClass('is-invalid');
            addError($('#autocomplete').closest('.form__part'), 'Please fill Address field');
            errors++;
        }

        if (errors < 1) {
            return true;
        } else {
            return false;
        }
    },
    validate_step_5: function () {
        var errors = 0;
        $('.error').removeClass('is-invalid');

        if (!check_term()) {
            $('.if-already-scroll').addClass('is-invalid');
            errors++;
        }


        if (errors < 1) {
            return true;
        } else {
            return false;
        }
    }
};

var terms_readed = false;




function addError(block, text) {
    console.log("addError");

    if (!$(block).find('.invalid-feedback').length > 0) {
        $(block).closest('.form__part').find('.valid-feedback').remove();
        $(block).closest('.form__part').find('input').addClass('is-invalid');
        $(block).find('.form__type-holder').append(' <div class="invalid-feedback"> ' + text + ' </div> ');
    }
}

function validationSuccess(elem) {
    console.log("validationSuccess");
    if ($(elem).hasClass('number')) {
        $(elem).closest('.form__part').find('.invalid-feedback').remove();
    } else {
        $(elem).closest('.form__part').addClass('validated');
        $(elem).closest('.form__part').find('input').addClass('is-valid');
        $(elem).find('.form__type-holder').append(' <div class="valid-feedback"> Looks good! </div> ');
        $(elem).closest('.form__part').find('.invalid-feedback').remove();
    }
}

function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function check_email_address(){
    // alert("check_email_address");

    var email_check = $.ajax({
        type: "POST",
        dataType: 'json',
        async: false,
        url: service_url,
        data: '&email='+$('#email').val() + '&url_key=check_email_address',
        success: function (data) {
            console.log(data);
            var inpObj = document.getElementById("email");

            if (data.error.error) {
                inpObj.setCustomValidity(data.body.email);
                return 0;
            } else {
                inpObj.setCustomValidity('');
                return 1;
            }

        }
    });

    // alert(email_check.responseText);

    return JSON.parse(email_check.responseText);
}



function validate_wallet_address() {
    var val = $("#ethwallet").val();
    val = val.trim();
    var inpObj = document.getElementById("ethwallet");

    console.log(val);
    console.log(val.length);

    if(!val) {
        console.log("no val");
        $('#ethwallet').closest('.form__part').removeClass('validated');

        $('#ethwallet').addClass('is-invalid');
        $("#ethwallet").data('check','invalid');
        //inpObj.setCustomValidity('Please enter valid Wallet Address');
        return false;
    }

    if(!val.startsWith("0x")) {
        console.log("no 0x");
        $('#ethwallet').closest('.form__part').removeClass('validated');
        $('#ethwallet').addClass('is-invalid');
        $("#ethwallet").data('check','invalid');
        //inpObj.setCustomValidity('Please enter valid Wallet Address');
        return false;
    }

    // console.log(val.toLowerCase());
    if(42 !== val.length) {
        console.log("no 42");
        $('#ethwallet').closest('.form__part').removeClass('validated');
        $('#ethwallet').addClass('is-invalid');
        $("#ethwallet").data('check','invalid');
        //inpObj.setCustomValidity('Please enter valid Wallet Address');
        return false;
    }

    console.log("ok");
    //inpObj.setCustomValidity('');

    $("#ethwallet").data('check','valid');

    return true;
}


/**
 * REGISTER
 */
$(function () {

     jQuery('.button_complete').click(function() {

         if (check_term()) {

             var i;
             for (i = 1; i < 5; i++) {
                 // alert("Checking step" + i);
                 stepcheck(i);
                 // alert("Che<cked step" + i);
             }

             // alert("Form will submit");

             jQuery('.terms1').addClass('no-display');
             jQuery('.terms2').removeClass('no-display');
             jQuery('.logo-img').addClass('display-yes');

             $('.button_complete').prop('disabled', true);
             $("#form_register").submit();
             // alert("Form submitted");

         }else{
             alert("failed");
             $('.button_complete').prop('disabled', false);

         }



    });






    $('#id_type').change(function(){
        if($(this).val() == 'national_id'){ //
             	   jQuery('.form-color2 .first-img').addClass('no-show');
				   jQuery('.form-color2 .second-img').removeClass('no-show');
				   jQuery('.form-color2 .trd-img').addClass('no-show');
				   jQuery('.form-color2 .file-hide').removeClass('no-show');  
				   jQuery('.form-color2 .file-hide2').addClass('no-show'); 
				   jQuery('.form-color2').addClass('f2act');

        }
        if($(this).val() == 'passport'){ //
                   jQuery('.form-color2 .first-img').removeClass('no-show');
				   jQuery('.form-color2 .second-img').addClass('no-show');
				   jQuery('.form-color2 .file-hide').addClass('no-show');  
				   jQuery('.form-color2 .trd-img').addClass('no-show');
				   jQuery('.form-color2').removeClass('f2act');
				   jQuery('.form-color2 .file-hide2').addClass('no-show'); 

        }
           if($(this).val() == 'drivers_license'){ // or this.value == 'volvo'
         jQuery('.form-color2 .first-img').addClass('no-show');
				   jQuery('.form-color2 .second-img').addClass('no-show');
				   jQuery('.form-color2 .trd-img').removeClass('no-show');			   
				   jQuery('.form-color2 .file-hide').addClass('no-show'); 
				   jQuery('.form-color2 .file-hide2').removeClass('no-show');  
				   jQuery('.form-color2').addClass('f2act');
				   
		 }
    });


    $('#agree').change(function () {
        check_term();
    });
    $('#not_usa').change(function () {
        check_term();
    });
    $('#age_confirm').change(function () {
        check_term();
    });


    $("#form_register").submit(function (e) {

        $('.error-container').remove();
        $('.message-container').html('').hide();

        $form = $(this);
        var url = $form.attr('action');
        console.log(url);
        e.preventDefault();

        console.log('form submitted');
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: service_url,
            data: $form.serialize() + '&url_key=check_email_address',
            success: function (data) {
                console.log(data);

                if (data.error.error) {
                    $('<small class="alert-danger error-container">' + data.body.email + '</small>').insertAfter('#email');
                    var error = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Opps!</strong> <br />' + data.body.email + '</div>';
                    $('.message-container').html(error).show();
                    $('.button_complete').prop('disabled', false);

                } else {
                    fileUploader();
                }

                $('html,body').animate({scrollTop: 0}, 'slow');
            }
        });
    });

});


function check_term() {

    $('#agree').next('.form-check-label').css('color','');
    $('#not_usa').next('.form-check-label').css('color','');
    $('#age_confirm').next('.form-check-label').css('color','');


    // $('.btn-next').removeClass('button_point');


    if (
        $('#agree').is(":checked")
        && $('#not_usa').is(":checked")
        && $('#age_confirm').is(":checked")
    ) {
        terms_readed = true;
        // $('.if-already-scroll').css('opacity', 0);
        // $('.if-already-scroll').addClass('active');
        // $('.btn-next').addClass('button_point');

        return true;
    }



    if (
        !$('#agree').is(":checked")
        || !$('#not_usa').is(":checked")
        || !$('#age_confirm').is(":checked")
    ) {
        terms_readed = false;

        return false;
    }

}




function stepcheck(s) {
    console.log("#########S::: "+s);

    var validate_name = 'validate_step_'+s;

    console.log("#########V::: "+validate_name);

    var current_form_content = $('*[data-step="'+s+'"]');

    // console.log(current_form_content.find('.btn-next').html());

    if( step_checker[validate_name]() ) {
        current_form_content.find('.btn-next').prop('disabled', false);
    }else{
        current_form_content.find('.btn-next').prop('disabled', true);
    }
}




$(function () {

    $('.form__part').find('input').on('keyup', $('.form__part').find('input'), function () {
        var currentStep = $(this).closest('.page__form').data('step');
        stepcheck(currentStep);
    });


    $('.form__part').find('input').on('change', function () {


        var value = $.trim($(this).val());
        var currentStep = $(this).closest('.page__form').data('step');
        stepcheck(currentStep);

        console.log(value);
        console.log(currentStep);

        if ($(this).hasClass('email')) {
            if (value.length > 2 && isEmail(value)) {

                email_valid = check_email_address();
                if (email_valid.error.error) {
                    $('#email').addClass('is-invalid');
                    addError($('#email').closest('.form__part'), email_valid.body.email);
                } else if(value !== $('#email_repeat').val()) {
                    $('#email_repeat').addClass('is-invalid');
                    addError($('#email_repeat').closest('.form__part'), 'Please check email repeat field');
                }else{
                    validationSuccess($(this));
                }
            } else {
                addError($(this).closest('.form__part'), 'Please fill email field');
            }

        } else if($(this).hasClass('email_repeat')) {

            if (value.length > 2 && isEmail(value)) {
                if($('#email').val() !== $('#email_repeat').val()) {
                    $('#email_repeat').addClass('is-invalid');
                    addError($('#email_repeat').closest('.form__part'), 'Please check email repeat field');
                }else{
                    validationSuccess($(this));
                }
            } else {
                addError($(this).closest('.form__part'), 'Please fill email repeat field');
            }


        }/*else if ($(this).hasClass('ethwallet')) {
            if (validate_wallet_address() === false) {
                $('#ethwallet').addClass('is-invalid');
                addError($('#ethwallet').closest('.form__part'), 'Please enter valid Wallet Address');
            } else {
                validationSuccess($(this));
            }
        }*/ else if ($(this).hasClass('input__type-file')) {
            console.log(value.length);
            if (value.length < 2) {
                return false;
            } else {
                var fileInput = document.getElementById($(this).attr('id'));
                // var filename = fileInput.files[0].name;
                $(this).closest('.form__part').find('.form__file-result label:first-child').text("File Selected").addClass('active');
                // $(this).closest('.form__part').find('.form__file-result span').text(filename).addClass('active');
                $(this).closest('.form__part').find('.form__error-text').remove();
                currentStep = $(this).closest('.page__form').data('step');
                stepcheck(currentStep);
            }


        } else {
            if (value.length > 2) {
                validationSuccess($(this));
            }
        }

    });

    $('.input__type-file').each(function () {
        var input = $(this);
        $(this).closest('.form__part').find('.form_file__button').click(function () {
            input.trigger('click');
        });
    })

    $('body').on('click', '.error', function () {
        $(this).removeClass('is-invalid');
    });

    $('body').on('focus', '.is-invalid', function () {
        $(this).removeClass('is-invalid');
    });

});


/**
 * STEP CHECKER
 * @type {{validate_step_1: step_checker.validate_step_1, validate_step_4: step_checker.validate_step_4, validate_step_5: step_checker.validate_step_5, validate_step_2: step_checker.validate_step_2, validate_step_3: step_checker.validate_step_3}}
 */
var step_checker = {
    validate_step_1: function () {
        var email = $('#email').val();
        var email_repeat = $('#email_repeat').val();
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        // var ethwallet = $('#ethwallet').val();
        // var eth_investment = $('#eth_investment').val();
        var errors = 0;


        if ($.trim(email).length < 3 && !isEmail($.trim(email))) {
            errors++;
            $('#email').closest('.form__part').removeClass('is-valid');
        }else{
        }

        if(email_repeat !== email){
            $('#email_repeat').closest('.form__part').removeClass('is-valid');
            errors++;
        }


        if ($.trim(firstname).length < 2) {
            errors++;
            $('#firstname').closest('.form__part').removeClass('is-valid');
        }else{
        }

        if ($.trim(lastname).length < 2) {
            errors++;
            $('#lastname').closest('.form__part').removeClass('is-valid');

        }else{
        }

/*        if ($.trim(ethwallet).length < 42) {
            errors++;
            $('#ethwallet').closest('.form__part').removeClass('is-valid');

        }else{
        }*/

        if (errors < 1) {
            $('.p-form-1').find('.line-info').removeClass().addClass('line-info').addClass('line100');
            return true;
        } else {
            if(errors == 4){
                $('.p-form-1').find('.line-info').removeClass().addClass('line-info').addClass('line20');
            }else if (errors == 3){
                $('.p-form-1').find('.line-info').removeClass().addClass('line-info').addClass('line40');
            }else if (errors == 2){
                $('.p-form-1').find('.line-info').removeClass().addClass('line-info').addClass('line50');
            }

            return false;
        }
    },
    validate_step_2: function () {

        var id_type = $('#id_type').val();
        var id_front_file = $('#id_front_file').val();
        var id_back_file = $('#id_back_file').val();

        var errors = 0;

        if ($.trim(id_type).length < 2) {
            errors++;
        }

        if ($.trim(id_front_file).length < 2) {
            errors++;
            $('#id_front_file').closest('.form__part').removeClass('is-valid');
        } else if (!$('#id_front_file').hasExtension(_validFileExtensions)) {
            $('#id_front_file').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#id_front_file').closest('.form__part'), 'Invalid file format', 'file');
            errors++;
            $('#id_front_file').closest('.form__part').removeClass('is-valid');
        } else if (!$('#id_front_file').hasMaxSize()) {
            $('#id_front_file').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#id_front_file').closest('.form__part'), "The document size has to be below 9 MB", 'file');
            errors++;
            $('#id_front_file').closest('.form__part').removeClass('is-valid');
        }

        if ($.trim(id_back_file).length < 2 && $('#id_back_file').prop('required')) {
            errors++;
            $('#id_back_file').closest('.form__part').removeClass('is-valid');
        } else if (!$('#id_back_file').hasExtension(_validFileExtensions) && $('#id_back_file').prop('required')) {
            $('#id_back_file').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#id_back_file').closest('.form__part'), 'Invalid file format', 'file');
            errors++;
            $('#id_back_file').closest('.form__part').removeClass('is-valid');
        } else if (!$('#id_back_file').hasMaxSize() && $('#id_back_file').prop('required')) {
            $('#id_back_file').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#id_back_file').closest('.form__part'), "The document size has to be below 9 MB", 'file');
            $('#id_back_file').closest('.form__part').removeClass('is-valid');
            errors++;
        }


        if (errors < 1) {
            $('.p-form-2').find('.line-info').removeClass().addClass('line-info').addClass('line100');
            return true;
        } else {
            $('.p-form-2').find('.line-info').removeClass().addClass('line-info').addClass('line20');
            return false;
        }
    },
    validate_step_3: function () {
        var photo = $('#photo').val();
        var utility_bill = $('#utility_bill').val();

        var errors = 0;

        $('.is_invalid').removeClass('is-invalid');


        if ($.trim(photo).length < 2) {
            errors++;
            $('#photo').closest('.form__part').removeClass('validated');
        } else if (!$('#photo').hasExtension(_validFileExtensions)) {
            $('#photo').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#photo').closest('.form__part'), 'Invalid file format', 'file');
            errors++;
            $('#photo').closest('.form__part').removeClass('validated');
        } else if (!$('#photo').hasMaxSize()) {
            $('#photo').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#photo').closest('.form__part'), "The document size has to be below 9 MB", 'file');
            errors++;
            $('#photo').closest('.form__part').removeClass('validated');
        }


        if ($.trim(utility_bill).length < 2) {
            errors++;
            $('#utility_bill').closest('.form__part').removeClass('validated');
        } else if (!$('#utility_bill').hasExtension(_validFileExtensions)) {
            $('#utility_bill').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#utility_bill').closest('.form__part'), 'Invalid file format', 'file');
            errors++;
            $('#utility_bill').closest('.form__part').removeClass('validated');
        } else if (!$('#utility_bill').hasMaxSize()) {
            $('#utility_bill').closest('.form__part').find('.form__file-result').addClass('error');
            addError($('#utility_bill').closest('.form__part'), "The document size has to be below 9 MB", 'file');
            errors++;
            $('#utility_bill').closest('.form__part').removeClass('validated');
        }

        if (errors < 1) {
            $('.p-form-3').find('.line-info').removeClass().addClass('line-info').addClass('line100');
            return true;
        } else {
            if(errors == 1){
                $('.p-form-3').find('.line-info').removeClass().addClass('line-info').addClass('line40');
            }
            return false;
        }
    },
    validate_step_4: function () {
        var errors = 0;
        $('.error').removeClass('is-invalid');
        $('#country').closest('.form__part').find('.form__error-text').remove();

        var additional = $('#autocomplete').val();
        var street = $('#route').val();
        var city = $('#locality').val();
        var state = $('#administrative_area_level_1').val();
        var zip = $('#postal_code').val();
        var country = $('#country').val();
        var country_code = $('#country_code').val();

        if ($.trim(country).length < 2) {
            // $('#country').addClass('is-invalid');
            // addError($('#country').closest('.form__part'), 'Please fill Country field');
            errors++;
        }

        if ($.trim(additional).length < 2) {
            // $('#autocomplete').addClass('is-invalid');
            addError($('#autocomplete').closest('.form__part'), 'Please fill Address field');
            errors++;
        }

        if (errors < 1) {
            $('.p-form-4').find('.line-info').removeClass().addClass('line-info').addClass('line100');
            return true;
        } else {
            $('.p-form-4').find('.line-info').removeClass().addClass('line-info').addClass('line20');
            return false;
        }
    },
    validate_step_5: function () {
        var errors = 0;

        if (!check_term()) {
            errors++;
        }


        if (errors < 1) {
            return true;
        } else {
            return false;
        }
    }
};







function register(file_data) {
    $form = $('#form_register');
    var url = $form.attr('action');
    console.log(url);

    var post_data = $('#form_register').serializeArray();
    // post_data.push(file_data);
    post_data = post_data.concat([
        {name: "files", value: JSON.stringify(file_data)}
    ]);

    console.log("register post data -before");
    console.log(post_data);

    $.ajax({
        type: "POST",
        dataType: 'json',

        url: url,
        data: post_data,
        success: function (data) {
            console.log(data);
            $('.error-container').remove();
            $('.message-container').html('').hide();
            var error_list = '';

            if (typeof data.error.error !== 'undefined' && data.error.error == 1) {
                jQuery.each(data.body, function (i, val) {
                    $('<small class="alert-danger error-container">' + val.message + '</small>').insertAfter('#' + val.input);
                    error_list += '● ' + val.message + '<br />';
                });

                var error = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Opps!</strong> <br />' + error_list + '</div>';
                $('.message-container').html(error).show();
                $('.page__buttons').show();
                $('.redirect-success').hide();

            } else {
                window.location = registration_success;
                $('.loading-bar').hide();

                // console.log("success");
            }

        }
    });
}
























function prevStep() {
    var totalSteps = 5;
    var currentStep = $('.page__form').data('step');

    if (currentStep != 1) {
        currentStep--;
        $('.page__form').data('step', currentStep);
    } else {
        // alert(currentStep + "  prev step fn");
        // window.location.href ='/';
        window.history.back();
    }

    $('.step_wrapper').removeClass('active');
    $('.page__form').find('#step_' + currentStep).addClass('active');
    $('.form-step').find('.step').removeClass('active');
    $('.form-step').find('#astep_' + currentStep).addClass('active').removeClass('done');
    $('.page__heading').find('#step_value').html(zeroPad(currentStep, 2) + '/' + zeroPad(totalSteps, 2));
    $('.step_info').find('span').html(zeroPad(currentStep, 2));

}

function nextStep() {
    var totalSteps = 5;
    var currentStep = $('.page__form').data('step');

    console.log(currentStep);



/*
    if (currentStep != totalSteps) {
        var validate_name = 'validate_step_' + currentStep;
        if (validations[validate_name]()) {
            $("html, body").animate({scrollTop: 0}, "slow");

            currentStep++;
            $('.page__form').data('step', currentStep);
            $('.btn-next').removeClass('button_point');

        }
    } else if (check_term() && currentStep == totalSteps) {

        $('.button_next').prop('disabled', true);
        // alert(currentStep + " next step fn");
        $("#form_register").submit();
        // window.location.href ='/';
    }

    $('.step_wrapper').removeClass('active');
    $('.page__form').find('#step_' + currentStep).addClass('active');
    $('.form-step').find('.step').removeClass('active');
    $('.form-step').find('#astep_' + currentStep).addClass('active').prev().addClass('done');
    $('.page__heading').find('#step_value').html(zeroPad(currentStep, 2) + '/' + zeroPad(totalSteps, 2));
    $('.step_info').find('span').html(zeroPad(currentStep, 2));
*/

}




/*jQuery('.btn-next').click(function() {

    jQuery('.form-color1').removeClass('active');
    jQuery('.form-color1').addClass('check-block');
    jQuery('.form-color2 .line-info').addClass('animate-second-line');
    jQuery('.form-color2').addClass('w50');
    $('html,body').stop().animate({ scrollTop: $('.split').offset().top }, 700);
    jQuery('.form-color3').addClass('w0');
    jQuery('.form-color2').addClass('active');
    jQuery('.mob-step1').removeClass('active');
    jQuery('.mob-step2').addClass('active');
    jQuery('.mob-step1').addClass('mobile-check');

});*/






















$('#i1').change(function(e){
    $in=$(this);
    $(".btn-submit2").removeAttr("disabled");
    jQuery('.form-color2 .line-info').addClass('line100');

});



$('#i2').change(function(e){
    $in=$(this);
    $(".btn-submit3").removeAttr("disabled");
    jQuery('.form-color3 .line-info').addClass('line50');

});



$('#i3').change(function(e){
    $in=$(this);
    $(".btn-submit3").removeAttr("disabled");
    jQuery('.form-color3 .line-info').addClass('line100');

});




$(".scroller-b").mCustomScrollbar({
    axis:"y",
    advanced:{
        autoDraggerLength:true
    }
});

