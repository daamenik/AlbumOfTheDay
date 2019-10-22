# from django.urls import path
# from .views import AlbumViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register('albums', AlbumViewSet, basename='user')
# urlpatterns = router.urls
from django.urls import path

from .views import (
    AlbumListView,
    AlbumDetailView,
    AlbumCreateView,
    AlbumUpdateView,
    AlbumDeleteView
)

urlpatterns = [
    path('albums/', AlbumListView.as_view()),
    path('albums/create/', AlbumCreateView.as_view()),
    path('albums/<pk>/', AlbumDetailView.as_view()),
    path('albums/<pk>/update/', AlbumUpdateView.as_view()),
    path('albums/<pk>/delete/', AlbumDeleteView.as_view())
]