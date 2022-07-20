let navbar = document.createElement("div")
navbar.innerHTML = "<div class=\"navbar\">\n" +
    "  <a href=\"#\" class=\"navbar-brand\">Highway BnB</a>\n" +
    "  <ul class=\"mx\">\n" +
    "    <li class=\"nav-item\">\n" +
    "      <a href=\"#\" class=\"nav-link nowrap\">Become a Host</a>\n" +
    "    </li>\n" +
    "    <li class=\"nav-item\">\n" +
    "      <a href=\"#\" class=\"nav-link nowrap\">Browse Listings</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <ul>\n" +
    "    <li class=\"nav-item\" id=\"login-btn\">\n" +
    "      <a href=\"login.html\" class=\"nav-link login-btn-a\">Login</a>\n" +
    "    </li>\n" +
    "    <li class=\"nav-item\">\n" +
    "      <a href=\"signup.html\" class=\"nav-link signup-btn\">Signup</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>"

document.body.prepend(navbar)