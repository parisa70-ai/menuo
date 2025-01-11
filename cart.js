// افزودن محصول به سبد خرید
function addToCart(name, price) {
    const product = { name, price };
    const menuUrl = " https://parisa70-ai.github.io/menu.html";
  
    // ذخیره محصول در سبد خرید
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // پیام موفقیت
    alert(`${name} به سبد خرید افزوده شد.`);
  
    // هدایت به صفحه سبد خرید
    window.location.href = 'checkout.html';
  }
  
  // مدیریت کلیک دکمه "افزودن به سبد خرید"
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');
        addToCart(name, price);
      });
    });
  });

  const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-payment', (req, res) => {
  const { name, card } = req.body;
  console.log(`پرداخت توسط ${name} با شماره کارت ${card}`);
  // عملیات ثبت سفارش یا اتصال به درگاه پرداخت انجام شود
  res.send('پرداخت با موفقیت انجام شد!');
});

app.listen(3000, () => console.log('Server is running on port 3000'));
