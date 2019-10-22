from django.shortcuts import render
from rest_framework import viewsets, permissions
# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     DestroyAPIView,
#     UpdateAPIView
# )
from ..models import Album
from .serializers import AlbumSerializer
from django.http import HttpResponse
# from django.views.decorators.csrf import csrf_exempt

class AlbumViewSet(viewsets.ModelViewSet):
	serializer_class = AlbumSerializer
	queryset = Album.objects.all()

	def get_permissions(self):
		if self.action == 'list' or self.action == 'retrieve' or self.action == 'create':
			permission_classes = [permissions.AllowAny]
		else:
			permission_classes = [permissions.IsAuthenticated]
		return [permission() for permission in permission_classes]
	
	# def perform_create(self, serializer):
	# 	serializer.save(submitter=self.request.user)

# class AlbumViewSet(viewsets.ModelViewSet):
#     serializer_class = AlbumSerializer
#     queryset = Album.objects.all()

# 	def get_permissions(self):
# 		if self.action == 'list':
# 			permission_classes = [AllowAny]
# 		else:
# 			permission_classes = [IsAuthenicated]



# class AlbumListView(ListAPIView):
#     queryset = Album.objects.all()
#     serializer_class = AlbumSerializer
#     permission_classes = (permissions.AllowAny, )


# class AlbumDetailView(RetrieveAPIView):
#     queryset = Album.objects.all()
#     serializer_class = AlbumSerializer
#     permission_classes = (permissions.AllowAny, )


# class AlbumCreateView(CreateAPIView):
#     queryset = Album.objects.all()
#     serializer_class = AlbumSerializer
#     permission_classes = (permissions.IsAuthenticated, )


# class AlbumUpdateView(UpdateAPIView):
#     queryset = Album.objects.all()
#     serializer_class = AlbumSerializer
#     permission_classes = (permissions.IsAuthenticated, )


# class AlbumDeleteView(DestroyAPIView):
#     queryset = Album.objects.all()
#     serializer_class = AlbumSerializer
#     permission_classes = (permissions.IsAuthenticated, )

# @csrf_exempt
# def AlbumCreateWithCoverView(request):
# 	print(request)
# 	if request.method == 'POST':
# 		return HttpResponse('post')
# 		# album = Album()
# 		# album.title = request.POST['title']
# 		# album.artist = request.POST['artist']
# 		# album.genre = request.POST['genre']
# 		# album.year = request.POST['year']

# 		# AlbumSerializer.save(submitter=request.user)
