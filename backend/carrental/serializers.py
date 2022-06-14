from rest_framework import serializers
from .models import CarCategory, Customer, Car, Location, Booking, Payment

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id', 'model_name','brand_name', 'production_year', 'horse_power', 'fuel_consumption', 'fuel_type', 'availability_flag', 'description', 'image', 'car_category', 'location')
        
        
class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ('id','username','first_name', 'last_name', 'phone_number','email', 'street', 'city', 'zipcode', 'pesel')

    
class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('id','location_name', 'street', 'city', 'zipcode')
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CarCategory
        fields = ('id','category_name', 'number_of_luggage_bags', 'number_of_seats', 'cost_per_day')
        
class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ('id', 'customer', 'car', 'from_date', 'ret_date','from_time', 'ret_time', 'discount', 'amount', 'pickup_location', 'drop_location')
        
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ('id', 'booking', 'total_amount', 'discount_amount', 'payment_status', 'payment_date', 'payment_method')
        


from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        # ...

        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user