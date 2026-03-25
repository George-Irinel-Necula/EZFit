from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class DietPlans(models.Model):
    title=models.CharField(max_length=255,blank=False,default="Title")
    information=models.CharField(blank=False,default="")
    date_created=models.DateTimeField(auto_now_add=True)
    user_id=models.ForeignKey(User,related_name="dietPlan",on_delete=models.CASCADE )

    def __str__(self):
        return self.title

    