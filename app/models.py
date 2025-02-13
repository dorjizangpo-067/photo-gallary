from django.db import models
# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    profile_picture = models.ImageField(upload_to='proflie_picture', null=False, blank=False)
    quote = models.TextField(blank=False, null=False)
    logo = models.ImageField(upload_to='proflie_picture', null=True, blank=True)
    def __str__(self):
        return self.username

class Post(models.Model):
    CATEGORY_CHOICES = [
        ('nature', 'Nature'),
        ('travel', 'Travel'),
        ('animals', 'Animals'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    photo = models.ImageField(upload_to='photos/')
    upload_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)
    catagory = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default='nature', 
        null=False, 
        blank=False
    )
    class Meta:
        ordering = ['-upload_time']
    
    def __str__(self):
        return self.description
