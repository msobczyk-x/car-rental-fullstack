from rest_framework import serializers
from .models import FuelType, CarCategory, Location, Customer, Car, Discount, Payment, Booking

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id', 'model_name','brand_name', 'production_year', 'horse_power', 'fuel_consumption', 'fuel_type', 'availability_flag', 'description', 'image', 'car_category', 'location')
        
        
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'first_name', 'last_name', 'phone_number','email', 'street', 'city', 'zipcode', 'pesel')