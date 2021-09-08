Clear-Host
hexo clean
hexo g
Remove-Item .\docs\*
Remove-Item .\docs
xcopy .\public\ .\docs\ /E /H
git add .
git commit -m Update
git push
Pause