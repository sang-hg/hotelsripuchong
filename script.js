function myFunction() {
    var x = document.getElementById("navmenu");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

class hspheader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header id="banner">
      <a href="index.html"><img src="sphPhotos/headbanner.jpg" alt="sri puchong logo"  style="width: 90%;"></a>
    </header>
    `
  }
}
customElements.define('hsp-header', hspheader)

class hspnavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar">
      <ul id="navmenu">
        <li><a class="navicon" onclick="myFunction()"><img src="sphPhotos/icons8-menu-bar-32.png"></a></li>
        <li><a href="index.html">Home</a></li>
        <li><a href="gallery.html"> Gallery</a></li>
        <li><a href="reservation.html">Reservation</a></li>
      </ul>
    </nav>
    `
  }
}
customElements.define('hsp-navbar', hspnavbar)

class hspfooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <section class="footer">
        <ul>
          <li><a href="index.html">About Us</a></li>
          <li><a href="index.html">Contact Us</a></li>
          <li><a href="gallery.html">Facilities</a></li>
          <li><a href="">Feed Back</a></li>
        </ul>
        <ul>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="index.html">Location</a></li>
          <li><a href="opportunities.html">Opportunities</a></li>
          <li><a href="">Portal</a></li>
        </ul>
        <ul>
          <li><a href="privatepolicy.html">Private Policy</a></li>
          <li><a href="reservation.html">Reservation</a></li>
          <li><a href="gallery.html">Tariff</a></li>
          <li></li>
        </ul>
        <ul>
          <li><a href="https://www.facebook.com/people/Hotel-Sri-Puchong/100069287625990/#" target="_blank"><img alt="icon facebook" src="sphPhotos/icons8-facebook-32.png"></a></li>
          <li><img src="sphPhotos/icons8-instagram-32.png" alt="instagram icon"></li>
          <li><img src="sphPhotos/icons8-tiktok-32.png" alt="tiktok icon"></li>
        </ul>
      </section>
      <section class="footer">
        <div>
          <p>&nbsp; &copy; &nbsp; sripuchonghotel. &nbsp; All rights reserved.</p>
        </div>
      </section>
    </footer>
    `
  }
}
customElements.define('hsp-footer', hspfooter)
