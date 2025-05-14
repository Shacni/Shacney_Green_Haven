document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('paymentModal');
  const closeBtn = document.querySelector('.close');
  const buyButtons = document.querySelectorAll('.buy-btn');
  const orderSummary = document.getElementById('orderSummary');
  const categoryButtons = document.querySelectorAll('.category-btn');
  const productItems = document.querySelectorAll('.product-item');

  // Category filtering
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      
      // Update active button
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter products
      productItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Buy button functionality
  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.getAttribute('data-product');
      const price = button.getAttribute('data-price');
      
      orderSummary.innerHTML = `
        <h3>Order Details</h3>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Price:</strong> KSh ${price}</p>
      `;
      
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});