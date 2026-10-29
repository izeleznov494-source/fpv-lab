// ВНИМАНИЕ: Здесь мы создаем структуру с вложенными папками (как в проводнике)
const structure = [
    {
        title: "1. Основные компоненты и архитектура",
        children: [
            {
                title: "Двигательная установка",
                children: ["Рама", "Моторы", "Пропеллеры"]
            },
            {
                title: "Электроника",
                children: ["ESC", "FC", "PDB / BEC", "Приёмник"]
            },
            {
                title: "Видео",
                children: ["VTX", "FPV-камера", "Антенны"]
            }
        ]
    },
    {
        title: "2. Полётные режимы и управление",
        children: [
            { title: "Angle Mode" },
            { title: "Horizon Mode" },
            { title: "Acro Mode" },
            { title: "Air Mode" },
            { title: "Throttle" },
            { title: "Yaw" },
            { title: "Pitch" },
            { title: "Roll" },
            { title: "Simulator" },
            { title: "GPS Rescue" }
        ]
    },
    {
        title: "3. Видеосистемы и связь",
        children: [
            {
                title: "Аналог",
                children: ["Аналоговое видео"]
            },
            {
                title: "Цифра",
                children: ["Цифровое HD (DJI)", "Цифровое HD (HDZero)"]
            },
            { title: "Задержка" },
            { title: "Диапазоны частот" },
            { title: "Мощность VTX" },
            { title: "Поляризация" },
            { title: "Очки (Goggles)" },
            { title: "Diversity" },
            { title: "Помехоустойчивость" }
        ]
    },
    {
        title: "4. Питание и аккумуляторы",
        children: [
            { title: "LiPo" }, { title: "Li-Ion" }, { title: "Ячейки (S)" }, 
            { title: "Ёмкость (mAh)" }, { title: "Время полёта" }, { title: "Разъёмы" }, 
            { title: "Зарядка" }, { title: "Хранение" }, { title: "Просадки напряжения" }, { title: "Риски" }
        ]
    },
    { title: "5. Применение", children: ["Гонки", "Фристайл", "Cinewhoop", "Long Range", "FPV-камикадзе", "Разведка", "Поиск и спасение", "Кинематограф", "Инспекция", "Обучение"] },
    { title: "6. Регулирование и безопасность", children: ["Наблюдатель (VLOS)", "Регистрация", "Экзамен", "Зоны полётов", "Высота", "Ответственность", "Помехи", "Погода", "Безопасность людей"] },
    { title: "7. Настройка и прошивки", children: ["Betaflight", "ExpressLRS", "PID", "Rates", "OSD", "CLI", "Прошивка ESC", "VTX Tables", "Режимы", "Симулятор"] },
    { title: "8. Ремонт и обслуживание", children: ["Замена пропеллера", "Перепайка мотора", "Замена рамы", "Проверка антенн", "Чистка", "Проверка винтов", "Диагностика FC", "Замена камеры", "Тест моторов", "Аккумуляторы"] },
    { title: "9. Сборка и пайка", children: ["Пайка моторов", "Пайка питания", "Пайка VTX", "Установка FC", "Проверка КЗ", "Smoke Stopper", "Антенны", "Укладка проводов", "Прошивка FC", "Тест без пропеллеров"] },
    { title: "10. Спецприменение", children: ["FPV-камикадзе", "Дальность", "Нагрузка", "Скорость", "Оптоволокно", "Ночные версии", "Дешевизна", "Маневренность", "РЭБ", "Автосопровождение"] }
];

const githubUser = "izeleznov494-source";
const repoName = "fpv-lab";
const appContainer = document.getElementById('app');

// Функция рендера (теперь с поддержкой вложенности)
function render(items, container, level = 0) {
    items.forEach(item => {
        if (item.children) {
            // Это папка
            const folder = document.createElement('div');
            folder.className = 'folder';
            // Добавляем отступ в зависимости от уровня вложенности
            folder.style.marginLeft = `${level * 15}px`; 
            
            const header = document.createElement('div');
            header.className = 'folder-header';
            header.innerHTML = `<span>📁</span><span>${item.title}</span><span class="arrow">▶</span>`;
            
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
            
            // Рекурсивно вызываем рендер для вложенных папок, увеличивая уровень
            render(item.children, content, level + 1);
        } else {
            // Это файл (документ)
            const doc = document.createElement('div');
            doc.className = 'doc';
            doc.style.marginLeft = `${level * 15}px`; // Отступ для файлов
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
