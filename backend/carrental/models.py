from django.db import models


class FuelType(models.Model):
    """
    Fuel type model
    """

    fuel_name = models.CharField(max_length=100)

    def __str__(self):
        return self.fuel_name


class CarCategory(models.Model):
    """
    Car category model
    """

    category_name = models.CharField(max_length=100)
    number_of_luggage_bags = models.IntegerField()
    number_of_seats = models.IntegerField()
    cost_per_day = models.FloatField()

    def __str__(self):
        return self.category_name


class Location(models.Model):
    """Location details model"""

    location_name = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zipcode = models.IntegerField()

    def __str__(self):
        return self.location_name



class Customer(models.Model):
    """Customer details model"""
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.IntegerField()
    email = models.EmailField()
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zipcode = models.IntegerField()
    pesel = models.IntegerField()
    
    def __str__(self):
        return self.first_name+" "+self.last_name

class Car(models.Model):
    """
    Car model
    """

    model_name = models.CharField(max_length=100)
    brand_name = models.CharField(max_length=100)
    production_year = models.IntegerField()
    horse_power = models.IntegerField()
    fuel_consumption = models.FloatField()
    fuel_type = models.ForeignKey(FuelType, on_delete=models.CASCADE)
    availability_flag = models.BooleanField(default=True)
    description = models.TextField()
    image = models.ImageField(upload_to="car_images")
    car_category = models.ForeignKey(CarCategory, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)

    def __str__(self):
        return self.brand_name + self.model_name


class Discount(models.Model):
    """
    Discount model
    """

    discount_name = models.CharField(max_length=100)
    discount_percentage = models.IntegerField()
    expire_date = models.DateField()

    def __str__(self):
        return self.discount_name
    
class Booking(models.Model):
    """
    Booking model
    """

    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    from_date = models.DateField()
    ret_date = models.DateField()
    from_time = models.TimeField()
    ret_time = models.TimeField()
    discount = models.ForeignKey(Discount, on_delete=models.CASCADE, blank=True, null=True)
    amount = models.FloatField()
    pickup_location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name="pickup_location")
    drop_location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name="drop_location")

    def __str__(self):
        return self.customer.first_name + self.customer.last_name + self.car.brand_name + self.car.model_name
    
class Payment(models.Model):
    """
    Payment model
    """

    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    total_amount = models.FloatField()
    discount_amount = models.FloatField(blank=True, null=True)
    payment_status = models.BooleanField(default=False)
    payment_date = models.DateField(blank=True, null=True)
    payment_time = models.TimeField(blank=True, null=True)
    payment_type = models.TimeField(blank=True, null=True)