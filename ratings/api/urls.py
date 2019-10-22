from django.urls import path
from .views import AlbumViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('albums', AlbumViewSet, basename='user')
urlpatterns = router.urls
