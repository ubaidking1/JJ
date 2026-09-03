@echo off
cd /d "%~dp0"
if not exist ".venv\Scripts\python.exe" (
  echo Run install.bat first.
  pause
  exit /b 1
)
echo Re-checking all saved companies for current public phone and WhatsApp numbers...
".venv\Scripts\python.exe" contact_finder.py --once --refresh
pause
