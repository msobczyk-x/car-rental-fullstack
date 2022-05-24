from rest_framework import serializers
from .models import FuelType, CarCategory, Location, Customer, Car, Discount, Payment, Booking

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id', 'model_name','brand_name', 'production_year', 'horse_power', 'fuel_consumption', 'fuel_type', 'availability_flag', 'description', 'image', 'car_category', 'location')