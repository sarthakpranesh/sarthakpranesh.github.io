# Generated by Django 2.1 on 2018-12-29 11:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='TodoItem',
            new_name='Todo',
        ),
    ]