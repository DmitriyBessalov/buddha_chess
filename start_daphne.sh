#!bin/bash
cd /home/www/buddha_chess
source ./.venv/bin/activate && exec daphne -b 127.0.0.1 -p 8000 config.asgi:application
