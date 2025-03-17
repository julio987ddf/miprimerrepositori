<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contacto - World Tour</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <header class="bg-primary text-white text-center py-4">
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte en tu próxima aventura</p>
    </header>

    <div class="container my-5">
        <div class="row">
            <div class="col-md-6">
                <h2>Información de contacto</h2>
                <p><strong>Dirección:</strong> Calle 123, Ciudad, País</p>
                <p><strong>Teléfono:</strong> +123 456 789</p>
                <p><strong>Email:</strong> contacto@worldtour.com</p>
            </div>

            <div class="col-md-6">
                <h2>Envíanos un mensaje</h2>
                <form id="contact-form">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Mensaje</label>
                        <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
                <p id="response-message" class="mt-3"></p>
            </div>
        </div>
    </div>

    <footer class="bg-dark text-white text-center py-3">
        <p>&copy; 2025 World Tour - Todos los derechos reservados.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
    <script>
        (function() {
            emailjs.init("F_HGxjxxjIcpVQhXP"); // Tu User ID de EmailJS
        })();

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            emailjs.send("service_t5hlinb", "template_qb1cga8", {
                to_email: "jhoselagarez@gmail.com",
                from_name: document.getElementById("name").value,
                from_email: document.getElementById("email").value,
                message: document.getElementById("message").value
            }).then(function(response) {
                console.log("Éxito:", response);
                document.getElementById("response-message").innerHTML = "<span class='text-success'>Mensaje enviado con éxito.</span>";
                document.getElementById("contact-form").reset();
            }, function(error) {
                console.error("Error:", error);
                document.getElementById("response-message").innerHTML = "<span class='text-danger'>Error al enviar mensaje. Revisa la consola.</span>";
            });
        });
    </script>

</body>
</html>
