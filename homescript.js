// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Lunar date logic
    const today = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const normalDate = `${months[today.getMonth()]} ${String(today.getDate()).padStart(2, '0')}, ${today.getFullYear()}`;
    const todaySolar = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const lunarToday = lookupTable.find(entry => entry['Ngày dương lịch'] === todaySolar);
    const lunarDateField = document.getElementById('lunar-date');

    /*if (lunarToday) {
        const [lunarDay, lunarMonth] = lunarToday['Ngày âm lịch'].split('/').slice(0, 2);
        lunarDateField.value = [
            'Hôm nay ', `${normalDate}`,
            ' tức mùng ',
            `${lunarDay}/${lunarMonth}${lunarToday['Tháng nhuận'] === '1' ? ' (Nhuận)' : ''}`,
            ' ', `${lunarToday['Ngày trong tuần']}`,
            ` ngày ${lunarToday['Ngày Can-Chi']}`,
            ` tháng ${lunarToday['Tháng Can-Chi']}`,
            ` năm ${lunarToday['Năm Can-Chi']}`
        ].join('\n');
    } else {
        lunarDateField.value = `${normalDate}\nNgày âm lịch không có trong bảng`;
    }*/
        if (lunarToday) {
            const [lunarDay, lunarMonth] = lunarToday['Ngày âm lịch'].split('/').slice(0, 2);
            lunarDateField.value = [
                `Hôm nay ${normalDate}`,
                ` tức âm lịch mùng ${lunarDay}/${lunarMonth}${lunarToday['Tháng nhuận'] === '1' ? ' (Nhuận)' : ''}`,
                /*`${lunarToday['Ngày trong tuần']}`,*/
                ` ngày ${lunarToday['Ngày Can-Chi']}`,
                ` tháng ${lunarToday['Tháng Can-Chi']}`,
                ` năm ${lunarToday['Năm Can-Chi']}`
            ]/*.join('\n'); /*cai nay can khi de ben doc xuong dong tung field */
        } else {
            lunarDateField.value = `${normalDate}\nNgày âm lịch không có trong bảng`;
        }

    // Commemoration logic
    function checkCommemorations() {
        console.log('Checking commemorations...');
        console.log('Today Solar:', todaySolar);
        console.log('Lunar Today:', lunarToday);

        if (!lunarToday) {
            console.log('No lunar date found for today');
            return;
        }

        const todayDay = String(lunarToday['Ngày âm lịch'].split('/')[0]).padStart(2, '0');
        const todayMonth = String(lunarToday['Ngày âm lịch'].split('/')[1]).padStart(2, '0');
        const reminderDiv = document.getElementById('reminder');
        let reminders = [];

        console.log('Today Lunar Day:', todayDay, 'Today Lunar Month:', todayMonth);

        datajs.forEach(person => {
            if (person["Death Date (Vietnamese Lunar)"]) {
                const [lunarDay, lunarMonth] = person["Death Date (Vietnamese Lunar)"].split('/').map(s => s.trim().padStart(2, '0')).slice(0, 2);
                console.log(`Person: ${person["Real Name"]}, Death Date: ${lunarDay}/${lunarMonth}`);
                if (lunarDay === todayDay && lunarMonth === todayMonth) {
                    let note = person["Note"] || "Không có";
                    if (note.includes("Photos/")) {
                        note = note.replace(/Photos\/[^|\s]+/g, '').trim();
                        note = note || (person["Note"] && person["Note"].replace(/Photos\/[^|\s]+/g, '').trim()) || "Không có";
                    }
                    const details = [
                        `Ngày giỗ cụ ${person["Real Name"]}`,
                        `ID: ${person["ID"]}`,
                        `Ngày mất: ${person["Death Date (Vietnamese Lunar)"]}`,
                        `Giới tính: ${person["Sex"] === "M" ? "Nam" : "Nữ"}`,
                        `Địa chỉ: ${person["Address"]}`,
                        `Ghi chú: ${note}`,
                        `Gốc: ${person["Gốc"] || "Không có"}`,
                        `Thế hệ: ${person["Generation"]}`
                    ].join('\n');
                    reminders.push(details);
                }
            }
        });

        console.log('Reminders found:', reminders);
        reminderDiv.innerText = reminders.length > 0 ? reminders.join('\n\n') : 'Không có ngày giỗ hôm nay';
    }
    checkCommemorations();

    // Candle and particle animation
    let candleIndex = 0;
    const candleFrames = [
        "photos/web/0.png", "photos/web/1.png", "photos/web/2.png", "photos/web/3.png",
        "photos/web/4.png", "photos/web/5.png", "photos/web/6.png", "photos/web/7.png",
        "photos/web/8.png", "photos/web/2.png", "photos/web/1.png"
    ];
    function animateCandle() {
        candleIndex = (candleIndex + 1) % candleFrames.length;
        document.getElementById("candle-left").src = candleFrames[candleIndex];
        document.getElementById("candle-right").src = candleFrames[candleIndex];
    }
    setInterval(animateCandle, 200);

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    let particles = [];
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 3 + 1,
            d: Math.random() * 80
        });
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
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
            if (p.x > W || p.x < 0 || p.y > H) {
                particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
            }
        }
    }
    setInterval(draw, 40);
});