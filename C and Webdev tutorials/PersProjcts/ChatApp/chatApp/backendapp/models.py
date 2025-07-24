from django.db import models
from django.contrib.auth.models import User
from django.db.models import Q, UniqueConstraint

# Create your models here.
class PrivateChat(models.Model):
    user1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='chats_as_user1')
    user2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='chats_as_user2')
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        constraints =[
            UniqueConstraint(fields=['user1','user2'], name = 'unique_one_to_one_chat'),     
        ]