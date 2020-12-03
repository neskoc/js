<?php
    require "incl/config.php";
    $title = "Sandlådan | $shortName";
    require "incl/header.php";
    require "incl/navbar.php";
?>
<main>
    <article class="all-browsers">
        <header>
            <h1>Kursmoment 04</h1>
        </header>
        <p>
        </p>
        <section class="kmom">
            <h5 id="country-id">Click on the country name in the menu to draw its flag </h5>
            <div id="content" class="content">
                <div id="flag"></div>
                <div id="flags"></div>
            </div>
        </section>
    </article>
</main>

<?php
// include("incl/byline.php");
require "incl/footer.php";
?>
