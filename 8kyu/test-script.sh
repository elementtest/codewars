#/bin/bash
#script to make files and add codewars solutions

read -p "file name ? " filename
touch "$filename"
read -p "instructions of the challenge? " shuoming
echo "$shuoming" >> "$filename"
code "$filename"
