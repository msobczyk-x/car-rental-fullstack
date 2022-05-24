from django.contrib import admin
from .models import FuelType, CarCategory, Location, Customer, Car, Discount, Payment, Booking


class CarAdmin(admin.ModelAdmin):
    car_display = ('brand_name', 'model_name', 'production_year', 'horse_power', 'fuel_consumption', 'fuel_type', 'availability_flag', 'description', 'image', 'car_category', 'location')
    customer_display = ('first_name', 'last_name', 'email', 'phone_number', 'pesel', 'street', 'city', 'zipcode')
    location_display = ('street', 'city', 'zipcode')
    carcategory_display = ('car_category_name', 'number_of_luggage_bags','number_of_seats', 'price_per_day')
    fueltype_display = ('fuel_name')
    discount_display = ('discount_name', 'discount_percentage', 'expire_date')
    payment_display = ('total_amount', 'discount_amount', 'payment_status' 'payment_date', 'payment_method')
list = [Car, Customer, Location, CarCategory, FuelType, Discount, Payment, Booking]

admin.site.register(list, CarAdmin)



    
      
