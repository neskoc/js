
<?php 
$uriFile = basename($_SERVER["REQUEST_URI"]);
$uriFile = $uriFile == 'flag1' ? 'index.php' : $uriFile;
?>

<nav class="navbar">
    <a href="index.php"
        class='<?= $uriFile == "index.php" ? "selected" : null ?>'>Flaggor</a>
    <a href="about.php"
        class='<?= $uriFile == "about.php" ? "selected" : null ?>'>Om</a>
</nav>
