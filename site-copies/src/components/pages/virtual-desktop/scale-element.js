export default (element, dragbar, moveElement) => {

    dragbar.addEventListener('mousedown', handleMouseDownScale);
    document.addEventListener('mouseup', () => document.removeEventListener('mousemove', handleMouseMoveScale))
    
    let x1 = 0, x2 = 0, y1 = 0, y2 = 0;

    let currentWidth;
    let currentHeight;

    function handleMouseDownScale(e) {
        currentWidth = parseInt(element.style.width);
        currentHeight = parseInt(element.style.height);

        x1 = e.clientX;
        y1 = e.clientY;
        document.addEventListener('mousemove', handleMouseMoveScale)
    }

    function handleMouseMoveScale(e) {
        x2 = currentWidth + (e.clientX - x1);
        y2 = currentHeight + (e.clientY - y1);

        moveElement(x2, y2);
    }
}