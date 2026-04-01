from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Создаем роутер
router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet)
router.register(r'products', views.ProductViewSet)

# URL-адреса
urlpatterns = [
    path('', include(router.urls)),
]