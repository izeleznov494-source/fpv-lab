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

const githubUser = "izeleznov494-source";
const repoName = "fpv-lab";

// Функция, которая переводит русские буквы в английские (транслит)
function translit(word) {
    const converter = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts',
        'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
    };

    return word.split('').map(char => {
        const lower = char.toLowerCase();
        if (converter[lower]) {
            // Если буква была заглавной, делаем и английскую заглавной
            return char === char.toUpperCase() ? converter[lower].toUpperCase() : converter[lower];
        }
        if (/[a-zA-Z0-9]/.test(char)) {
            return char;
        }
        if (char === ' ') {
            return '_';
        }
        return char;
    }).join('');
}

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
            
            doc.addEventListener('click', async () => {
                // Автоматически переводим название кнопки в английское имя файла
                let engName = translit(item.title);
                
                // Убираем лишние символы (скобки, слэши), которые могут быть в названиях
                engName = engName.replace(/[^a-zA-Z0-9_]/g, '');
                const fileName = `${engName}.docx`;

                // Ссылка на скачивание
                const rawUrl = `https://raw.githubusercontent.com/${githubUser}/${repoName}/main/${fileName}`;
                
                doc.innerHTML = `<span>⏳</span> <span>Загрузка...</span>`;
                
                try {
                    const response = await fetch(rawUrl);
                    if (!response.ok) throw new Error('File not found');
                    
                    const blob = await response.blob();
                    const blobUrl = window.URL.createObjectURL(blob);
                    
                    const link = document.createElement('a');
                    link.href = blobUrl;
                    link.download = fileName; // Скачается как "Rama.docx"
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(blobUrl);
                    
                    doc.innerHTML = `<span>✅</span> <span>${item.title}</span>`;
                } catch (error) {
                    alert(`Файл ${fileName} не найден.\nПроверьте, как он назван на GitHub.`);
                    doc.innerHTML = `<span>❌</span> <span>${item.title}</span>`;
                }
            });
            container.appendChild(doc);
        }
    });
}

render(structure, appContainer);
