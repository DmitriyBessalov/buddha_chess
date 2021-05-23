from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import subprocess


def index(request):
    return render(request, 'index.html', {})


@csrf_exempt
def git_update(request):
    result = subprocess.run('git reset --hard origin/master && git pull https://github.com/DmitriyBessalov/social_network.git', shell=True, stdout=subprocess.PIPE)
    return HttpResponse(result.stdout)
