var _validFileExtensions = [".jpg", ".jpeg", ".png", ".pdf"];

$.fn.hasExtension = function(exts) {
    // return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test($(this).val());
    return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$','i')).test($(this).val());
    // return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test($(this).val());
};

$.fn.hasMaxSize = function(maxSize) {



    if(!maxSize){
        // maxSize = 3145728; //3mb
        maxSize = 9437184; //9mb
    }
    var f = $(this)[0];

    if(!f.value) return false;

        console.log(f.files[0].size);
        if(f.files[0].size > maxSize){
            // f.value = "";
            $(this).closest('.form__part').find('.form__file-result span').text("no files to upload").removeClass('active');
            return false;
        }

    return true;

/*    if(f.files[0].size > maxSize){
        f.value = "";
        $(this).closest('.form__part').find('.form__file-result span').text("no files to upload").removeClass('active');
        return false;
    }
    return true;*/
};


function fileUploader() {
    console.log('file uploader');

    var data = new FormData();
    var u = 0;
    jQuery.each(jQuery('#id_front_file')[0].files, function (i, file) {
        data.append('id_front_file', file);
        u++;
    });

    jQuery.each(jQuery('#id_back_file')[0].files, function (i, file) {
        data.append('id_back_file', file);
        u++;
    });
    jQuery.each(jQuery('#photo')[0].files, function (i, file) {
        data.append('photo', file);
        u++;
    });
    jQuery.each(jQuery('#utility_bill')[0].files, function (i, file) {
        data.append('utility_bill', file);
        u++;
    });


    /**
     * company
     */
    if(jQuery('#incorporation').length != 0){
        jQuery.each(jQuery('#incorporation')[0].files, function (i, file) {
            data.append('incorporation', file);
            u++;
        });

        jQuery.each(jQuery('#statues')[0].files, function (i, file) {
            data.append('statues', file);
            u++;
        });
        jQuery.each(jQuery('#bank_statement')[0].files, function (i, file) {
            data.append('bank_statement', file);
            u++;
        });

        jQuery.each(jQuery('#business_description')[0].files, function (i, file) {
            data.append('business_description', file);
            u++;
        });
    }


    data.append('id_type', $('#id_type').val());
    data.append('email', $('#email').val());

    var s = true;

    if (u > 0) {
        console.log("before upload data");
        console.log(data);
        // console.log(data.get('user_file'));
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "/whitelist/upload",
            data: data,
            // async: true,
            cache: false,
            contentType: false,
            enctype: 'multipart/form-data',
            processData: false,
            success: function (rdata) {
                console.log("rdata");
                console.log(rdata);
                jQuery.each(rdata, function (i, val) {

                    if(val.error){
                        s = false;
                        $('<small class="alert-danger error-container">' + val.message + '</small>').insertAfter('#'+val.input);
                    }

                });

                if(s === true){
                    register(rdata);
                }
            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
//                    console.log('xht:'+xhr);
//                 $('#upload_progress').show();
                $('.loading-bar').show();
                $('.page__buttons').hide();

                xhr.upload.addEventListener("progress", function (evt) {
                    // console.log(evt);
                    if (evt.lengthComputable) {

                        var percentComplete = evt.loaded / evt.total;
                        // console.log('percentComplete: '+percentComplete);
                        // console.log('evt.loaded: '+evt.loaded);
                        // console.log('evt.total: '+evt.total);

                        percentComplete = parseInt(percentComplete * 100);
                        // console.log('Percent: '+percentComplete);

                        $('#upload_progress .progress-bar').css('width', percentComplete + '%');
                        $('#upload_progress .progress-bar').attr('aria-valuenow', percentComplete);

                        if (percentComplete === 100) {
                            console.log('upload completed..');
                            // $('#upload_progress').hide();
                            $('.redirect-success').show();
                        }

                    }
                }, false);

                return xhr;
            },
            error: function (err) {
                console.log(err);
            }
        });
    } else {

    }
}
