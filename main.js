function Aimbot() {
    var playerX = getPlayerX();
    var playerY = getPlayerY();

    var enemyX = getNearestEnemyX();
    var enemyY = getNearestEnemyY();

    var aimAngle = Math.atan2(enemyY - playerY, enemyX - playerX);

    setAimAngle(aimAngle);
}

function displayESP() {
    var players = getAllPlayers();

    for (var i = 0; i < players.length; i++) {
        // Get the player's coordinates
        var playerX = players[i].x;
        var playerY = players[i].y;

        drawBox(playerX - 10, playerY - 10, 20, 20, "red");

        drawText(players[i].name, playerX, playerY - 20, "white");
    }
}

function drawLine(playerX, playerY, enemyX, enemyY) {
    // Get the canvas context
    var ctx = getCanvasContext();
    ctx.beginPath();
    ctx.moveTo(playerX, playerY);
    ctx.lineTo(enemyX, enemyY);
    ctx.stroke();
}
function drawBox(x, y, width, height, color) {
    var ctx = getCanvasContext();

    ctx.fillStyle = color;

    ctx.fillRect(x, y, width, height);
}

function drawText(text, x, y, color) {

    var ctx = getCanvasContext();

    ctx.fillStyle = color;

    ctx.fillText(text, x, y);
}

function setAimAngle(angle) {
    var aim = getPlayerAim();

    aim.angle = angle;
}

function getNearestEnemyX() {

    var enemies = getEnemies();

    var nearestEnemy;
    var nearestDistance = Infinity;

    for (var i = 0; i < enemies.length; i++) {
        var enemyX = enemies[i].x;
        var enemyY = enemies[i].y;

        var distance = Math.sqrt(Math.pow(enemyX - playerX, 2) + Math.pow(enemyY - playerY, 2));

        if (distance < nearestDistance) {
            nearestEnemy = enemies[i];
            nearestDistance = distance;
        }
    }

    return nearestEnemy.x;
}

function getNearestEnemyY() {
    var enemies = getEnemies();

    var nearestEnemy;
    var nearestDistance = Infinity;

    for (var i = 0; i < enemies.length; i++) {

        var enemyX = enemies[i].x;
        var enemyY = enemies[i].y;

        var distance = Math.sqrt(Math.pow(enemyX - playerX, 2) + Math.pow(enemyY - playerY, 2));

        if (distance < nearestDistance) {
            nearestEnemy = enemies[i];
            nearestDistance = distance;
        }
    }

    return nearestEnemy.y;
}
