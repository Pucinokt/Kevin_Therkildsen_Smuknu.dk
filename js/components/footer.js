// Template literal - her laver jeg en const ved navn navigation, 
// og fortæller at tingene i backtics skal smides i #navbar id'et ved innerHTML
const footer = document.querySelector('#footer')
footer.innerHTML += 
    `<footer class="footer">

    <div class="footer-wrap">
      <ul class='footer-ul footer-item_1'>
        <a href="https://www.facebook.com/"><i class="fa-brands  fa-facebook fa-3x"></i></a>
        <a href="https://www.instagram.com"><i class="fa-brands  fa-instagram fa-3x"></i></a>
        <a href="https://www.pinterest.com"><i class="fa-brands  fa-pinterest fa-3x"></i></a>
        <a href="https://www.twitter.com"><i class="fa-brands fa-twitter fa-3x"></i></a>
        <a href="https://www.youtube.com"><i class="fa-brands fa-youtube fa-3x"></i></a>
      </ul>
  
      <ul class='footer-ul footer-item_2'>
      <li><a href="mailto:mail@smuk.nu">mail@smuk.nu</a></li>
      <li><a href="tel:+45 123 345 33"> +45 123 345 33 </a></li>
      </ul>
    </div>
  
  </footer>`
  // Template literal END
