cls

hexo clean

pause

hexo g

pause

xcopy .\public\ .\docs\ /E /H

pause

git add .

pause

git commit -m %1

pause

git push

pause