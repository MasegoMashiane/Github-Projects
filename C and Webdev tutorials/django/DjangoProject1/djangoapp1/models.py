from django.db import models

# Create your models here.
class MenuItem(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
# This model is going to create a database table 
# with colums name, and price
# To create this table we need to create 
# Migrations => Converts whatever changes
#               we make in the model.py file
#               to the actual database.
# To make a magration you should use the
# following two commands:
# python manage.py makemigrations
# python manage.py migrate
# A file called db.sqlite will be created
# This is where all our models will be stored

class Reservation(models.Model):
    first_name = models.CharField(max_length=255)
    last_Name = models.CharField(max_length=255)
    guest_count = models.IntegerField()
    reservation_time = models.DateField(auto_now=True)
    comments = models.CharField(max_length=1000)