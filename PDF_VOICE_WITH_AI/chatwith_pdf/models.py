from  django.db import models

from django.contrib.postgres.fields import ArrayField


class PDF(models.Model):
    pdf_file = models.FileField(upload_to='')


class Message(models.Model):
    pdf_files=models.ForeignKey(PDF,on_delete=models.CASCADE,default=0)
    question = models.TextField(default="No question")
    answer = models.TextField(default="No answer")



   
  


   