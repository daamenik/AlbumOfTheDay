from django.urls import path
from .views import AlbumViewSet, RatingViewSet, UserListCreateAPI, UserRetrieveAPI
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('albums', AlbumViewSet)
router.register('ratings', RatingViewSet)
urlpatterns = [
	path('users/', UserListCreateAPI.as_view()),
	path('users/<pk>/', UserRetrieveAPI.as_view())
]
urlpatterns += router.urls
