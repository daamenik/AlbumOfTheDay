from rest_framework import serializers
from ..models import Album

# Album serializer
class AlbumSerializer(serializers.ModelSerializer):
	class Meta:
		model = Album
		fields = '__all__'

	def create(self, validated_data):
		album = Album(**validated_data)
		album.coverUrl = "placeholder"
		return album
