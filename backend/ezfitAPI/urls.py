from django.contrib import admin
from django.urls import path,include
from .views import DietPlanAdminView,UserDietAdminView,SingleUserDietView,DietPlanView

urlpatterns = [
    path('dietplans/',DietPlanAdminView.as_view()),
    path('dietplans/<int:pk>',DietPlanView.as_view()),
    path('users/dietplans/',UserDietAdminView.as_view()),
    path('users/dietplans/<int:pk>',SingleUserDietView.as_view()),
]