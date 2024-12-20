$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
      e.preventDefault(); // Evita el envío predeterminado del formulario
  
      // Obtener los valores del formulario
      const name = $("#name").val();
      const telefono = $("#telefono").val();
      const correo = $("#correo").val();
      const message = $("#message").val();
  
      // Verificar que los campos no estén vacíos
      if (name === "" || telefono === "" || correo === "" || message =="") {
        $("#statusMessage").text("Por favor, completa todos los campos.").css("color", "red");
        return;
      }
  
      // Enviar datos a través de EmailJS
      emailjs.send("service_nqabfnj", "template_gq34eei", {
        name: name,
        telefono: telefono,
        correo: correo,
        message: message,
      })
      .then(function (response) {
        $("#statusMessage").text("Mensaje enviado con éxito.").css("color", "green");
        $("#contactForm")[0].reset(); // Limpiar el formulario
      })
      .catch(function (error) {
        console.error("Error:", error);
        $("#statusMessage").text("Ocurrió un error. Intenta de nuevo.").css("color", "red");
      });
    });
  });