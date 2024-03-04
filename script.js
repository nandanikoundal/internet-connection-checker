window.addEventListener("load", checkInternetConnection);

function checkInternetConnection() {

    const statustext = document.getElementById('statustext');
    const ipaddresstext = document.getElementById('ipaddresstext');
    const networkstrengthtext = document.getElementById('networkstrengthtext')

    statustext.textContent = 'checking....';

    if (navigator.online) {
        fetch('https://api64.ipify.org?format=json' )
            .then((response) => response.json())
            .then((data) => {
                ipaddresstext.textContent = data.ip;
                statustext.textContent = 'connected'

                const connection = navigator.connection;

                const networkstrength = connection ?connection.downlink + 'Mbps' : 'unknown';
                networkstrengthtext.textContent = networkstrength;

            })
            .catch(() => {
                statustext.textContent = 'disconnected';
                ipaddresstext.textContent = "-"
                networkstrengthtext.textContent = "-"
            })


    } else {
        statustext.textContent = 'disconnected';
        ipaddresstext.textContent = "-"
        networkstrengthtext.textContent = "-"
    }
}