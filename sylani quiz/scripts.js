function execCmd(command) {
    document.execCommand(command, false, null);
}

// Optional: Add functionality to handle specific commands that require a value (e.g., font size, color)
function execCommandWithArg(command, arg) {
    document.execCommand(command, false, arg);
}

