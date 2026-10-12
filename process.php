<?php

// Process Contact Form

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Get form data safely
    $name = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $message = trim($_POST["message"] ?? "");

    // Validate fields
    if (
        $name === "" ||
        $email === "" ||
        $message === ""
    ) {
        exit("Error: Please fill in all fields.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        exit("Error: Please enter a valid email address.");
    }

    // Display confirmation
    echo "<!DOCTYPE html>";
    echo "<html lang='en'>";
    echo "<head>";
    echo "<meta charset='UTF-8'>";
    echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    echo "<title>Form Submitted</title>";
    echo "</head>";

    echo "<body>";

    echo "<h1>Thank You, "
        . htmlspecialchars($name, ENT_QUOTES, 'UTF-8')
        . "!</h1>";

    echo "<p>Your message has been received.</p>";

    echo "<a href='index.html'>Back to Home</a>";

    echo "</body>";
    echo "</html>";

} else {

    echo "Please submit the contact form first.";

}

?>