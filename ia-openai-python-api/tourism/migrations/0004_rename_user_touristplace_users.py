# Generated by Django 5.1 on 2024-08-12 20:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tourism', '0003_remove_touristplace_user_touristplace_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='touristplace',
            old_name='user',
            new_name='users',
        ),
    ]
