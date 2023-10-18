# Talk with pdfs

#Technologies  
  - Frontend  -  Angular ,Angular material
  - Backend -  Python Django
    
#BAKEND
    - stored the pdfs uploaded from the user in a  model PDF , it stores in media folder  by using api's
    - send back the uploaded pdfs to user interface
    - created Vector Embeddings for uploaded pdfs using python libraries  in Emdeddings.py file
        *langchain , fitz ,dotenv , pickle  etc
    - stored the Embeddings for each pdf in separate file in folder i.e VectorEmbeddings
    - wrote  api's for sending response for user query  by using embeddings of respected pdf
    - store the pdf chats and restored for  pdfs

#Frontend
   - pdfupload component for user inerface for selecting and uploading pdfs 
   - pdfview component for view the uploaded pdfs
   - pdfchat component for interface for chatting with pdfs
   - angular material for styling and icons

# start project
   - Frontend    go to project directory type  ng serve    press enter
   - Backend      go to project directory type  python manage.py runserer  press enter


#Challenges faced 
  - while writing code for creation of vector Embeddings for pdf
  - failed in storing the embeddings in database  instead used the files to store in Backend 



