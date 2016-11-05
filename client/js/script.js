

$(document).ready(function () {
    //ini yg di cek lagi ya
    var rowData = $('#fh5co-board .column:first')
    $.ajax({
        url: "http://localhost:3000/api/file",
        success: function (data) {
            $.extend({}, data)
            var file = []

            for (var i = 0; i < data.length; i++) {
                file.push(`                 
                <div class="item">
                    <div class="animate-box bounceIn animated">
                        <a href="images/img_1.jpg" class="image-popup fh5co-board-img">
                            <img src="images/img_1.jpg" alt="">
                        </a>
                    </div>
                        <div class="fh5co-desc">
                        <h3>${data[i].title}</h3>
                        <p>${data[i].description}</p>
                        <a href="" class="btn btn-success"><i class="icon-eye2"></i> Details</a>
                        <a href="" class="btn btn-primary"><i class="icon-cloud-download"></i> Download</a>
                    </div>
                </div>
`)
            }
            rowData.append(file.join(""))
        }
    })
})