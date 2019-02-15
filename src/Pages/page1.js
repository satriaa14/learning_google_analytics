document.getElementById("template1").innerHTML = CustomHTMLPage();


function CustomHTMLPage() {
    return `
    <div class="panel-body">
        <div class="row">
            <div class="col-md-6">
                <div class="thumbnail">
                    <img src="Image/img1.jpg" width="100%">
                </div>
            </div>

            <div class="col-md-6">
                <h4>Simple T-Shirt<h4>
                <h6 style="color:gray">IDR 50,000</h6>
                <div class="line"></div></br>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

        <div class="text-center"><h2>Product Detail Page<h2></div>
    </div>
        `;
}