export default (element, dragbar, moveElement) => {

    dragbar.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', () => document.removeEventListener('mousemove', handleMouseMove))
    
    let x1 = 0, x2 = 0, y1 = 0, y2 = 0;

    let currentX;
    let currentY;

    function handleMouseDown(e) {
        currentX = parseInt(element.style.left);
        currentY = parseInt(element.style.top);

        x1 = e.clientX;
        y1 = e.clientY;
        document.addEventListener('mousemove', handleMouseMove)
    }

    function handleMouseMove(e) {
        x2 = currentX + (e.clientX - x1);
        y2 = currentY + (e.clientY - y1);

        moveElement(x2, y2);
    }
}