from flask import Flask, request, render_template_string

app = Flask(__name__)

# Home Page
HTML_PAGE = """
<!DOCTYPE html>
<html>
<head>
    <title>My Website - Python Backend</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>Python backend is working!</p>

    <h2>Contact Us</h2>

    <form action="/contact" method="POST">
        <input type="text" name="name"
               placeholder="Enter your name" required>
        <br><br>

        <input type="email" name="email"
               placeholder="Enter your email" required>
        <br><br>

        <textarea name="message"
                  placeholder="Enter your message"
                  required></textarea>
        <br><br>

        <button type="submit">Submit</button>
    </form>
</body>
</html>
"""


@app.route("/")
def home():
    return render_template_string(HTML_PAGE)


@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name", "").strip()
    email = request.form.get("email", "").strip()
    message = request.form.get("message", "").strip()

    if not name or not email or not message:
        return "Please fill in all fields.", 400

    print("New Contact Form Submission")
    print("Name:", name)
    print("Email:", email)
    print("Message:", message)

    return f"""
    <h1>Thank You, {name}!</h1>
    <p>Your message has been received.</p>
    <a href="/">Back to Home</a>
    """


if __name__ == "__main__":
    app.run(debug=True)
    