from django.urls import path
from .views import AlbumViewSet, RatingViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('albums', AlbumViewSet, basename='user')
router.register('ratings', RatingViewSet)
urlpatterns = router.urls
