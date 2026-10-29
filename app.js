const structure = [
    {
        title: "1. Основные компоненты и архитектура",
        children: [
            {
                title: "Двигательная установка",
                children: [
                    { title: "Рама", children: [{ title: "Рама" }] }, // ТЕПЕРЬ ЭТО ПАПКА
                    { title: "Моторы", children: [{ title: "Моторы" }] },
                    { title: "Пропеллеры", children: [{ title: "Пропеллеры" }] }
                ]
            },
            {
                title: "Электроника",
                children: [
                    { title: "ESC", children: [{ title: "ESC" }] },
                    { title: "FC", children: [{ title: "FC" }] },
                    { title: "PDB / BEC", children: [{ title: "PDB" }] },
                    { title: "Приёмник", children: [{ title: "Приёмник" }] }
                ]
            },
            {
                title: "Видео",
                children: [
                    { title: "VTX", children: [{ title: "VTX" }] },
                    { title: "FPV-камера", children: [{ title: "FPV-камера" }] },
                    { title: "Антенны", children: [{ title: "Антенны" }] }
                ]
            }
        ]
    },
    {
        title: "2. Полётные режимы и управление",
        children: [
            { title: "Angle Mode", children: [{ title: "Angle Mode" }] },
            { title: "Horizon Mode", children: [{ title: "Horizon Mode" }] },
            { title: "Acro Mode", children: [{ title: "Acro Mode" }] },
            { title: "Air Mode", children: [{ title: "Air Mode" }] },
            { title: "Throttle", children: [{ title: "Throttle" }] },
            { title: "Yaw", children: [{ title: "Yaw" }] },
            { title: "Pitch", children: [{ title: "Pitch" }] },
            { title: "Roll", children: [{ title: "Roll" }] },
            { title: "Simulator", children: [{ title: "Simulator" }] },
            { title: "GPS Rescue", children: [{ title: "GPS Rescue" }] }
        ]
    },
    {
        title: "3. Видеосистемы и связь",
        children: [
            { title: "Аналоговое видео", children: [{ title: "Аналоговое видео" }] },
            { title: "Цифровое HD (DJI)", children: [{ title: "Цифровое HD (DJI)" }] },
            { title: "Цифровое HD (HDZero)", children: [{ title: "Цифровое HD (HDZero)" }] },
            { title: "Задержка", children: [{ title: "Задержка" }] },
            { title: "Диапазоны частот", children: [{ title: "Диапазоны частот" }] },
            { title: "Мощность VTX", children: [{ title: "Мощность VTX" }] },
            { title: "Поляризация", children: [{ title: "Поляризация" }] },
            { title: "Очки (Goggles)", children: [{ title: "Очки (Goggles)" }] },
            { title: "Diversity", children: [{ title: "Diversity" }] },
            { title: "Помехоустойчивость", children: [{ title: "Помехоустойчивость" }] }
        ]
    },
    {
        title: "4. Питание и аккумуляторы",
        children: [
            { title: "LiPo", children: [{ title: "LiPo" }] },
            { title: "Li-Ion", children: [{ title: "Li-Ion" }] },
            { title: "Ячейки (S)", children: [{ title: "Ячейки (S)" }] },
            { title: "Ёмкость (mAh)", children: [{ title: "Ёмкость (mAh)" }] },
            { title: "Время полёта", children: [{ title: "Время полёта" }] },
            { title: "Разъёмы", children: [{ title: "Разъёмы" }] },
            { title: "Зарядка", children: [{ title: "Зарядка" }] },
            { title: "Хранение", children: [{ title: "Хранение" }] },
            { title: "Просадки напряжения", children: [{ title: "Просадки напряжения" }] },
            { title: "Риски", children: [{ title: "Риски" }] }
        ]
    },
    {
        title: "5. Применение",
        children: [
            { title: "Гонки", children: [{ title: "Гонки" }] },
            { title: "Фристайл", children: [{ title: "Фристайл" }] },
            { title: "Cinewhoop", children: [{ title: "Cinewhoop" }] },
            { title: "Long Range", children: [{ title: "Long Range" }] },
            { title: "FPV-камикадзе", children: [{ title: "FPV-камикадзе" }] },
            { title: "Разведка", children: [{ title: "Разведка" }] },
            { title: "Поиск и спасение", children: [{ title: "Поиск и спасение" }] },
            { title: "Кинематограф", children: [{ title: "Кинематограф" }] },
            { title: "Инспекция", children: [{ title: "Инспекция" }] },
            { title: "Обучение", children: [{ title: "Обучение" }] }
        ]
    },
    {
        title: "6. Регулирование и безопасность",
        children: [
            { title: "Наблюдатель (VLOS)", children: [{ title: "Наблюдатель (VLOS)" }] },
            { title: "Регистрация", children: [{ title: "Регистрация" }] },
            { title: "Экзамен", children: [{ title: "Экзамен" }] },
            { title: "Зоны полётов", children: [{ title: "Зоны полётов" }] },
            { title: "Высота", children: [{ title: "Высота" }] },
            { title: "Ответственность", children: [{ title: "Ответственность" }] },
            { title: "Помехи", children: [{ title: "Помехи" }] },
            { title: "Погода", children: [{ title: "Погода" }] },
            { title: "Безопасность людей", children: [{ title: "Безопасность людей" }] }
        ]
    },
    {
        title: "7. Настройка и прошивки",
        children: [
            { title: "Betaflight", children: [{ title: "Betaflight" }] },
            { title: "ExpressLRS", children: [{ title: "ExpressLRS" }] },
            { title: "PID", children: [{ title: "PID" }] },
            { title: "Rates", children: [{ title: "Rates" }] },
            { title: "OSD", children: [{ title: "OSD" }] },
            { title: "CLI", children: [{ title: "CLI" }] },
            { title: "Прошивка ESC", children: [{ title: "Прошивка ESC" }] },
            { title: "VTX Tables", children: [{ title: "VTX Tables" }] },
            { title: "Режимы", children: [{ title: "Режимы" }] },
            { title: "Симулятор", children: [{ title: "Симулятор" }] }
        ]
    },
    {
        title: "8. Ремонт и обслуживание",
        children: [
            { title: "Замена пропеллера", children: [{ title: "Замена пропеллера" }] },
            { title: "Перепайка мотора", children: [{ title: "Перепайка мотора" }] },
            { title: "Замена рамы", children: [{ title: "Замена рамы" }] },
            { title: "Проверка антенн", children: [{ title: "Проверка антенн" }] },
            { title: "Чистка", children: [{ title: "Чистка" }] },
            { title: "Проверка винтов", children: [{ title: "Проверка винтов" }] },
            { title: "Диагностика FC", children: [{ title: "Диагностика FC" }] },
            { title: "Замена камеры", children: [{ title: "Замена камеры" }] },
            { title: "Тест моторов", children: [{ title: "Тест моторов" }] },
            { title: "Аккумуляторы", children: [{ title: "Аккумуляторы" }] }
        ]
    },
    {
        title: "9. Сборка и пайка",
        children: [
            { title: "Пайка моторов", children: [{ title: "Пайка моторов" }] },
            { title: "Пайка питания", children: [{ title: "Пайка питания" }] },
            { title: "Пайка VTX", children: [{ title: "Пайка VTX" }] },
            { title: "Установка FC", children: [{ title: "Установка FC" }] },
            { title: "Проверка КЗ", children: [{ title: "Проверка КЗ" }] },
            { title: "Smoke Stopper", children: [{ title: "Smoke Stopper" }] },
            { title: "Антенны", children: [{ title: "Антенны" }] },
            { title: "Укладка проводов", children: [{ title: "Укладка проводов" }] },
            { title: "Прошивка FC", children: [{ title: "Прошивка FC" }] },
            { title: "Тест без пропеллеров", children: [{ title: "Тест без пропеллеров" }] }
        ]
    },
    {
        title: "10. Спецприменение",
        children: [
            { title: "FPV-камикадзе", children: [{ title: "FPV-камикадзе" }] },
            { title: "Дальность", children: [{ title: "Дальность" }] },
            { title: "Нагрузка", children: [{ title: "Нагрузка" }] },
            { title: "Скорость", children: [{ title: "Скорость" }] },
            { title: "Оптоволокно", children: [{ title: "Оптоволокно" }] },
            { title: "Ночные версии", children: [{ title: "Ночные версии" }] },
            { title: "Дешевизна", children: [{ title: "Дешевизна" }] },
            { title: "Маневренность", children: [{ title: "Маневренность" }] },
            { title: "РЭБ", children: [{ title: "РЭБ" }] },
            { title: "Автосопровождение", children: [{ title: "Автосопровождение" }] }
        ]
    }
];

const githubUser = "izeleznov494-source";
const repoName = "fpv-lab";
const appContainer = document.getElementById('app');

// Функция рендера (с поддержкой вложенности)
function render(items, container, level = 0) {
    items.forEach(item => {
        if (item.children) {
            // Это папка
            const folder = document.createElement('div');
            folder.className = 'folder';
            folder.style.marginLeft = `${level * 15}px`; // Отступ
            
            const header = document.createElement('div');
            header.className = 'folder-header';
            // Если это самый верхний уровень (level=0), делаем текст крупнее
            if (level === 0) {
                header.innerHTML = `<span>📁</span><span>${item.title}</span><span class="arrow">▶</span>`;
            } else {
                // Для вложенных папок убираем иконку, чтобы не было визуального шума
                header.innerHTML = `<span>${item.title}</span><span class="arrow">▶</span>`;
            }
            
            const content = document.createElement('div');
            content.className = 'folder-content';
            
            header.addEventListener('click', () => {
                folder.classList.toggle('open');
                if(!folder.classList.contains('open')) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
            
            folder.appendChild(header);
            folder.appendChild(content);
            container.appendChild(folder);
            
            // Рекурсивный вызов для вложенных папок
            render(item.children, content, level + 1);
        } else {
            // Это документ (файл)
            const doc = document.createElement('div');
            doc.className = 'doc';
            doc.style.marginLeft = `${level * 15}px`; // Отступ
            doc.innerHTML = `<span></span> <span>${item.title}</span>`;
            
            doc.addEventListener('click', () => {
                const fileName = `${item.title}.docx`; 
                const rawUrl = `https://raw.githubusercontent.com/${githubUser}/${repoName}/main/${encodeURIComponent(fileName)}`;
                
                const link = document.createElement('a');
                link.href = rawUrl;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
            container.appendChild(doc);
        }
    });
}

render(structure, appContainer);
