 
  document.getElementById("noButton").addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  });


  document.getElementById("yesButton").addEventListener("click", function() {
    var modal = document.getElementById("myModal2");    
    modal.classList.add("show"); // Agrega la clase show al modal
    modal.style.display = "block";
  });
  
  document.getElementById("closed").addEventListener("click", function() {
    //cerrar modal
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    // redireccionar a url de youtube
    window.location.href = "https://www.youtube.com/watch?v=lsbqH5bJURc&ab_channel=Sebasti%C3%A1nYatra";
  });

  document.getElementById("cancel").addEventListener("click", function() {
    var modal = document.getElementById("myModal2");
    modal.style.display = "none";
  });

  document.getElementById("cerrar").addEventListener("click", function() {
    // redireccionar a url de youtube
    window.location.href = "https://www.youtube.com/watch?v=lsbqH5bJURc&ab_channel=Sebasti%C3%A1nYatra";
  });