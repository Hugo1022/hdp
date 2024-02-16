const connectButton = document.getElementById("connect-button");
const userWallet = document.getElementById("connect-button");
const transactionButton = document.getElementById("transaction-button");
document.addEventListener('DOMContentLoaded', (event) => {
    if (window.ethereum) {
        loginWithMetaMask();
        ethereum.on("message", (message) => console.log(message));
        ethereum.on("connect", (info) => {
            console.log(`Connected to network ${info}`);});
        ethereum.on("disconnect", (error) => {
            console.error(`Disconnected from network ${error}`);});
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        
    } else {
        alert("Please install MetaMask to use this app");
    };
});
connectButton.addEventListener("click", () =>  {
        loginWithMetaMask();
    });

function loginWithMetaMask () {
        ethereum.request({ method: "eth_requestAccounts" })
        .catch((e) => {
            console.error(e.message);
        });
        window.userWalletAddress = accounts[0];
        userWallet.innerText = window.userWalletAddress[0] + window.userWalletAddress[1] + window.userWalletAddress[2] + window.userWalletAddress[3] + window.userWalletAddress[4] + window.userWalletAddress[5] + "..." +window.userWalletAddress[window.userWalletAddress.length-4] + window.userWalletAddress[window.userWalletAddress.length-3]+window.userWalletAddress[window.userWalletAddress.length-2]+window.userWalletAddress[window.userWalletAddress.length-1];
};