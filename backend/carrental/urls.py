from django.urls import path
from . import views
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from carrental import views
from django.conf.urls.static import static 
from django.conf import settings
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)




urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes)
]