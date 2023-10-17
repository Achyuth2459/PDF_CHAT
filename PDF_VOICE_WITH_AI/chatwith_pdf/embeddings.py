import fitz
from langchain.text_splitter import RecursiveCharacterTextSplitter
from dotenv import load_dotenv
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.llms import OpenAI
from langchain.llms import OpenAI
from langchain.chains.question_answering import load_qa_chain
from langchain.callbacks import get_openai_callback
import os
import pickle


from .serializers import PDFSerializer

from .models import PDF


load_dotenv()
def vector_embeddings(id,query):
        pdfs = PDF.objects.all()
        pdf_serializer = PDFSerializer(pdfs, many=True)
        pdfs=pdf_serializer.data
        store_name = pdfs[int(id)]["pdf_file"][7:-4]
        project_directory = os.getcwd()  
        file_path = os.path.join(project_directory,f"{store_name}.pkl")
        if os.path.exists(f"{store_name}.pkl"):
            with open(file_path, "rb") as f:
                VectorStore = pickle.load(f)
        else: 
            folder_path = os.path.join(project_directory,"VectorEmbeddings")
            file_path_2 = os.path.join(folder_path,f"{store_name}.pkl")   
            text = ""
            doc = fitz.open('.'+pdfs[int(id)]["pdf_file"])
            for page_num in range(len(doc)):
              page = doc.load_page(page_num)
              text += page.get_text()
            text_splitter = RecursiveCharacterTextSplitter(
             chunk_size=1000,
             chunk_overlap=200,
             length_function=len
             )
            chunks = text_splitter.split_text(text=text)
            embeddings = OpenAIEmbeddings()
            VectorStore = FAISS.from_texts(chunks, embedding=embeddings)
            with open(file_path_2, "wb") as f:
                pickle.dump(VectorStore, f)
                
    
        if query :
           docs = VectorStore.similarity_search(query=query, k=3)
 
           llm = OpenAI()
           chain = load_qa_chain(llm=llm, chain_type="stuff")
           with get_openai_callback() as cb:
                response = chain.run(input_documents=docs, question=query)   

        # similarities = []
        # for embedding in embeddings:
        #    similarity = compute_similarity(embedding, solution)
        #    similarities.append(similarity) 
        
        return response

