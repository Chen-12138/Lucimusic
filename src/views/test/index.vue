<template>
<div>
  <div id="Border"></div>
  <div id="Color"></div>
</div>
</template>

<script>
window.onload = function() {
    let border = document.getElementById("#Border")
    let color = document.getElementById('Color')
    document.onmousemove = function(event){
        let x = event.clientX
        let y = event.clientY
        color.style.setProperty('--x',(x*-1)+100+'px')
        color.style.setProperty('--y',(y*-1)+100+'px')
        color.style.setProperty('--x1',x-100+'px')
        color.style.setProperty('--y1',y-100+'px')
    }
}
export default {

}
</script>

<style>
#Border, #Color{
    width: 946px;
    height: 544px;
}
#Border{
    background: url("../../assets/border.png");
    position: absolute;
}
#Color{
    width: 200px;
    height: 200px;
    border-radius: 50%;

    transform: translate(var(--x1), var(--y1));
    /* transform-origin:50% 50%; */
    background: url("../../assets/color.png") var(--x) var(--y) no-repeat;
    position: absolute;
}
</style>