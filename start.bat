@echo off
title IT LIVE Academy - Admin Dashboard
echo ========================================================
echo  IT LIVE Academy Admin Dashboard
echo  Starting local web server on port 8080...
echo ========================================================
echo.
start http://localhost:8080/index.html#dashboard
python -m http.server 8080
pause

