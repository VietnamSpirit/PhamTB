document.addEventListener('DOMContentLoaded', function() {
    // Lunar date logic (unchanged)
    const today = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const normalDate = `${months[today.getMonth()]} ${String(today.getDate()).padStart(2, '0')}, ${today.getFullYear()}`;
    const todaySolar = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const lunarToday = lookupTable.find(entry => entry['Ngày dương lịch'] === todaySolar);
    const lunarDateField = document.getElementById('lunar-date');

    if (lunarToday) {
        const [lunarDay, lunarMonth] = lunarToday['Ngày âm lịch'].split('/').slice(0, 2);
        lunarDateField.value = [
            `Hôm nay ${normalDate}`,
            ` tức âm lịch mùng ${lunarDay}/${lunarMonth}${lunarToday['Tháng nhuận'] === '1' ? ' (Nhuận)' : ''}`,
            ` ngày ${lunarToday['Ngày Can-Chi']}`,
            ` tháng ${lunarToday['Tháng Can-Chi']}`,
            ` năm ${lunarToday['Năm Can-Chi']}`
        ].join('\n');
    } else {
        lunarDateField.value = `${normalDate}\nNgày âm lịch không có trong bảng`;
    }

    // Commemoration logic (unchanged)
    function checkCommemorations() { /* ... */ }
    checkCommemorations();

    // Candle animation (unchanged)
    let candleIndex = 0;
    const candleFrames = [ /* ... */ ];
    function animateCandle() { /* ... */ }
    setInterval(animateCandle, 200);

    // Snowflake effect
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    function resizeCanvas() {
        const lunarInfo = document.getElementById("lunar-info");
        canvas.width = lunarInfo.offsetWidth;
        canvas.height = lunarInfo.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particles = [];
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 3 + 1,
            d: Math.random() * 80
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }

    function update() {
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.y += Math.cos(p.d) + 1 + p.r / 2;
            p.x += Math.sin(p.d) * 2;
            if (p.x > canvas.width || p.x < 0 || p.y > canvas.height) {
                particles[i] = { x: Math.random() * canvas.width, y: -10, r: p.r, d: p.d };
            }
        }
    }

    setInterval(draw, 40);
});