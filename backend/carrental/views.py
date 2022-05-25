from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CarSerializer, CustomerSerializer
from .models import Car, Customer


class CarView(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    
    
class CustomerView(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer