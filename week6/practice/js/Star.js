class Star{
    
    constructor(){
        this.node=document.createElement('div');
        this.node.classList.add('star')
        const size = Math.random()*3+1;
        
        this.node.style.width = `${size}px`;
        this.node.style.height = `${size}px`;
        
        this.node.style.top = `${Math.random() * 100}%`;
        this.node.style.left = `${Math.random() * 100}%`;

        this.node.style.animationDuration = `${size}s`;


        document.body.appendChild(this.node);
    }

}


//export vs export default 차이
export default Star;