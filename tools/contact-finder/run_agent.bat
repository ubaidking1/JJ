@echo off
cd /d "%~dp0"
if not exist ".venv\Scripts\python.exe" (
  echo Run install.bat first.
  pause
  exit /b 1
)
".venv\Scripts\python.exe" contact_finder.py --interval 60 >> "%USERPROFILE%\Downloads\Contact_Finder_Results\agent.log" 2>&1
