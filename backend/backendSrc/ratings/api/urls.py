from django.urls import path
from .views import AlbumDetailView, AlbumListView

urlpatterns = [
	path('albums/', AlbumListView.as_view()),
	path('albums/<pk>', AlbumDetailView.as_view())
]