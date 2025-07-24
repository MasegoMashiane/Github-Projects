from django.contrib import admin
from .models import PrivateChat, Message

# Register your models here.
admin.site.register(PrivateChat)
admin.site.register(Message)