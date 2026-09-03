@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul || (
  echo Python is not installed. Install Python 3.11 or newer from https://www.python.org/downloads/windows/
  echo During setup, tick "Add Python to PATH".
  pause
  exit /b 1
)
py -3 -m venv .venv || exit /b 1
call .venv\Scripts\activate.bat
python -m pip install --upgrade pip
pip install -r requirements.txt || exit /b 1
mkdir "%USERPROFILE%\Downloads\Company_Lead_Files" 2>nul
mkdir "%USERPROFILE%\Downloads\Contact_Finder_Results" 2>nul
powershell -NoProfile -ExecutionPolicy Bypass -Command "$s=(New-Object -COM WScript.Shell).CreateShortcut([Environment]::GetFolderPath('Startup')+'\Jilani Contact Finder.lnk');$s.TargetPath='%~dp0run_agent.bat';$s.WorkingDirectory='%~dp0';$s.WindowStyle=7;$s.Save()"
echo.
echo Installation complete.
echo Put daily Excel files in: %USERPROFILE%\Downloads\Company_Lead_Files
echo Results appear in: %USERPROFILE%\Downloads\Contact_Finder_Results
echo The agent will start automatically after Windows login.
start "Jilani Contact Finder" /min "%~dp0run_agent.bat"
pause
