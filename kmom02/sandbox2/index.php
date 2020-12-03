<?php
    include("incl/config.php");
    $title = "Sandlådan2 | $shortName";
    include("incl/header.php");
    include("incl/navbar.php");
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
            <h2>Kmom02</h2>
            <p>
                Valid keys: up/down/left/right for movment of the box and i/d for increasing or decreasing steps by 5.
            </p>
            <div id="content" class="content">
            </div>
        </section>
    </article>
</main>

<?php
// include("incl/byline.php");
include("incl/footer.php");
?>
