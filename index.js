
(function () {
let canvas = document.querySelector('canvas');
let width = window.innerWidth, height = window.innerHeight;
let noOfCircles = parseInt(prompt('No Of Circles: '));
if(noOfCircles > 10){
    throw 'nop';
}
let c = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;
function randomColorGenerator() {
    return `rgba(${(Math.random()*100)%256},${(Math.random()*100)%256},${(Math.random()*100)%256},${(Math.random()*100)%256})`;
}
function Ball(x, y, radius, speed, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speed[0];
    this.speedY = speed[1];
    this.color = color;
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
    }
    this.update = function() {
        if(this.x> width || this.x < radius){
            this.speedX = -this.speedX;
            this.color = randomColorGenerator();
        }
        if(this.y> height || this.y < radius){
            this.speedY = (this.speedY + 1)%8;
            this.color = randomColorGenerator();
            this.speedY = -this.speedY;
        }
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        this.draw();
    }
}
let balls = [];
for(let i=0;i<noOfCircles;i++){
    let radius = Math.abs(Math.floor((Math.random()*100)%51));
    let x = Math.abs(Math.floor(Math.random()*width - radius));
    let y = Math.abs(Math.floor(Math.random()*height - radius));
    let speed = [5,5];
    let color = randomColorGenerator();
    balls.push(new Ball(x,y,radius,speed,color));
}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, width, height);
    for(let i=0;i< balls.length;i++){
        balls[i].update();
    }
}
animate();
})()