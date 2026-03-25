from rest_framework import serializers
from .models import DietPlans
from django.contrib.auth.models import User

class DietPlanSerializer(serializers.ModelSerializer):
    username = serializers.StringRelatedField(source="user_id", read_only=True)
    userselect = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source="user_id",
        write_only=True
    )
    date_created = serializers.DateTimeField(format="%d-%m-%Y", read_only=True)

    class Meta:
        model = DietPlans
        fields = ['id', 'username', 'title', 'information', 'date_created', 'userselect']

class DietPlanSerializer2(serializers.ModelSerializer):
    class Meta:
        model=DietPlans
        fields=['id','title','information','date_created']

class UserSerializer(serializers.ModelSerializer):
    dietPlans=DietPlanSerializer2(source='dietPlan',read_only=True,many=True)
    class Meta:
        model=User
        fields=['id','username','first_name',"last_name",'email','dietPlans']