const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email-input');
const messageContainer = document.getElementById('message-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = emailInput.value;

  try {
    const response = await fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    const result = await response.text();
    messageContainer.innerText = result;
  } catch (error) {
    console.error('Error:', error);
    messageContainer.innerText = 'An error occurred while subscribing.';
  }
});
