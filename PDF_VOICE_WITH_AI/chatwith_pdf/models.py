from django.db import models
class Message(models.Model):
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

class PDF(models.Model):
    pdf_file = models.FileField(upload_to='')
   