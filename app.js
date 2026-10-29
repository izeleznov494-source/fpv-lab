const data = [
    { title: "1. Основные компоненты и архитектура", children: [{ title: "Рама" }, { title: "Моторы" }, { title: "ESC" }, { title: "FC" }, { title: "VTX" }, { title: "FPV-камера" }, { title: "Приёмник" }, { title: "Антенны" }, { title: "Пропеллеры" }, { title: "PDB / BEC" }] },
    { title: "2. Полётные режимы и управление", children: [{ title: "Angle Mode" }, { title: "Horizon Mode" }, { title: "Acro Mode" }, { title: "Air Mode" }, { title: "Throttle" }, { title: "Yaw" }, { title: "Pitch" }, { title: "Roll" }, { title: "Simulator" }, { title: "GPS Rescue" }] },
    { title: "3. Видеосистемы и связь", children: [{ title: "Аналоговое видео" }, { title: "Цифровое HD (DJI)" }, { title: "Цифровое HD (HDZero)" }, { title: "Задержка" }, { title: "Диапазоны частот" }, { title: "Мощность VTX" }, { title: "Поляризация" }, { title: "Очки (Goggles)" }, { title: "Diversity" }, { title: "Помехоустойчивость" }] },
    { title: "4. Питание и аккумуляторы", children: [{ title: "LiPo" }, { title: "Li-Ion" }, { title: "Ячейки (S)" }, { title: "Ёмкость (mAh)" }, { title: "Время полёта" }, { title: "Разъёмы" }, { title: "Зарядка" }, { title: "Хранение" }, { title: "Просадки напряжения" }, { title: "Риски" }] },
    { title: "5. Применение", children: [{ title: "Гонки" }, { title: "Фристайл" }, { title: "Cinewhoop" }, { title: "Long Range" }, { title: "FPV-камикадзе" }, { title: "Разведка" }, { title: "Поиск и спасение" }, { title: "Кинематограф" }, { title: "Инспекция" }, { title: "Обучение" }] },
    { title: "6. Регулирование и безопасность", children: [{ title: "Наблюдатель (VLOS)" }, { title: "Регистрация" }, { title: "Экзамен" }, { title: "Зоны полётов" }, { title: "Высота" }, { title: "Ответственность" }, { title: "Помехи" }, { title: "Погода" }, { title: "Безопасность людей" }] },
    { title: "7. Настройка и прошивки", children: [{ title: "Betaflight" }, { title: "ExpressLRS" }, { title: "PID" }, { title: "Rates" }, { title: "OSD" }, { title: "CLI" }, { title: "Прошивка ESC" }, { title: "VTX Tables" }, { title: "Режимы" }, { title: "Симулятор" }] },
    { title: "8. Ремонт и обслуживание", children: [{ title: "Замена пропеллера" }, { title: "Перепайка мотора" }, { title: "Замена рамы" }, { title: "Проверка антенн" }, { title: "Чистка" }, { title: "Проверка винтов" }, { title: "Диагностика FC" }, { title: "Замена камеры" }, { title: "Тест моторов" }, { title: "Аккумуляторы" }] },
    { title: "9. Сборка и пайка", children: [{ title: "Пайка моторов" }, { title: "Пайка питания" }, { title: "Пайка VTX" }, { title: "Установка FC" }, { title: "Проверка КЗ" }, { title: "Smoke Stopper" }, { title: "Антенны" }, { title: "Укладка проводов" }, { title: "Прошивка FC" }, { title: "Тест без пропеллеров" }] },
    { title: "10. Спецприменение", children: [{ title: "FPV-камикадзе" }, { title: "Дальность" }, { title: "Нагрузка" }, { title: "Скорость" }, { title: "Оптоволокно" }, { title: "Ночные версии" }, { title: "Дешевизна" }, { title: "Маневренность" }, { title: "РЭБ" }, { title: "Автосопровождение" }] }
];

function render(items, container) {
    items.forEach(item => {
        if (item.children) {
            const folder = document.createElement('div');
            folder.className = 'folder';
            const header = document.createElement('div');
            header.className = 'folder-header';
            header.innerHTML = `<span>📁</span><span>${item.title}</span><span class="arrow">▶</span>`;
            const content = document.createElement('div');
            content.className = 'folder-content';
            header.addEventListener('click', () => folder.classList.toggle('open'));
            folder.appendChild(header);
            folder.appendChild(content);
            container.appendChild(folder);
            render(item.children, content);
        } else {
            const doc = document.createElement('div');
            doc.className = 'doc';
            doc.textContent = item.title;
            doc.addEventListener('click', () => alert(`Документ: ${item.title}\n\n(Здесь будет текст)`));
            container.appendChild(doc);
        }
    });
}
render(data, document.getElementById('app'));
