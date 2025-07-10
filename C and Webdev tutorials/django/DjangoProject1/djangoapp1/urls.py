from django.urls import path
from . import views

# I need to define a list that contains 
# different addresses and their associated views

# Mapping at the app level
urlpatterns = [
    path('function', views.hello_world ),
    path('class', views.HelloEthiopia.as_view())
]