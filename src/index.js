const Web3 = require('web3');

window.onload = () => {
  // Variables
  let web3;
  let from;

  // Elements
  const connectButton = document.getElementById('connect-button');
  const transactionButton = document.getElementById('transaction-button')
  //const content = document.getElementById('content');
  const account = document.getElementById('account');

  // Form
  const form = document.getElementById('send');
  const amountInput = document.getElementById('amount');
  const recipient = '0xCD643862326271f029CCf7d2952d491692d975Cc';

  // Functions
  const connect = async () => {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);

      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        //content.style.display = 'initial';
        //connectButton.style.display = 'none'
        

        const accounts = await web3.eth.getAccounts();
        
        from = accounts[0];
        connectButton.innerText = from[0] + from[1] + from[2] + from[3] + from[4] + from[5] + '...' + from [from.length-4] + from [from.length-3] + from [from.length -2] + from [from.length-1];
        transactionButton.disabled = false;
      } catch (err) {
        alert('Please accept the request');
      }
    } else {
      alert('Web3 is required');
    }
  };

  const transact = async (event) => {
    event.preventDefault();
    const amount = amountInput.value * 1000000000000000000;

    if (!web3.utils.isAddress(from)) {
      alert('Dirección inválida');
      return;
    }

    if (Number(amount) <= 0) {
      alert('Cantidad inválida');
      return;
    }

    web3.eth.sendTransaction({
      from,
      to: recipient,
      value: amount
    });
  };

  // Listeners
  connectButton.onclick = connect;
  transactionButton.onclick = transact;
  form.onsubmit = transact;
  

};
