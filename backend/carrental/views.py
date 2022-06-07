from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CarSerializer, CustomerSerializer, LocationSerializer, CategorySerializer
from .models import Car, Customer, Location, CarCategory


class CarView(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    
    
class CustomerView(viewsets.ModelViewSet):

    serializer_class = CustomerSerializer
    def get_queryset(self):
        queryset = Customer.objects.all()
        username = self.request.query_params.get('username')
        if username is not None:
            queryset = queryset.filter(username=username)
        return queryset
    
class LocationView(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    
class CategoryView(viewsets.ModelViewSet):
    queryset = CarCategory.objects.all()
    serializer_class = CategorySerializer
    
    
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from carrental.serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

# Create your views here.


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
        '/api/prediction/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)





from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from .models import Customer
from .serializers import CustomerSerializer
from rest_framework.decorators import api_view

