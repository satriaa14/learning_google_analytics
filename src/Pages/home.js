document.getElementById("home").innerHTML = CustomHTMLPage();


function CustomHTMLPage() {
    return `
    <div class="jumbotron" style="padding:20px 20px 70px 20px; border-radius: 0px;text-shadow: rgb(0, 0, 0) 0px 0px 0px">

    <div class="panel-body">
    <div class="row">
        <div class="col-md-4">
            <div class="thumbnail">
                <img src="Image/img1.jpg" width="100%">
                </br>
                <h4 class="h4">Simple T-Shirt</h4>
                <h6 class="h6">IDR 50,000</h6>
                <div class="caption">
                    <h4 align="center"> <a href="#/page1" class="btn btn-primary" role="detail">VIEW</a></h4>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="thumbnail">
                <img src="Image/img2.jpg" width="100%">
                </br>
                <h4 class="h4">Grey T-Shirt</h4>
                <h6 class="h6">IDR 150,000</h6>
                <div class="caption">
                    <h4 align="center"> <a href="#/page2" class="btn btn-primary" role="detail">VIEW</a></h4>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="thumbnail">
                <img src="Image/img3.jpg" width="100%">
                </br>
                <h4 class="h4">Red and Black Shirt</h4>
                <h6 class="h6">IDR 200,000</h6>
                <div class="caption">
                    <h4 align="center"> <a href="#/page3" class="btn btn-primary" role="detail">VIEW</a></h4>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        `;
}