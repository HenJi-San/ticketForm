from flask import Flask, request, jsonify
import sqlite3
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def init_db():
    with sqlite3.connect("database.db") as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS tickets (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                full_name TEXT NOT NULL,
                email TEXT NOT NULL,
                github TEXT,
                code TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()

@app.route("/submit", methods=["POST"])
def submit_ticket():
    data = request.get_json()
    image = data.get("image")
    full_name = data.get("fullName")
    email = data.get("email")
    github = data.get("github")
    code = data.get("code")

    if not full_name or not email or not github or not code:
        return jsonify({"error": "Missing required fields"}), 400
    
    # Сохранение изображения в виде base64 (если загружено)
    image_base64 = None
    if image:
        image_base64 = image  # Ожидается, что frontend передаёт base64 строку
    
    with sqlite3.connect("database.db") as conn:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO tickets (image, full_name, email, github, code) VALUES (?, ?, ?, ?, ?)",
                       (image_base64, full_name, email, github, code))
        ticket_id=cursor.lastrowid
        conn.commit()
    
    return jsonify({"success": True, "message": "Ticket submitted successfully", "id": ticket_id})

@app.route("/ticket/<int:ticket_id>", methods=["GET"])
def get_ticket(ticket_id):
    with sqlite3.connect("database.db") as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM tickets WHERE id = ?", (ticket_id,))
        ticket = cursor.fetchone()

    if ticket:
        return jsonify({
            "id": ticket[0],
            "image": ticket[1],
            "fullName": ticket[2],
            "email": ticket[3],
            "github": ticket[4],
            "code": ticket[5],
            "created_at": ticket[6]
        })
    else:
        return jsonify({"error": "Ticket not found"}), 404

if __name__ == "__main__":
    init_db()
    app.run(debug=True)
