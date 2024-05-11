document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const buyButton = document.querySelector(".buy-button");
  
    addToCartButtons.forEach(button => {
      button.addEventListener("click", addToCart);
    });
  
    buyButton.addEventListener("click", goToWhatsApp);
  
    function addToCart(event) {
      const product = event.target.closest(".product");
      const productName = product.querySelector("h2").textContent;
      const productPrice = product.querySelector(".price").textContent;
      
      const cartItems = document.querySelector(".cart-items");
      const newItem = document.createElement("li");
      newItem.classList.add("cart-item");
      newItem.textContent = `${productName} - ${productPrice}`;
      cartItems.appendChild(newItem);
    }
  
    function goToWhatsApp() {
      // Agregar tu número de WhatsApp aquí
      const phoneNumber = "tu_numero_de_whatsapp";
      // Crear el enlace de WhatsApp con el mensaje y el número de teléfono
      const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola,%20quiero%20comprar%20los%20siguientes%20productos:%0A`;
      // Redireccionar a WhatsApp
      window.location.href = whatsappLink;
    }
  });
  