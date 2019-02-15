document.getElementById("template2").innerHTML = CustomHTMLPage();


function CustomHTMLPage() {
    return `
    <div class="panel-body">
        <div class="row">
            <div class="col-md-6">
                <div class="thumbnail">
                    <img src="Image/img2.jpg" width="100%">
                </div>
            </div>

            <div class="col-md-6">
                <h4>Grey T-Shirt<h4>
                <h6 style="color:gray">IDR 150,000</h6>
                <div class="line"></div></br>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>

        <div class="text-center"><h2>Product Detail Page<h2></div>
    </div>
    `;
}