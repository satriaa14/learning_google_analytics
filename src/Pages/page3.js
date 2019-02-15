document.getElementById("template3").innerHTML = CustomHTMLPage();


function CustomHTMLPage() {
    return `
    <div class="panel-body">
        <div class="row">
            <div class="col-md-6">
                <div class="thumbnail">
                    <img src="Image/img3.jpg" width="100%">
                </div>
            </div>

            <div class="col-md-6">
                <h4>Red and Black T-Shirt<h4>
                <h6 style="color:gray">IDR 200,000</h6>
                <div class="line"></div></br>
                <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </p>
            </div>
        </div>

        <div class="text-center"><h2>Product Detail Page<h2></div>
    </div>
        `;
}