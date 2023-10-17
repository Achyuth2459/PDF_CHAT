
from django.http import  JsonResponse
from .models import PDF, Message
from .serializers import MessageSerializer, PDFSerializer
from django.views.decorators.csrf import csrf_exempt
from .embeddings import vector_embeddings




@csrf_exempt
def upload_pdf(request):
    if request.method=='GET':
        pdfs = PDF.objects.all()
        pdf_serializer = PDFSerializer(pdfs, many=True)
        return JsonResponse(pdf_serializer.data, safe=False)

    elif request.method=='POST' and request.FILES['pdfFile']:
        pdf_data=request.FILES['pdfFile']
        pdf_instance = PDF(pdf_file=pdf_data)
        pdf_instance.save()
        return JsonResponse("Added Successfully!!" , safe=False)
    else:
         return JsonResponse("Failed" , safe=False)
    


@csrf_exempt
def chat_with_pdf(request):
    if request.method=='GET':
        id =request.GET.get('id')
        query=request.GET.get('query')
        response= vector_embeddings(id,query)
        return JsonResponse(response,safe=False)
        
def store_results(request):
     if request.method=='GET':
        id =request.GET.get('id')
        question =request.GET.get('question')
        answer = request.GET.get('answer')
        pdfs = PDF.objects.all()
        message=Message(pdf_files = pdfs[int(id)],
                        question = question,answer = answer)
        message.save()
        return JsonResponse("", safe=False)

def send_results(request):
    if request.method=='GET':
      id =request.GET.get('id')
      pdfs = PDF.objects.all()
      pdf=pdfs[int(id)]
      messages=Message.objects.filter(pdf_files=pdf)
      message_serializer = MessageSerializer(messages, many=True)
      return JsonResponse(message_serializer.data, safe=False)
    
         
        




    


  
    



