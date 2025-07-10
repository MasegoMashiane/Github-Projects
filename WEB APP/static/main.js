
document.addEventListener('DOMContentLoaded', () => {
    const valueList = document.getElementById('value-list');
    let draggedItem = null;

    valueList.addEventListener('dragstart', e => {
        draggedItem = e.target;
    });

    valueList.addEventListener('dragover', e => {
        e.preventDefault();
        const target = e.target;
        if (target.tagName === 'LI' && target !== draggedItem) {
            const bounding = target.getBoundingClientRect();
            const offset = bounding.y + bounding.height / 2;
            if (e.clientY - offset > 0) {
                target.after(draggedItem);
            } else {
                target.before(draggedItem);
            }
        }
    });

    valueList.addEventListener('dragend', () => {
        const items = Array.from(valueList.children).map(li => li.textContent);
        const values = items.map((item, index) => items.length - index);

        const ctx = document.getElementById('valueChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: items,
                datasets: [{
                    label: 'Subjective Value Ranking',
                    data: values,
                    backgroundColor: 'gold'
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Your Subjective Value Rankings'
                    }
                },
                indexAxis: 'y'
            }
        });
    });

    const capitalCtx = document.getElementById('capitalChart').getContext('2d');
    new Chart(capitalCtx, {
        type: 'bar',
        data: {
            labels: ['Raw Materials', 'Manufacturing', 'Distribution', 'Retail'],
            datasets: [{
                label: 'Stages of Production',
                data: [20, 40, 25, 15],
                backgroundColor: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f']
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Capital Structure: Austrian Economics View'
                }
            }
        }
    });
});
