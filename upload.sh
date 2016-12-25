cd /tmp/hls
rm -f /tmp/hlsuploadts/*
while :
do
    cp 9.m3u8 ../hlsuploadm3u8/9.m3u8
    echo "" > /root/upload/log
    for file in `ls *.ts`
    do
        cp -f $file ../hlsuploadts/$file
        echo "Copying "$file"..."
        echo $file >> /root/upload/log
    done
    /root/upload/qshell qupload 1 /root/upload/m3u8.json
    /root/upload/qshell qupload 1 /root/upload/ts.json
    for file in `cat /root/upload/log`
    do
        echo "Deleting "$file"..."
        rm -f ../hlsuploadts/$file
    done
done
