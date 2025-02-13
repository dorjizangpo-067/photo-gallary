from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from .models import Post, User

# Create your views here.
def index(request):
    all_posts = Post.objects.all()
    user = User.objects.all()
    return render(request, 'app/index.html', {
        'posts': all_posts,
        'user': user[0]
    })