# Generated by Django 2.2.6 on 2019-10-22 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ratings', '0004_album_submitter'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='coverUrl',
            field=models.CharField(default='https://i.scdn.co/image/e5f5a50956c2c7dd5411051ca507b4f771d6d816', max_length=200, null=True),
        ),
    ]
