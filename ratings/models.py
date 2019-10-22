from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Album(models.Model):
	title = models.CharField(max_length=100)
	artist = models.CharField(max_length=100)
	year = models.IntegerField()
	genre = models.CharField(max_length=100)
	submitter = models.ForeignKey(User, related_name="albums", on_delete=models.CASCADE, null=True)
	date_submitted = models.DateField(auto_now_add=True)
	coverUrl = models.CharField(max_length=200, null=True, default="https://i.scdn.co/image/e5f5a50956c2c7dd5411051ca507b4f771d6d816")

	def __str__(self):
		return self.title
