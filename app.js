const data = [
    { title: "1. Основные компоненты и архитектура", children: [{ title: "Рама", text: "Здесь будет подробный текст про рамы..." }, { title: "Моторы", text: "Текст про моторы..." }, { title: "ESC", text: "..." }, { title: "FC", text: "..." }, { title: "VTX", text: "..." }, { title: "FPV-камера", text: "..." }, { title: "Приёмник", text: "..." }, { title: "Антенны", text: "..." }, { title: "Пропеллеры", text: "..." }, { title: "PDB / BEC", text: "..." }] },
    { title: "2. Полётные режимы и управление", children: [{ title: "Angle Mode", text: "..." }, { title: "Horizon Mode", text: "..." }, { title: "Acro Mode", text: "..." }, { title: "Air Mode", text: "..." }, { title: "Throttle", text: "..." }, { title: "Yaw", text: "..." }, { title: "Pitch", text: "..." }, { title: "Roll", text: "..." }, { title: "Simulator", text: "..." }, { title: "GPS Rescue", text: "..." }] },
    { title: "3. Видеосистемы и связь", children: [{ title: "Аналоговое видео", text: "..." }, { title: "Цифровое HD (DJI)", text: "..." }, { title: "Цифровое HD (HDZero)", text: "..." }, { title: "Задержка", text: "..." }, { title: "Диапазоны частот", text: "..." }, { title: "Мощность VTX", text: "..." }, { title: "Поляризация", text: "..." }, { title: "Очки (Goggles)", text: "..." }, { title: "Diversity", text: "..." }, { title: "Помехоустойчивость", text: "..." }] },
    { title: "4. Питание и аккумуляторы", children: [{ title: "LiPo", text: "..." }, { title: "Li-Ion", text: "..." }, { title: "Ячейки (S)", text: "..." }, { title: "Ёмкость (mAh)", text: "..." }, { title: "Время полёта", text: "..." }, { title: "Разъёмы", text: "..." }, { title: "Зарядка", text: "..." }, { title: "Хранение", text: "..." }, { title: "Просадки напряжения", text: "..." }, { title: "Риски", text: "..." }] },
    { title: "5. Применение", children: [{ title: "Гонки", text: "..." }, { title: "Фристайл", text: "..." }, { title: "Cinewhoop", text: "..." }, { title: "Long Range", text: "..." }, { title: "FPV-камикадзе", text: "..." }, { title: "Разведка", text: "..." }, { title: "Поиск и спасение", text: "..." }, { title: "Кинематограф", text: "..." }, { title: "Инспекция", text: "..." }, { title: "Обучение", text: "..." }] },
    { title: "6. Регулирование и безопасность", children: [{ title: "Наблюдатель (VLOS)", text: "..." }, { title: "Регистрация", text: "..." }, { title: "Экзамен", text: "..." }, { title: "Зоны полётов", text: "..." }, { title: "Высота", text: "..." }, { title: "Ответственность", text: "..." }, { title: "Помехи", text: "..." }, { title: "Погода", text: "..." }, { title: "Безопасность людей", text: "..." }] },
    { title: "7. Настройка и прошивки", children: [{ title: "Betaflight", text: "..." }, { title: "ExpressLRS", text: "..." }, { title: "PID", text: "..." }, { title: "Rates", text: "..." }, { title: "OSD", text: "..." }, { title: "CLI", text: "..." }, { title: "Прошивка ESC", text: "..." }, { title: "VTX Tables", text: "..." }, { title: "Режимы", text: "..." }, { title: "Симулятор", text: "..." }] },
    { title: "8. Ремонт и обслуживание", children: [{ title: "Замена пропеллера", text: "..." }, { title: "Перепайка мотора", text: "..." }, { title: "Замена рамы", text: "..." }, { title: "Проверка антенн", text: "..." }, { title: "Чистка", text: "..." }, { title: "Проверка винтов", text: "..." }, { title: "Диагностика FC", text: "..." }, { title: "Замена камеры", text: "..." }, { title: "Тест моторов", text: "..." }, { title: "Аккумуляторы", text: "..." }] },
    { title: "9. Сборка и пайка", children: [{ title: "Пайка моторов", text: "..." }, { title: "Пайка питания", text: "..." }, { title: "Пайка VTX", text: "..." }, { title: "Установка FC", text: "..." }, { title: "Проверка КЗ", text: "..." }, { title: "Smoke Stopper", text: "..." }, { title: "Антенны", text: "..." }, { title: "Укладка проводов", text: "..." }, { title: "Прошивка FC", text: "..." }, { title: "Тест без пропеллеров", text: "..." }] },
    { title: "10. Спецприменение", children: [{ title: "FPV-камикадзе", text: "..." }, { title: "Дальность", text: "..." }, { title: "Нагрузка", text: "..." }, { title: "Скорость", text: "..." }, { title: "Оптоволокно", text: "..." }, { title: "Ночные версии", text: "..." }, { title: "Дешевизна", text: "..." }, { title: "Маневренность", text: "..." }, { title: "РЭБ", text: "..." }, { title: "Автосопровождение", text: "..." }] }
];

const appContainer = document.getElementById('app');
const mainHeader = document.getElementById('main-header');
const readerView = document.getElementById('reader-view');
const readerTitle = document.getElementById('reader-title');
const readerContent = document.getElementById('reader-content');

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
                // Если закрываем папку, плавно скрываем контент
                if(!folder.classList.contains('open')) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
            
            folder.appendChild(header);
            folder.appendChild(content);
            container.appendChild(folder);
            
            render(item.children, content);
        } else {
            const doc = document.createElement('div');
            doc.className = 'doc';
            doc.innerHTML = `<span>📄</span> <span>${item.title}</span>`;
            doc.addEventListener('click', () => {
                openReader(item.title, item.text || "Текст лекции пока не добавлен.");
            });
            container.appendChild(doc);
        }
    });
}

function openReader(title, text) {
    readerTitle.textContent = title;
    // Заменяем переносы строк на HTML теги для красивого отображения
    readerContent.innerHTML = text.replace(/\n/g, '<br><br>'); 
    
    mainHeader.classList.add('hidden');
    appContainer.classList.add('hidden');
    readerView.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function closeReader() {
    mainHeader.classList.remove('hidden');
    appContainer.classList.remove('hidden');
    readerView.classList.add('hidden');
}

// Инициализация
render(data, appContainer);
