from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from database import get_connection

app = FastAPI(
    title="TECHNOVA API",
    description="Backend API for TechNova Technology Club",
    version="1.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Member(BaseModel):
    name: str
    email: str
    phone: str
    technology: str
    message: str


@app.get("/")
def home():
    return {
        "message": "TECHNOVA API is running 🚀"
    }


@app.post("/join")
def join_technova(member: Member):

    try:
        connection = get_connection()
        cursor = connection.cursor()

        query = """
            INSERT INTO members
            (name, email, phone, technology, message)
            VALUES (%s, %s, %s, %s, %s)
        """

        values = (
            member.name,
            member.email,
            member.phone,
            member.technology,
            member.message
        )

        cursor.execute(query, values)
        connection.commit()

        cursor.close()
        connection.close()

        return {
            "success": True,
            "message": "Welcome to TECHNOVA 🚀"
        }

    except Exception as error:
        print("DATABASE ERROR:", error)

        return {
            "success": False,
            "error": str(error)
        }
@app.get("/members")
def get_members():

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute("SELECT * FROM members ORDER BY id DESC")

    members = cursor.fetchall()

    cursor.close()
    connection.close()

    return members