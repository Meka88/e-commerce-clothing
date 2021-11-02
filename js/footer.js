const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Men</li>
                <li><a href="#" class="footer-link">T-shirts</a></li>
                <li><a href="#" class="footer-link">Sweatshirts</a></li>
                <li><a href="#" class="footer-link">Shirts</a></li>
                <li><a href="#" class="footer-link">Denim</a></li>
                <li><a href="#" class="footer-link">Pants</a></li>
                <li><a href="#" class="footer-link">Shoes</a></li>
                <li><a href="#" class="footer-link">Casual</a></li>
                <li><a href="#" class="footer-link">Formal</a></li>
                <li><a href="#" class="footer-link">Active</a></li>
                <li><a href="#" class="footer-link">Accessories</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Women</li>
                <li><a href="#" class="footer-link">T-shirts</a></li>
                <li><a href="#" class="footer-link">Sweatshirts</a></li>
                <li><a href="#" class="footer-link">Shirts</a></li>
                <li><a href="#" class="footer-link">Denim</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">Shoes</a></li>
                <li><a href="#" class="footer-link">Casual</a></li>
                <li><a href="#" class="footer-link">Formal</a></li>
                <li><a href="#" class="footer-link">Active</a></li>
                <li><a href="#" class="footer-link">Accessories</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">About company</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">Terms</a>
            <a href="#" class="social-link">Privacy</a>
        </div>
        <div>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Your best online shopping space</p>
</footer>
    `;
};

createFooter();
