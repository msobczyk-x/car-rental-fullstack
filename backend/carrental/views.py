from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CarSerializer, CustomerSerializer, LocationSerializer
from .models import Car, Customer, Location


class CarView(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    
    
class CustomerView(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    
class LocationView(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer