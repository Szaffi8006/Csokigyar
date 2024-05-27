function fullStack(frontEnd, backEnd) {
    const frontEndDevs = frontEnd.split(';').map(dev => dev.trim());
    const backEndDevs = backEnd.split(';').map(dev => dev.trim());
    const fullStackDevs = frontEndDevs.filter(dev => backEndDevs.includes(dev));
    return fullStackDevs;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function() {
        const frontEndInput = document.getElementById('frontEnd').value;
        const backEndInput = document.getElementById('backEnd').value;
        const result = fullStack(frontEndInput, backEndInput);

        const resultList = document.getElementById('result');
        resultList.innerHTML = '';
        result.forEach(dev => {
            const li = document.createElement('li');
            li.textContent = dev;
            resultList.appendChild(li);
        });
    });
});
