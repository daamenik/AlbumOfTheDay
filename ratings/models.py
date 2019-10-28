from django.db import models
from django.contrib.auth.models import User
import datetime

# Create your models here.
class Album(models.Model):
	title = models.CharField(max_length=100)
	artist = models.CharField(max_length=100)
	year = models.IntegerField()
	genre = models.CharField(max_length=100)
	# submitter = models.ForeignKey(User, related_name="albums", on_delete=models.CASCADE, null=True)
	date_submitted = models.DateField(default=datetime.date.today)
	# default cover is Dark Side of the Moon
	cover_url = models.CharField(max_length=100, null=True, default="https://i.scdn.co/image/e5f5a50956c2c7dd5411051ca507b4f771d6d816")
	href = models.CharField(max_length=100, null=True, default="")
	average_rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)

	def __str__(self):
		return self.title

class Rating(models.Model):
	rating = models.DecimalField(max_digits=3, decimal_places=2)
	album = models.ForeignKey(Album, related_name="ratings", on_delete=models.CASCADE, null=True)
	favorite_song = models.CharField(max_length=100, blank=True, null=True)
	additional_thoughts = models.CharField(max_length=2500, blank=True, null=True)
	submitter = models.ForeignKey(User, related_name="ratings", on_delete=models.CASCADE, null=True)
	date_submitted = models.DateField(auto_now_add=True)

	def __str__(self):
		return str(self.album) + ": " + self.submitter.username