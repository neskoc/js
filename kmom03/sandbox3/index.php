<?php
    include("incl/config.php");
    $title = "Sandlådan | $shortName";
    include("incl/header.php");
    // include("incl/navbar.php");
?>
<main>
    <article class="all-browsers">
        <header>
            <h1>Nenads sandlåda</h1>
        </header>
        <p>
            Här kommer finnas lösningar för de olika kursmomenten.
        </p>

        <section class="kmom">
            <h2>Kmom03</h2>
            <div id="content" class="content">
                 <fieldset>
                    <legend>Ange antal tärningssidor och kast</legend>
                    <label for="dice-sides">Ange antal sidor (2 till max 9)</label>
                    <input type="number" id="dice-sides" name="dice-sides" min="2" max="9" value="6">
                    <br>
                    <label for="dice-casts">Ange antal kast (min 1)</label>
                    <input type="number" id="dice-casts" name="dice-casts" min="1" value="10">
                    <input name="submit" type="submit" value="Kasta!" id="cast-id">
                </fieldset>
                <p id='results-id'></p>
                <div id="canvas"></div>
            </div>
        </section>
    </article>
</main>

<?php
// include("incl/byline.php");
include("incl/footer.php");
?>
