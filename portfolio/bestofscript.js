document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.gallery-item');
    let heights = [0, 0, 0]; // Initial heights of each column

    items.forEach((item, index) => {
        const columnIndex = index % 3;
        item.style.marginTop = (heights[columnIndex] + 5) + 'px';
        heights[columnIndex] += item.offsetHeight + 5;
    });
});
