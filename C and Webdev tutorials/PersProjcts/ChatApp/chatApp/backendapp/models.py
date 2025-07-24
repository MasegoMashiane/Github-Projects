from django.db import models
from django.contrib.auth.models import User
from django.db.models import Q, UniqueConstraint
from django.utils import timezone

# Create your models here.
class PrivateChat(models.Model):
    user1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='chats_as_user1')
    user2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='chats_as_user2')
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        constraints =[
            UniqueConstraint(fields=['user1','user2'], name = 'unique_one_to_one_chat'),     
        ]
    
    def __str__(self):
        return f'chat between {self.user1.username} & {self.user2.username}'
        
    def participants(self):
        return [self.user1, self.user2]
        
    @staticmethod
    def get_or_create_chat(user_a, user_b):
        chat = PrivateChat.objects.filter(Q(user1=user_a, user2=user_b)| Q(user1=user_b, user2=user_a)).first()
        if chat:
            return chat
        return PrivateChat.objects.create(user1=user_a, user2=user_b)
    
              
class Message(models.Model):

    chat = models.ForeignKey(PrivateChat, on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    text = models.TextField(max_length=2000)
    timestamps = models.DateTimeField(default=timezone.now)
    is_read = models.BooleanField(default=False)
    
    def __str__(self):
        return f'{self.sender.username}: {self.text[:30]}'