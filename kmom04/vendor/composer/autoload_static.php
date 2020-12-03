<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2a3577ee25422a43dd58e3b3bea40b54
{
    public static $files = array (
        'dfc9e5dd545737efbb98020db79bfa08' => __DIR__ . '/..' . '/mos/cimage/defines.php',
        '507fe79d3e285fab95fad400b8d42245' => __DIR__ . '/..' . '/mos/cimage/functions.php',
    );

    public static $classMap = array (
        'CAsciiArt' => __DIR__ . '/..' . '/mos/cimage/CAsciiArt.php',
        'CCache' => __DIR__ . '/..' . '/mos/cimage/CCache.php',
        'CFastTrackCache' => __DIR__ . '/..' . '/mos/cimage/CFastTrackCache.php',
        'CHttpGet' => __DIR__ . '/..' . '/mos/cimage/CHttpGet.php',
        'CImage' => __DIR__ . '/..' . '/mos/cimage/CImage.php',
        'CRemoteImage' => __DIR__ . '/..' . '/mos/cimage/CRemoteImage.php',
        'CWhitelist' => __DIR__ . '/..' . '/mos/cimage/CWhitelist.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit2a3577ee25422a43dd58e3b3bea40b54::$classMap;

        }, null, ClassLoader::class);
    }
}
