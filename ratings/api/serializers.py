from rest_framework import serializers
from ..models import Album, Rating
from django.contrib.auth.models import User

import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

client_id = 'e6cf93aab62a404ebb23fad467284b09'
client_secret = 'a4b39ef0d58d4f89bddba349840ea5db'

# Album serializer
class AlbumSerializer(serializers.ModelSerializer):
	# def __init__(self, *args, **kwargs):
	# 	many = kwargs.pop('many', True)
	# 	super(AlbumSerializer, self).__init__(many=many, *args, **kwargs)

	class Meta:
		model = Album
		fields = '__all__'

	def create(self, validated_data):
		album = Album(**validated_data)

		# getting album cover from Spotify
		client_credentials_manager = SpotifyClientCredentials(client_id, client_secret)
		sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

		results = sp.search(q='album: ' + album.title, type='album')
		items = results['albums']['items']
		coverUrl = 'https://i.scdn.co/image/e5f5a50956c2c7dd5411051ca507b4f771d6d816' # Dark Side of the Moon cover
		if len(items) > 0:
			albumResult = items[0]
			coverUrl = albumResult['images'][0]['url']

		album.coverUrl = coverUrl
		album.save()

		return album

class RatingSerializer(serializers.ModelSerializer):
	submitter = serializers.CharField(source='submitter.username', read_only=True)

	class Meta:
		model = Rating
		fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'username', 'email')
