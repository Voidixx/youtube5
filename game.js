function handleChatCommand(command) {
    if (command.includes("!slime")) {
        slimes.push({ x: Math.random() * 780, y: Math.random() * 580 });
    } else if (command.includes("!boost")) {
        player.speed = 6;
        setTimeout(() => player.speed = 3, 3000);
    }
}