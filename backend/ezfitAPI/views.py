from django.shortcuts import render
from rest_framework import generics
from .models import DietPlans
from .serializers import DietPlanSerializer,UserSerializer
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.contrib.auth.models import User
from rest_framework.response import Response
# Create your views here.

class DietPlanAdminView(generics.ListCreateAPIView):#Arata toate dietplanurile
    queryset=DietPlans.objects.all()
    serializer_class=DietPlanSerializer
    permission_classes=[IsAdminUser]
g
#Mai fac un view in care daca userul care acceseaza taskul are acelasi username sa poata sa editeze/stearga taskul
class DietPlanView(generics.RetrieveUpdateDestroyAPIView):
    queryset=DietPlans.objects.all()
    serializer_class=DietPlanSerializer
    permission_classes=[IsAuthenticated]

    def retrieve(self,request,*args,**kwargs):

        return super().retrieve(request,*args,**kwargs)



class UserDietAdminView(generics.ListCreateAPIView):#Arata toti useri cu toate diet planurile lor
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsAdminUser]

class SingleUserDietView(generics.RetrieveAPIView):#Arata un user cu toate diet planurile lor
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        user=request.user.id
        instance = self.get_object()
        if not user==instance.id:
            return Response({'response':"Logged user doesnt match the one retrieved"},status=401)
        else:
            return super().retrieve(request, *args, **kwargs)
