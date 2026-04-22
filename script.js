const terminal = document.getElementById('terminal');
const statusText = document.getElementById('status-text');

const commands = [
    'fetching monad_ecosystem_data...',
    'searching for active bounties > $200...',
    'found 3 high-impact opportunities.',
    'analyzing parallel_evm performance metrics...',
    'optimizing smart contract throughput...',
    '0xOmo status: ENGAGED',
    'generating technical narrative for X...',
    'monitoring discord community activity...'
];

let cmdIndex = 0;

function typeCommand() {
    if (cmdIndex < commands.length && terminal) {
        const line = document.createElement('div');
        line.className = 'line';
        line.innerHTML = `<span class="prompt">></span> ${commands[cmdIndex]}`;
        terminal.appendChild(line);
        
        terminal.scrollTop = terminal.scrollHeight;
        
        cmdIndex++;
        setTimeout(typeCommand, 1500 + Math.random() * 1000);
    } else if (terminal) {
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = 'line';
            line.innerHTML = `<span class="prompt">></span> system idle. waiting for next instruction.`;
            terminal.appendChild(line);
        }, 2000);
    }
}

function updateStatus() {
    if (!statusText) return;
    const statuses = [
        'Scanning Monad Mainnet...',
        'Compiling Contracts...',
        'Tracking Gigs...',
        'Optimizing Brand...',
        'System: Elite'
    ];
    const rand = Math.floor(Math.random() * statuses.length);
    statusText.innerText = statuses[rand];
    setTimeout(updateStatus, 5000);
}

window.onload = () => {
    setTimeout(typeCommand, 1000);
    setTimeout(updateStatus, 3000);
};