from ..models import Album
from rest_framework import viewsets, permissions
from .serializers import AlbumSerializer

# Album Viewset


class AlbumViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated
    # ]
    # serializer_class = AlbumSerializer

    # def get_queryset(self):
    #     return self.request.user.albums.all()
	queryset = Album.objects.all()
	serializer_class = AlbumSerializer

	def perform_create(self, serializer):
		serializer.save(submitter=self.request.user)
