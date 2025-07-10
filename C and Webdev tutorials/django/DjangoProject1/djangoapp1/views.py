from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
# Create your views here. Function Based

def hello_world(request):
    return HttpResponse("hello world")

# When a user goes to the address linked 
# with the header word "VIEW"
# The function returns a response "hello world"


# Create your views here. Class Based
class HelloEthiopia(View):
    def get(self, request):
        return HttpResponse('hello Ethiopia')
# When a user send a get request to this view
# it returns a HTTP response


# NEXT STEP WILL BE, TO LINK THE VIEW FUNCTIONS 
# AND CLASSES TO ADDRESS WHICH IS WHAT IS REFERRED 
# TO AS URL mapping 