# Generated by Django 2.2.6 on 2019-10-21 08:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ratings', '0002_auto_20191019_2244'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='album',
            name='submitter',
        ),
    ]
