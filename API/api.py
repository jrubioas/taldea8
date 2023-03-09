import psycopg2

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/select/{select}/{taldeazenb}")
def read_item(select: str, taldeazenb: str):
    post_id = ""
    post_like = ""
    post_comment = ""
    img = ""
    user_id = ""
    try:
        connection = psycopg2.connect(user=taldeazenb,
                                    password=taldeazenb,
                                    host="zubiribatxi.duckdns.org",
                                    port="5432",
                                    database=taldeazenb)
        cursor = connection.cursor()
        postgreSQL_select_Query = select

        cursor.execute(postgreSQL_select_Query)
        print("Selecting rows from mobile table using cursor.fetchall")
        mobile_records = cursor.fetchall()

        print("Print each row and it's columns values")
        for row in mobile_records:
            post_id = row[0]
            post_like = row[1]
            post_comment = row[2]
            img = row[3]
            user_id = row[4]


    except (Exception, psycopg2.Error) as error:
        print("Error while fetching data from PostgreSQL", error)

    finally:
        # closing database connection.
        if connection:
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")
     

    return {"post_id": post_id,"post_like":post_like,"post_comment":post_comment,"img":img,"user_id":user_id}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str):
    currencies = ['Dollar', 'Euro', 'Pound']
    currencies.append('Yen')
    return {"item_id": item_id, "q": q}



@app.get("/insert/{insertText}/{taldeazenb}")
def read_item(insertText: str, taldeazenb: str):
    egoera = ""
    try:
        connection = psycopg2.connect(user=taldeazenb,
                                    password=taldeazenb,
                                    host="zubiribatxi.duckdns.org",
                                    port="5432",
                                    database=taldeazenb)
        cursor = connection.cursor()
        postgreSQL_select_Query = insertText
        cursor.execute(postgreSQL_select_Query)
        connection.commit()
        egoera ="OK"
    except (Exception, psycopg2.Error) as error:
        egoera =error

    finally:
        # closing database connection.
        if connection:
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")
     
    return {"egoera": "ok"}
