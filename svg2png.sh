#!/bin/sh
for filename in src/single-assets/*.svg ; do
    inkscape -w 1024 $filename -o "${filename%%.*}.png";
done


