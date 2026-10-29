const structure = [
    { title: "1. Основные компоненты и архитектура", children: ["Рама", "Моторы", "ESC", "FC", "VTX", "FPV-камера", "Приёмник", "Антенны", "Пропеллеры", "PDB / BEC"] },
    { title: "2. Полётные режимы и управление", children: ["Angle Mode", "Horizon Mode", "Acro Mode", "Air Mode", "Throttle", "Yaw", "Pitch", "Roll", "Simulator", "GPS Rescue"] },
    { title: "3. Видеосистемы и связь", children: ["Аналоговое видео", "Цифровое HD (DJI)", "Цифровое HD (HDZero)", "Задержка", "Диапазоны частот", "Мощность VTX", "Поляризация", "Очки (Goggles)", "Diversity", "Помехоустойчивость"] },
    { title: "4. Питание и аккумуляторы", children: ["LiPo", "Li-Ion", "Ячейки (S)", "Ёмкость (mAh)", "Время полёта", "Разъёмы", "Зарядка", "Хранение", "Просадки напряжения", "Риски"] },
    { title: "5. Применение", children: ["Гонки", "Фристайл", "Cinewhoop", "Long Range", "FPV-камикадзе", "Разведка", "Поиск и спасение", "Кинематограф", "Инспекция", "Обучение"] },
    { title: "6. Регулирование и безопасность", children: ["Наблюдатель (VLOS)", "Регистрация", "Экзамен", "Зоны полётов", "Высота", "Ответственность", "Помехи", "Погода", "Безопасность людей"] },
    { title: "7. Настройка и прошивки", children: ["Betaflight", "ExpressLRS", "PID", "Rates", "OSD", "CLI", "Прошивка ESC", "VTX Tables", "Режимы", "Симулятор"] },
    { title: "8. Ремонт и обслуживание", children: ["Замена пропеллера", "Перепайка мотора", "Замена рамы", "Проверка антенн", "Чистка", "Проверка винтов", "Диагностика FC", "Замена камеры", "Тест моторов", "Аккумуляторы"] },
    { title: "9. Сборка и пайка", children: ["Пайка моторов", "Пайка питания", "Пайка VTX", "Установка FC", "Проверка КЗ", "Smoke Stopper", "Антенны", "Укладка проводов", "Прошивка FC", "Тест без пропеллеров"] },
    { title: "10. Спецприменение", children: ["FPV-камикадзе", "Дальность", "Нагрузка", "Скорость", "Оптоволокно", "Ночные версии", "Дешевизна", "Маневренность", "РЭБ", "Автосопровождение"] }
];

// ВАЖНО: Твой ник на GitHub и название репозитория
const githubUser = "izeleznov494-source";
const repoName = "fpv-lab";

const allFiles = [
    "Acro Mode (Акро Rate).docx", "Air Mode.docx", "Angle Mode (Угол).docx", "Betaflight.docx", "CLI (Command Line Interface).docx",
    "Cinewhoop.docx", "Diversity.docx", "ExpressLRS (ELRS) .docx", "FPV-гонки (Racing).docx", "FPV-камикадзе (ВоенноеСпец).docx",
    "FPV-камикадзе.docx", "FPV-очки (Goggles).docx", "GPS Rescue Return.docx", "Horizon Mode (Горизонт).docx", "Li-Ion (Литий-ион).docx",
    "LiPo (Литий-полимер).docx", "PDB (Плата распределения питания).docx", "PID-регуляторы.docx", "Rates (Скорости).docx",
    "Simulator Training.docx", "Throttle (Газ).docx", "VTX Tables.docx", "Yaw (Рыскание).docx", "Антенны.docx", "Аналоговое видео.docx",
    "Диапазоны частот.docx", "Задержка (Latency).docx", "Замена камеры.docx", "Замена пропеллера.docx", "Замена рамы.docx",
    "Инспекция.docx", "Кинематограф.docx", "Long Range (Дальний полёт).docx", "Мощность передатчика (VTX).docx", "Моторы.docx",
    "Обучение.docx", "Ответственность.docx", "Пайка VTX.docx", "Пайка моторов.docx", "Пайка питания.docx", "Перепайка мотора.docx",
    "Погода.docx", "Поиск и спасение (SAR).docx", "Полезная нагрузка.docx", "Поляризация антенн.docx", "Помехи.docx",
    "Помехоустойчивость.docx", "Проверка антенн.docx", "Проверка винтов.docx", "Проверка короткого замыкания.docx",
    "Пропеллеры.docx", "Прошивка FC.docx", "Прошивка ESC (Bluejay AM32).docx", "Рама.docx", "Регистрация.docx",
    "Режимы (Modes).docx", "Ремонт и обслуживание.docx", "Риски.docx", "Сборка и пайка.docx", "Скорость.docx",
    "Smoke Stopper.docx", "Тест без пропеллеров.docx", "Тест моторов.docx", "Укладка проводов.docx", "Установка FC.docx",
    "Хранение (Storage).docx", "Цифровое HD (DJI).docx", "Цифровое HD (HDZero).docx", "Чистка.docx", "Экзамен (CATS).docx",
    "Ячейки (S).docx", "Ёмкость (mAh).docx", "Время полёта.docx", "Разъёмы.docx", "Зарядка.docx", "Просадки напряжения.docx",
    "Гонки.docx", "Фристайл.docx", "Разведка.docx", "Диагностика FC.docx", "Аккумуляторы.docx", "OSD (On-Screen Display).docx",
    "Наблюдатель (VLOS).docx", "Зоны полётов.docx", "Высота.docx", "Безопасность людей.docx", "Дальность.docx",
    "Оптоволокно.docx", "Ночные версии.docx", "Дешевизна.docx", "Маневренность.docx", "РЭБ.docx", "Автосопровождение.docx"
];

const appContainer = document.getElementById('app');

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
            
            const childrenObjects = item.children.map(title => ({ title }));
            render(childrenObjects, content);
        } else {
            const doc = document.createElement('div');
            doc.className = 'doc';
            doc.innerHTML = `<span>📥</span> <span>${item.title}</span>`;
            
            doc.addEventListener('click', () => {
                const foundFile = allFiles.find(fileName => 
                    fileName.toLowerCase().startsWith(item.title.toLowerCase())
                );

                if (foundFile) {
                    // Формируем прямую ссылку на скачивание (Raw)
                    const rawUrl = `https://raw.githubusercontent.com/${githubUser}/${repoName}/main/${foundFile}`;
                    
                    const link = document.createElement('a');
                    link.href = encodeURI(rawUrl); 
                    link.download = foundFile; 
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    alert(`Файл для "${item.title}" не найден.\nУбедитесь, что название файла на GitHub совпадает с названием пункта.`);
                }
            });
            container.appendChild(doc);
        }
    });
}

render(structure, appContainer);
