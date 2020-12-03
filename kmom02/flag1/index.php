<?php
    include("incl/config.php");
    $title = "Sandlådan | $shortName";
    include("incl/header.php");
    include("incl/navbar.php");
?>
<main>
    <article class="all-browsers">
        <header>
            <h1>Kursmoment 02</h1>
        </header>
        <p>
        </p>
        <section class="kmom">
            <h2>4 flaggor</h2>
            <div id="content" class="content">
                Sweden
                <div class="flag-300x200 sweden">
                    <div class="swe-horizontal"></div>
                    <div class="swe-vertical"></div>
                </div>
                Laos
                <div class="flag-300x200 laos">
                    <div class="laos-stripe"></div>
                    <div class="laos-circle"></div>
                </div>
                Bhutan
                <div class="flag-300x200 bhutan">
                    <div class="bhutan-bottom-triangle"></div>
                    <img src='img/flags/Dragon_on_Flag_of_Bhutan.svg' alt='Dragon' class='bhutan-dragon'>
                </div>
                Serbia
                <div class="flag-300x200 serbia">
                    <div class="serbia-midle-stripe"></div>
                    <div class="serbia-bottom-stripe"></div>
                    <img src='img/flags/Flag_of_Serbia_coat_of_arms.svg' alt='Double headed eagle' class='serbia-eagle'>
                </div>
            </div>
        </section>
    </article>
</main>

<?php
// include("incl/byline.php");
include("incl/footer.php");
?>
