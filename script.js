import { updateGround, setupGround } from "./ground.js"
import { updateDino, setupDino } from "./dino.js"
const WORLD_WIDTH=100
const WORLD_HEIGHT=30
const SPEED_SCALE_INCREASE=0.00001
var score
const worldElem=document.querySelector('[data-world]')
const scoreElem=document.querySelector('[data-score]')

setPixelToWorldScale()
window.addEventListener("resize",setPixelToWorldScale)
document.addEventListener("keydown",handleStart(),{once:true})
function setPixelToWorldScale(){
    let worldToPixelScale
    if(window.innerWidth/window.innerHeight<WORLD_WIDTH/WORLD_HEIGHT){
        worldToPixelScale=window.innerHeight/WORLD_WIDTH
    }
    else {
        worldToPixelScale=window.innerHeight / WORLD_WIDTH
        
    }
    worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
    worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}
var lastTime=0
function update(time){
    window.requestAnimationFrame(update)
    if(lastTime===null){
        lastTime=time
        
        window.requestAnimationFrame(update)
        return 

   
}

const delta= time - lastTime
updateGround(delta,1)
updateDino(delta,1)
console.log(delta)
lastTime=time

window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)
let speedScale
function handleStart(){
    lastTime=null
    speedScale=1
    setupGround()
    setupDino()
    window.requestAnimationFrame(update)
}
function updateSpeedScale(delta){
    speedScale+=delta*SPEED_SCALE_INCREASE


}
function updateScore(delta){
    score +=.01
    scoreElem.textContent=Math.floor(score)
}

