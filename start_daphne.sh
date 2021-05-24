#!bin/bash
cd /home/www/buddha_chess
source ./.venv/bin/activate && exec daphne -b 0.0.0.0 -p 8000 config.asgi:application
