
<?php $uriFile = basename($_SERVER["REQUEST_URI"]); ?>

<nav class="navbar">
    <a href="index.php"
        class='<?= $uriFile == "index.php" ? "selected" : null ?>'>Sandlådan</a>
    <a href="about.php"
        class='<?= $uriFile == "about.php" ? "selected" : null ?>'>Om</a>
</nav>
