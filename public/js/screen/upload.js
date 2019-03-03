async function getBase64(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = function (error) {
            reject(error);
        };
    });
}

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

function getFormat(fileName) {
    var extension = fileName.substr( (fileName.lastIndexOf('.') +1) );
   return extension;
};

$(document).ready(function () {




    let cookieUserName = Cookies.get('userName');
    $('#userName').val(cookieUserName);

    $('#refAudio').click(async function () {
        window.open(
            'https://drive.google.com/drive/folders/1FA7H5RA0kHAvED71fA9jpS6wdl_vyUSo?usp=sharing',
            '_blank' // <- This is what makes it open in a new window.
        );
    });

    $('#worshipDate').val(new Date().toDateInputValue());

    const uploadClick = async function () {

        Cookies.set('userName', $('#userName').val(), { expires: 366 });

        if (!$('#checkPractice').is(":checked")) {
            swal({
                type: 'error',
                title: 'Oops...',
                text: '要做基本功喔～（有的話要打勾勾）',
            })
            return;
        }

        if (!$('#songName').val()) {
            swal({
                type: 'error',
                title: 'Oops...',
                text: '請輸入歌名',
            })
            return;
        }


        if (!$('#userName').val()) {
            swal({
                type: 'error',
                title: 'Oops...',
                text: '請輸入使用者名稱',
            })
            return;
        }

        if (!$('#audioFile').get(0).files[0]) {
            swal({
                type: 'error',
                title: 'Oops...',
                text: '請上傳詩歌',
            })
            return;
        }

        $.blockUI({message: '<h6><img src="https://res.cloudinary.com/dh62scrmq/image/upload/c_scale,h_53/v1546158363/sys/Spinner-1s-200px.gif" /> <br>上傳中...</h6>'});

        let audioFileBase64 = await getBase64($('#audioFile').get(0).files[0]);
        let audioFileFileName = $('#audioFile').get(0).files[0].name;
        let fileFormat = getFormat(audioFileFileName);
        let songName = $('#songName').val();
        let userName = $('#userName').val();
        let worshipDate = $('#worshipDate').val();

        let obj = {
            songName,
            userName,
            audioFileBase64,
            audioFileFileName,
            fileFormat,
            worshipDate
        };

        $('#songName').val("");
        $('#audioFile').val("");

        console.log(obj);

        $.ajax({
            type: 'POST',
            url: 'upload',
            data: JSON.stringify(obj),
            contentType: 'application/json',
            success: function (xhr) {
                console.log('xhr=', xhr);
                swal(
                    "成功!",
                    "上傳成功！",
                    "success"
                )

                $.unblockUI();
            },
            error: function (err) {
                console.log('err=', err);
                swal(
                    "上傳失敗！",
                    err.responseJSON.message,
                    "error"
                );
                $.unblockUI();
            }
        });

    };

    //load machine data
    $('#upload').click(async function () {

        uploadClick().then().catch(function (err) {
            swal({
                title: "上傳失敗!",
                text: err.message,
                type: "error"
            });
            $.unblockUI();
        });
    });



});

$.ajax({
    type: 'GET',
    url: 'upload/songData',
    contentType: 'application/json',
    success: function (res) {
        let availableSongs = res.data.map((arr)=>{
            return arr[0];
        })
        $( "#songName" ).autocomplete({
            source: availableSongs
        });
    },
    error: function (err) {
    }
});
