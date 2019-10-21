from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('ratings.urls')),
    path('', include('accounts.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
]
