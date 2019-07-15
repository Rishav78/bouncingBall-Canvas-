
let canvas = document.querySelector('canvas');
let width = window.innerWidth, height = window.innerHeight;
canvas.width = width;
canvas.height = height;
let c = canvas.getContext('2d');

let balls = [[],[]];
let speed = [[],[]];
let color = [];
let noOfCircles = parseInt(prompt('No Of Circles: '));
for(let i=0;i<noOfCircles;i++){
    balls[0].push(Math.random()*width - 30);
    balls[1].push(Math.random()*height - 30);
    speed[0].push(5);
    speed[1].push(5);
    color.push('rgba(0,0,0,1)');
}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, width, height);
    for(let i=0;i<noOfCircles;i++){
        if((balls[0][i]+30+speed[0][i])> width || balls[0][i] < 30){
            speed[0][i] = -speed[0][i];
            color[i] = `rgba(${(Math.random()*100)%256},${(Math.random()*100)%256},${(Math.random()*100)%256},${(Math.random()*100)%256})`;
        }
        if((balls[1][i]+30+speed[1][i])> height || balls[1][i]-30 < 0){
            speed[1][i] = (speed[1][i] + 1)%8;
            color[i] = `rgba(${(Math.random()*100)%256},${(Math.random()*100)%256},${(Math.random()*100)%256},${(Math.random()*100)%256})`;
            speed[1][i] = -speed[1][i];
        }
        balls[0][i] = balls[0][i] + speed[0][i];
        balls[1][i] = balls[1][i] + speed[1][i];
        c.beginPath();
        c.arc(balls[0][i], balls[1][i], 30, 0, Math.PI*2, false);
        c.fillStyle = color[i];
        c.fill();
        c.stroke();
    }
}

animate();