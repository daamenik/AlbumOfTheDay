from django.contrib import admin

# Register your models here.
from .models import Album, Rating

admin.site.register(Album)
admin.site.register(Rating)
